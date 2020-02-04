const dev = {
  STRIPE_KEY: "pk_test_qv7GjF8coVLgKk3MU91HvCQp00FXm2eBoI",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1mcxlhchjnycq"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://z5uonuosi2.execute-api.eu-central-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_58Mwfiax0",
    APP_CLIENT_ID: "2om5svscv9tjq9b7mrl9474o55",
    IDENTITY_POOL_ID: "eu-central-1:b854576f-b44f-4949-8c69-54a31bf4a9bd"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_qv7GjF8coVLgKk3MU91HvCQp00FXm2eBoI",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1b9j8a1t5dhlp"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://f6l5krvcv2.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_6NKIwjSCz",
    APP_CLIENT_ID: "4t28hci64hsq8kvqkbdn2qsrso",
    IDENTITY_POOL_ID: "eu-central-1:d6993e0a-8dd9-4a18-9f15-3c9f6e2986b8"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};