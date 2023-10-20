import { Search } from "./modules/search.js";
import { View } from "./modules/view.js";
import { Api } from "./modules/api.js";

const api = new Api()
new Search(new View(api), api);