const { Router } = require('express');
const Note = require('../models/Note');
const router = Router();
const indexController = require('../controllers/indexController');

router.get('/', async (req, res) => {
  const notes = await Note.find({}).lean();

  res.render('index', {
    title: 'Main',
    isIndex: true,
    notes
  });
});


module.exports = router;
