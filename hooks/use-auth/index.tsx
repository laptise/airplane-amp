import { getUserPool } from "@/configs/cognito";
import { Nest } from "@/helpers/axios";
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import { useEffect, useState } from "react";

const useUserPool = () => {
  const [userPool, setUserPool] = useState<CognitoUserPool | null>(null);
  useEffect(() => {
    setUserPool(getUserPool());
  }, []);
  return userPool;
};

export const useAuth = () => {
  const userPool = useUserPool();
  const singIn = (email: string, password: string) =>
    new Promise((res, rej) => {
      if (!userPool) {
        throw null;
      }
      const authenticationDetails = new AuthenticationDetails({
        Username: email,
        Password: password,
      });
      const user = new CognitoUser({ Username: email, Pool: userPool });
      user.authenticateUser(authenticationDetails, {
        onSuccess(session) {
          console.log(session);
          res(session);
        },
        onFailure(err) {
          console.error(err);
          rej(err);
        },
      });
    });

  const codeConfirm = (email: string, confirmationCode: string) =>
    new Promise((res, rej) => {
      if (!userPool) {
        throw null;
      }
      const user = new CognitoUser({ Username: email, Pool: userPool });
      user.confirmRegistration(confirmationCode, true, (e, r) => {
        if (e) {
          rej();
        }
        if (r) {
          res(r);
        }
      });
    });

  const signUp = (username: string, password: string) =>
    new Promise<string>((res, rej) => {
      userPool?.signUp(username, password, [], [], async (e, r) => {
        if (r) {
          await Nest.addNewUser(r.userSub);
          res(r.user.getUsername());
        } else {
          rej();
        }
      });
    });
  return { signUp, singIn, codeConfirm };
};
