var persianMongoose = require('./../persian-mongoose')

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var mySchema = new mongoose.Schema({
    phone_number : {
      type : String,
      validate: [
        { validator: persianMongoose.isMobile, msg: 'phone number is incorrect'}
      ]
    }
});

var myModel = mongoose.model('myModel', mySchema);

var newName = new myModel({phone_number: '09368681234'});

newName.save(function (err) {

  if (err)
    console.log(err)

  // saved!
});



