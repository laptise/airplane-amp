import getConfig from "next/config";
import { PublicRuntimeConfig } from ".";

export const publicEnv = getConfig().publicRuntimeConfig as PublicRuntimeConfig;
