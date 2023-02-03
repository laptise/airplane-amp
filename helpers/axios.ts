import axios from "axios";
import { publicEnv } from "@/configs/env/alias";
const nestApi = axios.create({ baseURL: publicEnv.nest });
class Url {
  private parts: (string | number)[] = [];
  constructor(...parts: (string | number)[]) {
    this.parts = parts;
  }
  get url() {
    return this.parts.join("/");
  }
}
export namespace Nest {
  export async function addNewUser(userId: string) {
    const { url } = new Url("users");
    await nestApi.post(url, { userId });
  }
}
