#!/usr/bin/env node
/**
 * Submit sitemap URLs to IndexNow (Bing, Yandex, Naver, Seznam, Yep).
 * Google does not support IndexNow — use Search Console manually.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const KEY = process.env.INDEXNOW_KEY || "8a70f668014d7bfa2bb597aeb4ebe82f";
const HOST = "antrahq.com";
const keyLocation = `https://${HOST}/${KEY}.txt`;

async function urlsFromSitemap() {
  const res = await fetch("https://antrahq.com/sitemap.xml");
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const keyFile = resolve(root, "public", `${KEY}.txt`);
  if (!existsSync(keyFile)) {
    console.error("Missing key file:", keyFile);
    process.exit(1);
  }
  const urlList = await urlsFromSitemap();
  console.log("Submitting", urlList.length, "URLs via IndexNow…");
  const body = JSON.stringify({ host: HOST, key: KEY, keyLocation, urlList });
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body,
  });
  const text = await res.text();
  console.log("Status", res.status, text || "(empty)");
  if (![200, 202].includes(res.status)) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
