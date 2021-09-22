#!/usr/bin/env node

const program = require("commander");
const fs = require("fs");
const path = require("path");
var TinyURL = require("tinyurl");

program
  .version("1.0.0")
  .option("-f, --file", "generate code image for which file")
  .action((file) => {
    file = path.join(process.cwd(), file);
    const snippet = encodeURIComponent(fs.readFileSync(file).toString());
    const url =
      `https://carbon.now.sh/?bg=rgba(66,66,72,1)&t=seti&l=auto&ds=true&wc=true&wa=true&pv=48px&ph=32px&ln=false&code=${snippet}`;
    TinyURL.shorten(url, function (res, err) {
      if (err) console.log(err);
      console.log(res);
    });
  })
  .parse(process.argv);
