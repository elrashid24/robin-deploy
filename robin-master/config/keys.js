module.exports = {
  mongoURI: "mongodb+srv://Elrashid:Sudan_1885@cluster0-geqft.mongodb.net/test?retryWrites=true&w=majority",
  secretOrKey: "Ux32N5nKJ03piPj3jnfnIwnd23nNdoI932Njk249nlqpz1295dnKJ51x"
};

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}