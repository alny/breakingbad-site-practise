  var express = require('express');
  var router = express.Router();

  var path = ['index', 'createpost']

  var fanArt = [

      {
          name: 'Walther White',
          episode: '12',
          image: 'https://i.embed.ly/1/display/resize?key=1e6a1a1efdb011df84894040444cdc60&url=http%3A%2F%2F25.media.tumblr.com%2Ftumblr_lxluhkggrX1qaps3fo1_r1_1280.jpg&width=810'
      }, {
          name: 'Jesse',
          episode: '43',
          image: 'https://i.embed.ly/1/display/resize?key=1e6a1a1efdb011df84894040444cdc60&url=http%3A%2F%2F25.media.tumblr.com%2Ftumblr_lxlumt4VvJ1qaps3fo1_r1_1280.jpg&width=810'
      }, {
          name: 'Skyler White',
          episode: '1',
          image: 'https://i.embed.ly/1/display/resize?key=1e6a1a1efdb011df84894040444cdc60&url=http%3A%2F%2F25.media.tumblr.com%2Ftumblr_lxluj3nP0x1qaps3fo1_r1_1280.jpg&width=810'
      }

  ]

        /* GET home page. */
        router.get('/', function(req, res, next) {

            var data = {

                Art: fanArt

            }


            res.render('index', data)



        });

        router.get('/:page', function(req, res, next) {

            var page = req.params.page
            if (path.indexOf(page) == -1) {
              res.render('error', {message: 'Check your Spellin boooYYY!'})
            }

            res.render(page, null)

        });

  module.exports = router;
