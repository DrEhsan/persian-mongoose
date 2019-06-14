persian-mongoose
===================

persian localization and validation for mongoose schemas

## Installation

``` npm install persian-mongoose```

## Validation

### isMobile - Iran Mobile Validation

This function validates if the phone number is from iran or not

```javascript
var mySchema = new mongoose.Schema({
    phone_number : {
      type : String,
      validate: [
        { validator: persianMongoose.isMobile, msg: 'phone number is incorrect'}
      ]
    }
});
```

## Convertors

### AlphabetConvertor
This converts alphabet characters to persian

Example (convert arabic alphabet to persian) :

```javascript
Schema.plugin(persianMongoose.AlphabetConvertor,
{
    arbicAlphaToPersian:
    {
        fields : ['name']
    }
});

/* this will convert
["ي", "ك", "‍", "دِ", "بِ", "زِ", "ذِ", "ِشِ", "ِسِ", "ى"] to ["ی", "ک", "", "د", "ب", "ز", "ذ", "ش", "س", "ی"]
```

## Complete Usage

```javascript

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
// will save { name : 'علی' }
```