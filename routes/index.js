  var express = require('express');
  var router = express.Router();
  var Post = require('../models/posts');

  var path = ['index', 'createpost', 'post']


// Find/get all posts in the databse
  router.get('/', function(req, res, next) {

      Post.find(null, function(err, posts) {
          if (err) {
              res.render('error', {
                  message: 'Page not Found'
              })
              return
          }
          var data = {
              Art: posts
          }
          res.render('index', data)

      })

  });

//Get specific page
  router.get('/:page', function(req, res, next) {

      var page = req.params.page
      if (path.indexOf(page) == -1) {
          res.render('error', {
              message: 'Check your Spellin boooYYY!'
          })
          return
        }

        if(page != 'post'){

          res.render(page, null)
          return
        }

      var id = req.query.id // Id number of Post we want to render
      Post.findById(id, function(err, post) {
          if (err) {
              res.render('error', {
                  message: 'Page not found'
              })
              return
          }

          data = {
            name: post.name,
            episode: post.episode,
            image: post.image

          }

          res.render(page, data)

      })



  });

  router.delete('/:page/:id', function(req, res, next){
    var page = req.params.page
    var id = req.query.id // Id number of Post we want to render

    if (path.indexOf(page) == -1) {
        res.render('error', {
            message: 'Check your Spellin boooYYY!'
        })
        return
      }

    var did = req.params.id
    var bdoy = req.body


    Post.findByIdAndRemove(did, bdoy, function(err, post){
      if (err) return next(err);
      res.redirect('/')
      console.log('Delete ')
    })




  })

  router.post('/:page', function(req, res, next) {

      var page = req.params.page
      if (path.indexOf(page) == -1) {
          res.render('error', {
              message: 'Check your Spellin boooYYY!'
          })
      }

      var post = req.body
      Post.create(post, function(err, post1) {
          if (err) {
              res.render('error', {
                  message: 'Page not Found'
              })
          }
          res.redirect('/')


      })





  })

  module.exports = router;
