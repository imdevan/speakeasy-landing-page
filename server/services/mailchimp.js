var axios = require('axios');
var _ = require('lodash');

const mailchimp = {
  subscribe: function(req, res, next) {
    var params = _.extend(req.query || {}, req.params || {}, req.body || {});
    return axios({
        method: 'post',
        url: 'https://' + process.env.MAILCHIMP_INSTANCE + '.api.mailchimp.com/3.0/lists/' +
          process.env.MAILCHIMP_LISTID + '/members/',
        auth: {
          username: process.env.MAILCHIMP_USERNAME,
          password: process.env.MAILCHIMP_KEY
        },
        data: {
          email_address: params.email,
          status: params.status || 'subscribed',
          'interests': {},
          'merge_fields': {
            'FNAME' : params.name,
            'REF': params.reference,
            'FUNNEL': params.funnel,
            'IPADDRESS': req.ip,
          }
        }
      })
      .then(function(response) {
        return res
          .status(200)
          .json({ response: response.data })
      })
      .catch(function(error) {
        console.log(error);
        return res.json(400, { response: error.response.data })
      });
  },
  getSubscribers: function(req, res, next) {
    return axios({
        method: 'get',
        url: 'https://' + process.env.MAILCHIMP_INSTANCE + '.api.mailchimp.com/3.0/lists/' +
          process.env.MAILCHIMP_LISTID + '/members/',
        auth: {
          username: process.env.MAILCHIMP_USERNAME,
          password: process.env.MAILCHIMP_KEY
        }
      })
      .then(function(response) {
        return res
          .status(200)
          .json({ response: response.data })
      })
      .catch(function(error) {
        return res.json(200, { response: error.response.data })
      });
  },

}

export default mailchimp;
