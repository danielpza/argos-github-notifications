#!/usr/bin/env node
import GitHub from "github-api";
import bitbar = require("bitbar");
import { readConfig } from "./config";

async function workit({ token }) {
  const gh = new GitHub({ token });
  const me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
  const { data: notifications } = await me.listNotifications();
  bitbar([
    notifications.length === 0
      ? { text: "GitHub" }
      : { text: `GitHub #${notifications.length}`, color: "#2196F3" },
    bitbar.separator,
    ...notifications.map(
      ({ unread, reason, subject: { title, latest_comment_url, type } }) => ({
        text: `${type} ${title} ${reason}`,
        href: latest_comment_url
      })
    )
  ]);
}

workit(readConfig()).catch(err => console.error(err));
