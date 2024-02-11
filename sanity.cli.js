/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";
const defaultConfig = require("./sanity.json");

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || defaultConfig.api.projectId;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || defaultConfig.api.dataset;

export default defineCliConfig({ api: { projectId, dataset } });
