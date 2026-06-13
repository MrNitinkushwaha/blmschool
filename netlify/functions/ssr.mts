import type { Config } from "@netlify/functions";
import server from "../../dist/server/server.js";

export default async (req: Request) => {
  return server.fetch(req, {}, {});
};

export const config: Config = {
  path: "/*",
  preferStatic: true,
};
