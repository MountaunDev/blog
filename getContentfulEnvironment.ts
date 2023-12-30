const assert = require("assert");
const contentfulManagement = require("contentful-management");
const { EnvironmentGetter } = require("contentful-typescript-codegen");

const CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN =
  "CFPAT-aYvWgayFFTx5kP_T8G45OY4LfKf3Mfr0Q2UVOwZ9FvI";
// CFPAT-aYvWgayFFTx5kP_T8G45OY4LfKf3Mfr0Q2UVOwZ9FvI
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
