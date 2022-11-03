const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const indexRouter = require('./routes/indexRouter');
const noteRouter = require('./routes/noteRouter');
const tgNoteRouter = require('./routes/tgNoteRouter');

const PORT = process.env.PORT || 3000;
const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ encoded: false })); //true

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
      'mongodb+srv://4sv_exe:x0950940812@cluster0.f07ulob.mongodb.net/notes',
      {
        useNewUrlParser: true
      }
    );

    app.listen(PORT, () => {
      console.log('server is start');
    });

  } catch(e) {
    console.log(e);
  }
}

start();
