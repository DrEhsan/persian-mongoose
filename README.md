persian-mongoose
===================

persian localization and validation for mongoose schemas

## Installation

``` npm install persian-mongoose```

## Functions

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