import { getDataAsync } from './countries.js';
import { createAllCards } from './dom.js';
import { iconChange } from './dom.js';
import { like } from './countries.js';

await getDataAsync();
createAllCards();
iconChange();
like();