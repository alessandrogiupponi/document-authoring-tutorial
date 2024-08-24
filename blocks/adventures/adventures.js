import { getConfigValue } from '../../scripts/configs.js';
import { readBlockConfig } from '../../scripts/aem.js';
import { h, render } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import FilmList from './AdventureList.js';

const html = htm.bind(h);

export default async function decorate(block) {
  const config = readBlockConfig(block);
  render(html`<${AdventureList} ...${config} block=${block} />`, block);
}
