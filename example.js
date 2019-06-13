var persianMongoose = require('./persian-mongoose')

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var mySchema = new mongoose.Schema({
    name: {type: String},
    phone_number : {
      type : String,
      validate: [
        { validator: persianMongoose.isMobile, msg: 'phone number is incorrect'}
      ]
    }
});

mySchema.plugin(persianMongoose.AlphabetConvertor,
{
    arbicAlphaToPersian:
    {
        fields : ['name']
    }
});

var myModel = mongoose.model('myModel', mySchema);

var newName = new myModel({ name : 'علي',  phone_number: '09368681234'});

newName.save(function (err) {

  if (err)
    console.log(err)

  // saved!
});



