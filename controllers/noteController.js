const Note = require('../models/Note');

exports.showNote = async function(req, res) {
  const id = req.params.id;
  let note = await Note.findOne({'_id': id});

  if ( note) {
    res.render('note', {
      title: note.title,
      note:  note.title,
      isIndex: true,
    });

    await  Note.deleteOne( { "_id" : id });

  } else {
    res.render('note', {
      title: 'Ноти не існує!(',
      note:  'Ноти не існує!(',
      isIndex: true,
    });
  }

};
