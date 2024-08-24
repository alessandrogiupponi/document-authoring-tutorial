import { getConfigValue } from '../../scripts/configs.js';
import filmsGraphql from '../../tools/queries/films.graphql.js';

export default async function decorate(block) {
  block.textContent = '';
  const swapiDetails = {
    swapiEndPoint: await getConfigValue('swapi-endpoint'),
  };
  fetch(swapiDetails.swapiEndPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      filmsGraphql,
    }),
  })
    .then((r) => r.json())
    .then((data) => console.log('data returned:', data));
}
