import { CognitoUserPool } from "amazon-cognito-identity-js";
import { publicEnv } from "./env/alias";
const { clientId: ClientId, userPoolId: UserPoolId } = publicEnv.cognito;

export const getUserPool = () =>
  new CognitoUserPool({
    ClientId,
    UserPoolId,
  });
