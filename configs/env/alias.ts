import getConfig from "next/config";
import { PublicRuntimeConfig } from ".";

export const publicEnv = (): PublicRuntimeConfig => {
  return {
    cognito: {
      clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || "",
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      issuer: process.env.NEXT_PUBLIC_COGNITO_DOMAIN || "",
    },
  };
};
