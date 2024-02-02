const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blogwallet', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a simple schema for the blog post
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Blog = mongoose.model('Blog', blogSchema);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Define routes

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/posts', (req, res) => {
  Blog.find({}, (err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.render('posts', { posts: posts });
    }
  });
});

app.get('/posts/:postId', (req, res) => {
  const postId = req.params.postId;
  Blog.findById(postId, (err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.render('post', { post: post });
    }
  });
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
