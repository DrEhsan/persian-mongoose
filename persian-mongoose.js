const persianize = require('persianize');

const removeArabicChars = (schema, options) => {

    schema.pre('save', function (next) {

        if (options) {

          if (options.removeArabicChars){
              let fields = options.removeArabicChars.fields;

              fields.forEach(field => {
                  this[field] = persianize.convert().removeArabicChar(this[field]).get();
              });
          }

        }

        next();
      });
}

const isMobile = value => {
    return persianize.validator().mobile(value);
}

const isCardNumber = value => {
    return persianize.validator().cradNumber(value);
}

const isPhone = value => {
    return persianize.validator().phone(value);
}

const isPostalCode = value => {
    return persianize.validator().postalCode(value);
}

const isSheba = value => {
    return persianize.validator().sheba(value);
}

const isMelliCode = value => {
    return persianize.validator().meliCode(value);
}


module.exports = {
    removeArabicChars,
    isMobile,
    isCardNumber,
    isPhone,
    isPostalCode,
    isSheba,
    isMelliCode
}
