const express = require('express')
const router = express.Router()
var axios = require('axios');
var _ = require('lodash');

router.use(function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // Set custom headers for CORS
  res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  return next();

  // res.header("Access-Control-Allow-Origin", "*")
  // res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  // if (req.method === "OPTIONS") {
  //   return res.status(200).end();
  // }

  // if(req.headers['x-forwarded-proto'] != 'https' && process.env.NODE_ENV === 'production')
  //   res.redirect('https://'+req.hostname+req.url)
  // else
  //   next() /* Continue to other routes if we're not redirecting */
})

router.get('/', function(req, res, next) {
  res.json({})
})

// ====================
// WORDPRESS API CALLS
// ====================
router.get('/posts', function(req,res,next){
  console.log("POSTS HIT HERE! PROCESS ENV HERE", process.env.WORDPRESS_BASE_URL)
  axios({
    method: 'get',
    url: `${process.env.WORDPRESS_BASE_URL}/wp-json/wp/v2/posts?_embed`,
  }).then(function (response) {
    return res.status(200).json({response: response.data})
  })
  .catch(function (error) {
    return res.status(500).json({response: error.response.data})
  });
})

router.get('/posts/:slug', function(req,res,next){
  if(isNaN(parseInt(req.params.slug))){
    console.log("/posts/:slug Hit")
    console.log(req.params.slug)
    axios({
      method: 'get',
      url: `${process.env.WORDPRESS_BASE_URL}/wp-json/wp/v2/posts?slug=${req.params.slug}&_embed`,
    }).then(function (response) {
      return res.status(200).json({response: response.data})
    })
    .catch(function (error) {
      return res.json(200, {response: error.response.data})
    });
  }else if(req.params.slug){
    console.log("LOGGING HERE!!!!")
    console.log(req.params.slug)
    axios({
      method: 'get',
      url: `${process.env.WORDPRESS_BASE_URL}/wp-json/wp/v2/posts/' + req.params.slug + '?_embed`,
    }).then(function (response) {
      return res.status(200).json({response: response.data})
      // return res.status(200).json({response: response.data})
    })
    .catch(function (error) {
      return res.json(200, {response: error.response.data})
    });
  }
})

// CREATE A COMMENT: /wp/v2/comments
router.post('/posts/:id/comments', function(req,res,next){
  console.log("POSTS HIT HERE! PROCESS ENV HERE", process.env.WORDPRESS_BASE_URL)
  let params = _.extend(req.query || {}, req.params || {}, req.body || {});

  console.log("CREATING A NEW COMMENT ON POST  ID: " + JSON.stringify(params))
  axios({
    method: 'post',
    url: `${process.env.WORDPRESS_BASE_URL}/wp-json/wp/v2/comments`,
    data: {
      post: params.id,
      content: params.body,
      author_email: params.email,
      author_name: params.name
    }
  }).then(function(response){
    return res.status(200).json({response: response.data})
  }).catch(function(error){
    return res.json(200, {response: error.response.data})
  })
})

router.get('/categories', function(req, res, next){
  axios({
    method: 'get',
    url: `${process.env.WORDPRESS_BASE_URL}/wp-json/wp/v2/categories?_embed`
  }).then(function (response){
    return res.status(200).json({response: response.data})
  }).catch(function(error){
    return res.json(200, {response: error.response.data})
  })
})

// ====================
// MAILCHIMP API CALLS
// ====================
// RETURN SUBSCRIBER COUNT
router.get('/subscribers', function(req, res, next){
	axios({
    method: 'get',
    url: 'https://' + process.env.MAILCHIMP_INSTANCE + '.api.mailchimp.com/3.0/lists/' + process.env.MAILCHIMP_LISTID + '/members/',
    auth: {
      username: process.env.MAILCHIMP_USERNAME,
      password: process.env.MAILCHIMP_KEY
    }
  }).then(function (response) {
    return res.status(200).json({response: response.data})
  })
  .catch(function (error) {
    return res.json(200, {response: error.response.data})
  });
})

// https://us12.api.mailchimp.com/playground/?_ga=1.264998671.1447638105.1490985646
router.post('/subscribers', function(req,res,next){
	var params = _.extend(req.query || {}, req.params || {}, req.body || {});
  axios({
    method: 'post',
    url: 'https://' + process.env.MAILCHIMP_INSTANCE + '.api.mailchimp.com/3.0/lists/' + process.env.MAILCHIMP_LISTID + '/members/',
    auth: {
      username: process.env.MAILCHIMP_USERNAME,
      password: process.env.MAILCHIMP_KEY
    },
    data: {
      email_address: params.email,
      status: 'subscribed',
      'interests': {
      },
      'merge_fields': {
        'REF': params.reference,
        'IPADDRESS': req.ip
      }
    }
  }).then(function (response) {
    return res.status(200).json({response: response.data})
  })
  .catch(function (error) {
    console.log(error);
    return res.json(400, {response: error.response.data})
  });
})

module.exports = router