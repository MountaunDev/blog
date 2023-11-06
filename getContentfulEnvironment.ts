const assert = require("assert");
const contentfulManagement = require("contentful-management");
const { EnvironmentGetter } = require("contentful-typescript-codegen");

const CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN = "CFPAT-M3crblGBecQtWI0eIw1tdI1l1rYxDJFd6oKUuX_wgKg";
const CONTENTFUL_SPACE_ID = "dcyvpoci5no4";
const CONTENTFUL_ENVIRONMENT = "master";

assert(CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN);
assert(CONTENTFUL_SPACE_ID);
assert(CONTENTFUL_ENVIRONMENT);

const getContentfulEnvironment: any = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(CONTENTFUL_SPACE_ID)
    .then((space: any) => space.getEnvironment(CONTENTFUL_ENVIRONMENT));
};

module.exports = getContentfulEnvironment;
