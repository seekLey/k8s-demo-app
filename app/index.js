// very small express app
const express = require('express');
const os = require('os');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`Hello World, from k8s-demo! Host: ${os.hostname()} - MSG: ${process.env.WELCOME_MSG || 'none'}`);
});

app.listen(port, () => console.log(`Listening on ${port}`));
