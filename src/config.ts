import { readFileSync } from "fs";
import { parse } from "ini";

// TODO should change for windows?
const CONFIG_FILE_NAME = "argos-github-notifications.ini";
const CONFIG_HOME =
  process.env.XDG_CONFIG_HOME ?? `${process.env.HOME}/.config`;
const CONFIG_FILE = `${CONFIG_HOME}/${CONFIG_FILE_NAME}`;

export function readConfig() {
  return parse(readFileSync(CONFIG_FILE, "utf-8"));
}
