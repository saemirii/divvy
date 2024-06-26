import "./style.css";
import Alpine from 'alpinejs';
import "htmx.org";
import localforage from "localforage";
import {splitEvenly} from "./src/stores/split_evenly.js";

window.Alpine = Alpine;

localforage.config({
  name: "divvy",
  storeName: "divvy_lf_ls",
  description: "Local db for Divvy"
})

Alpine.store('dv_split', splitEvenly)


Alpine.start();