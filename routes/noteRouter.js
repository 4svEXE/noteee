const SERVER_CONF = require('../config');
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

const noteController = require('../controllers/noteController');

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'new note',
    isCreate: true,
  });
});

router.post('/create', async (req, res) => {
  const note = new Note({
    title: req.body.note,
    createdAt: new Date()
  });

  await note.save();

  res.render('secreetCode', {
    title: 'secreetCode',
    id: note._id,
    isCreate: true,
    HOST: SERVER_CONF.SERVER.HOST,
    PORT: SERVER_CONF.SERVER.PORT
  });

});

router.post('/', async (req, res) => {
  res.redirect('/note/' + req.body.id);
});

router.get('/:id', noteController.showNote);

module.exports = router;
