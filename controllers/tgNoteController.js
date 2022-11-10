const TgNote = require('../models/TgNote');
const TgNoteDumpster = require('../models/TgNoteDumpster');
const cookieParser = require('cookie-parser');

exports.showTgNote = async function(req, res) {
  let id = '';

  if (req.cookies) {
    id = req.cookies.userID
  } else {
    id = req.params.chatId;
  }

  let note = await TgNote.find({'tgId': id});

  if (note) {
    res.render('userTgNotes', {
      title: 'нагадайки',
      note:  note,
      isIndex: true,
      isHistory: false,
      chatId: id
    });
  } else {
    res.render('note', {
      title: 'ноти не існує!(',
      note:  'ноти не існує!(',
      isIndex: true,
      chatId: id
    });
  }
};

exports.createNote = async function(req, res) {
  const note = new TgNote({
    title: req.body.note,
    createdAt: JSON.stringify(new Date()),
    tgId:  req.body.chatId,
    sendAt:  {
    //  date: Date.UTC(req.body.sendAtDate+req.body.sendAtTime),
      date: req.body.sendAtDate,
      time: req.body.sendAtTime
    }
  });

  await note.save();

  res.cookie('userID', req.body.chatId, {
    maxAge: 3600 * 24 * 7
  })

  res.redirect('/tgNote/' + req.body.chatId);
}

exports.showHistory = async function(req, res) {
  let id = '';

  if (req.cookies) {
    id = req.cookies.userID
  } else {
    id = req.params.chatId;
  }

  let note = await TgNoteDumpster.find({'tgId': id});
  if (note) {
    res.render('userTgNotes', {
      title: 'історія',
      note:  note,
      isIndex: true,
      isHistory: true,
      chatId: id
    });
  } else {
    res.render('userTgNotes', {
      title: 'ноти не існує!(',
      note:  'ноти не існує!(',
      isIndex: true,
      chatId: id
    });
  }
};

exports.editNote = async function(req, res) {
// TODO:
}

exports.deleteNote = async function(req, res) {
    await  TgNote.deleteOne( { "_id" : req.body.id });
    res.redirect('/tgNote/' + req.body.tgId);
}
