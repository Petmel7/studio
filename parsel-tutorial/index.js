// const joi = require('joi');
// const shortid = require('shortid');

// const passwordShema = joi.string().min(3).max(10).alphanum();
// console.log(passwordShema.validate('q'));

// console.log(shortid.generate());


const express = require('express');

const app = express();

app.use('*', () => {
    console.log('Був запрос від браузера');
});

const listener = app.listen(4444, () => {
    console.log(`Веб-сервер запущиний на порті ${listener.address().port}`);
});