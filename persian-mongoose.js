
const arbicAlphaToPersian = value => {
    var arabicChars = ["ي", "ك", "‍", "دِ", "بِ", "زِ", "ذِ", "ِشِ", "ِسِ", "ى"],
        persianChars = ["ی", "ک", "", "د", "ب", "ز", "ذ", "ش", "س", "ی"];

    for (var i = 0, charsLen = arabicChars.length; i < charsLen; i++) {
        value = value.replace(new RegExp(arabicChars[i], "g"), persianChars[i]);
    }

    return value;
}

const AlphabetConvertor = (schema, options) => {

    schema.pre('save', function (next) {

        if (options) {

          if (options.arbicAlphaToPersian){
              let fields = options.arbicAlphaToPersian.fields;

              fields.forEach(field => {
                  this[field] = arbicAlphaToPersian(this[field])
              });
          }
        }

        next();
      });
}

function isMobile(value){
    let regex = /^(((98)|(\+98)|(0098)|0)(90|91|92|93){1}[0-9]{8})+$/;
    return regex.test(value)
}

module.exports = {
    AlphabetConvertor,
    isMobile
}
