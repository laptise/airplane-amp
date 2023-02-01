import { CognitoUserPool } from "amazon-cognito-identity-js";
import { publicEnv } from "./env/alias";
console.log(publicEnv);
const { clientId: ClientId, userPoolId: UserPoolId } = publicEnv.cognito;

export const userPool = new CognitoUserPool({
  ClientId,
  UserPoolId,
});
