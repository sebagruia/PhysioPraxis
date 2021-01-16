const contentful = require("contentful");
export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  environment: 'master',
  space:process.env.REACT_APP_CONTENTFUL_SPACE,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_API_ACCES_TOKEN
});