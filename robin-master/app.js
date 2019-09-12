const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const chirps = require("./routes/api/chirps");
const passport = require("passport");
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('robin/robin-client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'robin', 'robin-client', 'public', 'index.html'));
  })
}
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

require("./config/passport")(passport);
app.use(passport.initialize());

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/chirps", chirps);