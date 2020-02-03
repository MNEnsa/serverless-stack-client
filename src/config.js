export default {
  STRIPE_KEY: "pk_test_qv7GjF8coVLgKk3MU91HvCQp00FXm2eBoI",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-central-1",
    BUCKET: "bucketforserverlessstack"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://4hj5unjs3c.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_83LFkljOc",
    APP_CLIENT_ID: "1jt60p5fj9fd8baesfkmpqpov3",
    IDENTITY_POOL_ID: "eu-central-1:14b02006-dd89-484e-ad50-3f0715922a76"
  }  
};