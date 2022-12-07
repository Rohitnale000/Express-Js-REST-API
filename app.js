const express = require("express");
const app = express();
const cors = require('cors')
const port = 3000;
const student = require('./routes/student.js')

//load router modules
app.use(cors());
app.use('/api',student)


app.listen(port, () => {
  console.log(`server is running on port number..${port}`);
});
