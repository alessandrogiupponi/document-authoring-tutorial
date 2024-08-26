import { h, render } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import { readBlockConfig } from '../../scripts/aem.js';
import AdventuresList from './AdventuresList.js';

const html = htm.bind(h);

export default async function decorate(block) {
  const config = readBlockConfig(block);
  render(html`<${AdventuresList} ...${config} block=${block} />`, block);
}
