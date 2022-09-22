module.exports =[
  'strapi:errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com/dzjqkpm7b'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapy::cors',
  'strapy::powerBy',
  'strapy::logger',
  'strapy::query',
  'strapy::body',
  'strapy::favicon',
  'strapy::public',
]
