import { getUserPool } from "@/configs/cognito";
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
    userPool?.signUp(username, password, [], [], (e, s) => {
      console.log(e);
      console.log(s);
    });
  return { signUp };
};
