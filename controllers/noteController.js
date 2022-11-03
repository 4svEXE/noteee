const Note = require('../models/Note');

exports.showNote = async function(req, res) {
  const id = req.params.id;
  let note = await Note.find({'_id': id});

  if ( note) {
    res.render('note', {
      title: note[0].title,
      note:  note[0].title,
      isIndex: true,
    });

    await  Note.deleteOne( { "_id" : id });

  } else {
    res.render('note', {
      title: 'ноти не існує!(',
      note:  'ноти не існує!(',
      isIndex: true,
    });
  }

};
