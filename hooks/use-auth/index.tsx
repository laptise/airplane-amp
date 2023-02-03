import { getUserPool } from "@/configs/cognito";
import { Nest } from "@/helpers/axios";
import { CognitoUserPool } from "amazon-cognito-identity-js";
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
  const signUp = (username: string, password: string) =>
    new Promise((res, rej) => {
      userPool?.signUp(username, password, [], [], async (e, r) => {
        if (r) {
          await Nest.addNewUser(r.userSub);
          res(r.user);
        } else {
          rej();
        }
      });
    });
  return { signUp };
};
