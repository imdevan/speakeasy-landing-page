React Wordpress Starter Kit
===========================================

This starter kit incorperates server side rendering, an API to communicate with an external Wordpress site, and an API to communicate with the Mailchimp API to add new subscribers and get existing subscribers.

You can see an example of these elements combined at: https://wesvance.com

Install
-------
```bash
npm install
npm run build
npm run start:server
```
**NOTE** When deploying to Heroku, you might have to delete your Yarn.Lock file.

### Development
This just runs create react app, its great!
```bash
npm start
```

### Forked
The base SSR starter kit was forked from ayroblu's ssr-create-react-app-v2 which can be found here: https://github.com/ayroblu/ssr-create-react-app-v2