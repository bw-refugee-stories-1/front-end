const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let stories = [
  {
    title: 'Coming to Canada',
    email: 'dan@mail.com',
    author: 'Francisco Franco',
    id: 0,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae efficitur erat, dictum laoreet turpis. Sed fringilla pharetra egestas. Ut ac blandit odio, nec malesuada est. Vestibulum finibus ipsum mauris, sit amet placerat nisl blandit vel. Phasellus tristique pulvinar ultrices. Suspendisse tincidunt sit amet odio eget commodo. Nunc commodo magna.',
    approved: false
  },

  {
    title: 'Arriving in America',
    email: 'dan@mail.com',
    author: 'Herbert Hoover',
    id: 1,
    text: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Fusce vitae efficitur erat, dictum laoreet turpis. Sed fringilla pharetra egestas. Ut ac blandit odio, nec malesuada est. Vestibulum finibus ipsum mauris, sit amet placerat nisl blandit vel. Phasellus tristique pulvinar ultrices. Suspendisse tincidunt sit amet odio eget commodo. Nunc commodo magna.',
    approved: true
  },

  {
    title: 'Emigrating from England',
    email: 'dan@mail.com',
    author: 'Herbert Hoover',
    id: 2,
    text: 'Lorem ipsum dolor sit amet fusce vitae efficitur erat, dictum laoreet turpis sed fringilla pharetra egestas. Ut ac blandit odio, nec malesuada est. Vestibulum finibus ipsum mauris, sit amet placerat nisl blandit vel. Phasellus tristique pulvinar ultrices. Suspendisse tincidunt sit amet odio eget commodo. Nunc commodo magna.',
    approved: false
  }
]

server.get('/stories', (req, res) => {
  res.json(stories);
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});