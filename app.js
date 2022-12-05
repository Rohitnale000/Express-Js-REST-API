const express = require("express");
const app = express();
const port = 3000;
const student = require('./routes/student.js')

//load router modules
app.use('/api',student)


app.listen(port, () => {
  console.log(`server is running on port number..${port}`);
});
