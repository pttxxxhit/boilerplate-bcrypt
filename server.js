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



//END_ASYNC

//START_SYNC


const password = 'miContraseñaSegura';
const saltRounds = 12;

bcrypt.hash(password, saltRounds, function(err, hash) {
  if (err) {
    console.error('Error al crear el hash:', err);
  } else {
    console.log('Hash generado:', hash);

    const hashGuardado = hash; // usamos el mismo hash para comparar

    bcrypt.compare(password, hashGuardado, function(err, result) {
      if (err) {
        console.error('Error al comparar:', err);
      } else if (result) {
        console.log('¡La contraseña es correcta!');
      } else {
        console.log('La contraseña es incorrecta.');
      }
    });
  }
});

//END_SYNC

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log('Listening on port: ' + listener.address().port);
});

