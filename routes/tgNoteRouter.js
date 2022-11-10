const express = require('express');
const router = express.Router();
const TgNote = require('../models/TgNote');

const tgNoteController = require('../controllers/tgNoteController');

router.get('/', (req, res) => {
  if (req.cookies.userID) {
    res.render('createTgNote', {
      title: 'new tg note',
      isCreate: true,
      id: req.cookies.userID
    });
  } else {
    res.render('tgNote', {
      title: 'new tg note',
      isCreate: true,
    });
  }
});

router.get('/create/', (req, res) => {
  res.render('createTgNote', {
    title: 'new tg note',
    isCreate: true,
    req: req,
    id: req.cookies.userID
  });
});

router.get('/history', tgNoteController.showHistory);
router.post('/create', tgNoteController.createNote);

router.get('/:chatId', tgNoteController.showTgNote);

router.post('/delete/:id', tgNoteController.deleteNote);

module.exports = router;
