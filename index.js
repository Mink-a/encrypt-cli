#!/usr/bin/env node

import { program } from "commander";
import Aes from "aes-everywhere";
const { encrypt, decrypt } = Aes;

program
  .version("1.0.0")
  .description("Aes-Everywhere CLI")
  .option("-k, --key <string>", "Encryption key")
  .option("-t, --text <string>", "Text to encrypt or decrypt")
  .option("-a, --action <string>", "Action to perform (encrypt or decrypt)")
  .action((options) => {
    if (!options.key) {
      console.log("Encryption key is required");
      process.exit(1);
    }
    if (!options.action) {
      console.log("Action is required");
      process.exit(1);
    }
    if (!options.text) {
      console.log("Text is required");
      process.exit(1);
    }
    if (options.action !== "encrypt" && options.action !== "decrypt") {
      console.log("Action must be either encrypt or decrypt");
      process.exit(1);
    }
    if (options.action === "encrypt") {
      const res = encrypt(options.text, options.key);
      console.log(res);
    } else {
      const res = decrypt(options.text, options.key);
      console.log(res);
    }
  });

program.parse(process.argv);
