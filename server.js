'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt      = require('bcrypt'); // ← solo una vez aquí
const app         = express();

fccTesting(app);

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  if (err) {
    console.error(err);
  } else {
    console.log(hash);
  }
});



//END_ASYNC

//START_SYNC



//END_SYNC

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log('Listening on port: ' + listener.address().port);
});

