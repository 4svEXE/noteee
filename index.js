const SERVER_CONF = require('./config');
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const tgBot = require('./tgBot');
const sendNoteToTG = require('./sendNoteToTG');


const indexRouter = require('./routes/indexRouter');
const noteRouter = require('./routes/noteRouter');
const tgNoteRouter = require('./routes/tgNoteRouter');

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ encoded: false })); //true
app.use(cookieParser('userTgID'))

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(indexRouter);
app.use('/note', noteRouter);
app.use('/tgNote', tgNoteRouter);

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
  });
});



async function start() {
  try {
    await mongoose.connect(
      SERVER_CONF.DB.MONGO,
      {
        useNewUrlParser: true
      }
    );

    app.listen(SERVER_CONF.SERVER.PORT, () => {
      console.log('SERVER START: http://' + SERVER_CONF.SERVER.HOST + ':'+ SERVER_CONF.SERVER.PORT);
    });

  } catch(e) {
    console.log(e);
  }
}

start();
