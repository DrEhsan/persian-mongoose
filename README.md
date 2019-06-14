persian-mongoose
===================

persian localization and validation for mongoose schemas

## Installation

``` npm install persian-mongoose```

## Persian Validation

A set of validation for persian and Iran usages

| Function  | Description |
| ------------- | ------------- |
| isMobile      | check if string is following iran's mobile number formats   |
| isCardNumber  | check if string is a real iran bank card number             |
| isPhone       | check if string is iran's phone number format               |
| isPostalCode  | check if string following iran's postal code's format       |
| isSheba       | check if string is real sheba number                        |
| isMelliCode   | check if string is real melli code                          |

Example :

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

### removeArabicChars
This converts arabic alphabet characters to persian characters

Example (convert arabic chars to persian) :


```javascript

//Input : فارسي   -> Ouput : فارسی

Schema.plugin(persianMongoose.removeArabicChars,
{
    removeArabicChars:
    {
        fields : ['name']
    }
});
```

## Complete Usage

```javascript

var mySchema = new mongoose.Schema({
    name: {type: String}
});

mySchema.plugin(persianMongoose.removeArabicChars,
{
    removeArabicChars:
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