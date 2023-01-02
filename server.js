//dependencies
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(require('./routes'));

// mongoose.connect('mongodb://127.0.0.1:27017/socail-network-db', {
//     useUnifiedTopology: true
// });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialnetworkapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true   //<=from Module check to see if needed
});

// log mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, ()=> console.log(`Server running on port ${PORT} http:localhost:${PORT}`));