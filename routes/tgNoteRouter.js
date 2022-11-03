const express = require('express');
const router = express.Router();
// const Note = require('../models/tgNote');

const tgNoteController = require('../controllers/tgNoteController');

router.get('/create', (req, res) => {
  res.render('createTgNote', {
    title: 'new tg note',
    isCreate: true,
  });
});

// router.post('/create', async (req, res) => {
//   const note = new Note({
//     title: req.body.note,
//     createdAt: new Date()
//   });
//
//   await note.save();
//
//   res.render('secreetCode', {
//     title: 'secreetCode',
//     id: note._id,
//     isCreate: true,
//   });
//
// });

router.post('/', async (req, res) => {
  res.redirect('/tgNote/' + req.body.id);
});

router.get('/:id', tgNoteController.showNote);

module.exports = router;
