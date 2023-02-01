import { userPool } from "@/configs/cognito";

export const useAuth = () => {
  const signUp = (username: string, password: string) => userPool.signUp;
  return { signUp };
};
