/*
 * Default configuration file
 */

module.exports = {
    API_PREFIX: process.env.API_PREFIX || '/api/v1',
    LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
    PORT: process.env.PORT || 3030,
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/ttgp?replicaSet=rs0',
    jwt: {
      SECRET: process.env.JWT_SECRET || 'mysecret',
      TOKEN_EXPIRY_TIME: process.env.TOKEN_EXPIRY_TIME || 24 * 60 * 60, // 1 day
      GP_ACCESS_TOKEN_EXPIRATION: process.env.GP_ACCESS_TOKEN_EXPIRATION || '2 days',
      AUDIENCE: process.env.JWT_AUDIENCE || 'tc-users',
      ISSUER: process.env.JWT_ISSUER || 'tc-rest-api'
    },
    email: {
      HOST: process.env.EMAIL_HOST || 'smtp.ethereal.email',
      PORT: process.env.EMAIL_PORT || 587,
      USER: process.env.EMAIL_USERNAME || 'm@ethereal.email',
      PASS: process.env.EMAIL_PASSWORD || 'password',
      FROM: process.env.EMAIL_FROM || 'noreply@abc.com'
    },
    // default page, Page starts at 1
    DEFAULT_PAGE_INDEX: process.env.DEFAULT_PAGE_INDEX || 1,
    // page size
    DEFAULT_PER_PAGE: process.env.DEFAULT_PER_PAGE || 20,
    // max page size
    MAX_PER_PAGE: process.env.MAX_PER_PAGE || 100,
    // a string of time span, see https://github.com/zeit/ms
    RESET_CODE_EXPIRY_TIME: process.env.RESET_CODE_EXPIRY_TIME || '5 days',
  
    EMAIL_TEMPLATE_SUBJECT_MAX_LENGTH: process.env.EMAIL_TEMPLATE_SUBJECT_MAX_LENGTH || 100,
    EMAIL_TEMPLATE_BODY_MAX_LENGTH: process.env.EMAIL_TEMPLATE_BODY_MAX_LENGTH || 3000,
    EMAIL_TEMPLATE_PRIMARY_HEADER_MAX_LENGTH: process.env.EMAIL_TEMPLATE_PRIMARY_HEADER_MAX_LENGTH || 100,
    EMAIL_TEMPLATE_SECONDARY_HEADER_MAX_LENGTH: process.env.EMAIL_TEMPLATE_SECONDARY_HEADER_MAX_LENGTH || 200,
    EMAIL_TEMPLATE_ACTION_LABEL_MAX_LENGTH: process.env.EMAIL_TEMPLATE_ACTION_LABEL_MAX_LENGTH || 50
  }
  