  var express = require('express');
  var router = express.Router();
  var Post = require('../models/posts');

  var path = ['index', 'createpost', 'post']

  // var fanArt = [
  //
  //     {
  //         name: 'Walther White',
  //         episode: '12',
  //         image: 'https://i.embed.ly/1/display/resize?key=1e6a1a1efdb011df84894040444cdc60&url=http%3A%2F%2F25.media.tumblr.com%2Ftumblr_lxluhkggrX1qaps3fo1_r1_1280.jpg&width=810'
  //     }, {
  //         name: 'Jesse',
  //         episode: '43',
  //         image: 'https://i.embed.ly/1/display/resize?key=1e6a1a1efdb011df84894040444cdc60&url=http%3A%2F%2F25.media.tumblr.com%2Ftumblr_lxlumt4VvJ1qaps3fo1_r1_1280.jpg&width=810'
  //     }, {
  //         name: 'Skyler White',
  //         episode: '1',
  //         image: 'https://i.embed.ly/1/display/resize?key=1e6a1a1efdb011df84894040444cdc60&url=http%3A%2F%2F25.media.tumblr.com%2Ftumblr_lxluj3nP0x1qaps3fo1_r1_1280.jpg&width=810'
  //     }
  //
  // ]

  /* GET home page. */
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

          res.render(page, post)

      })



  });

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
