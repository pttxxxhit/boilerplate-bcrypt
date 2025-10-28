'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt      = require('bcrypt'); // ← solo una vez aquí
const app         = express();
app.use(cors());

fccTesting(app);

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
  } else {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res);
      }
    });
  }
});



//END_ASYNC

//START_SYNC
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  if (err) {
    console.error(err);
  } else {
    console.log(hash);
  }
});

//END_SYNC
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
