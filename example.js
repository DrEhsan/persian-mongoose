var persianMongoose = require('persian-mongoose')

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var mySchema = new mongoose.Schema({
    name: {type: String}
});

mySchema.plugin(persianMongoose.AlphabetConvertor,
{
    arbicAlphaToPersian:
    {
        fields : ['name']
    }
});

var myModel = mongoose.model('myModel', mySchema);

var newName = new myModel({ name : 'علي' });

newName.save(function (err) {

  if (err)
    console.log(err)

  // saved!
});

