const CONF = require('./config');

const TgNote = require('./models/TgNote');
const TgNoteDumpster = require('./models/TgNoteDumpster');

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

async function deleteFromMongo(it){
  await TgNote.deleteOne({ it });
  //console.log('deleted');
}

async function addInDumpsterMongo(it){
  const note = new TgNoteDumpster({
    title: it.title,
    createdAt: it.createdAt,
    tgId:  it.tgId,
    sendAt:  {
      date: it.sendAt.date,
      time: it.sendAt.time
    }
  });

  await note.save();
  deleteInDumpsterMongo(it);
}

async function deleteInDumpsterMongo(it) {
  let userNotes = await TgNoteDumpster.find({'tgId':  it.tgId});

  for (var i = 4; i < userNotes.length-1; i++) {
    userNotes = await TgNoteDumpster.find({'tgId':  it.tgId});
    await TgNoteDumpster.deleteOne(userNotes[i-4]);
    //console.log('last deleted');
  }
}

function normalize(date) {
  return date < 10? date = '0' + date: date;
}

const deleteAndSendNote = setInterval( async function(){
  let notes = await TgNote.find({_v:0});
  let d = new Date();
  let xhttp = new XMLHttpRequest();

  notes.forEach((item, i) => {
    let sendAt = item.sendAt.date;
    let H = item.sendAt.time.substr(0,2); //Hours when to send sms to user
    let M = item.sendAt.time.substr(3,5); //Minutes

    let itemDate = new Date(Date.UTC(
      sendAt.getFullYear(), sendAt.getMonth(), sendAt.getDate(), H, M
    ));
    let newDate = new Date(Date.UTC(
      d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()
    ));

    let numCurrTime = itemDate.getTime();
    let numSendTime = newDate.getTime();


    if (numSendTime >= numCurrTime) {
      const tgURL = 'https://api.telegram.org/bot';
      const sendMsg = '/sendMessage?chat_id=';
      const encodedTitle = encodeURIComponent(item.title);
      const url =
      `${tgURL}${CONF.TG.BOT_TOKEN}${sendMsg}${item.tgId}&text=${encodedTitle}`;

      xhttp.open("GET", url, true);
      xhttp.send();

      deleteFromMongo(item);
      addInDumpsterMongo(item);

      //console.log('note is ready!');
    }
    //console.log(numSendTime , numCurrTime, itemDate , newDate);
  });
}, 60000);
