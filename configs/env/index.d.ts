export type CognitoEnvs = {
  clientId: string;
  userPoolId: string;
  issuer: string;
};

export type PublicRuntimeConfig = {
  cognito: CognitoEnvs;
  nest: string;
};
