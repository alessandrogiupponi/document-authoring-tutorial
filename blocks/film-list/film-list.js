import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  block.textContent = '';
  const query = 'query Query {\n'
      + '  allFilms {\n'
      + '    films {\n'
      + '      title\n'
      + '      director\n'
      + '      releaseDate\n'
      + '      speciesConnection {\n'
      + '        species {\n'
      + '          name\n'
      + '          classification\n'
      + '          homeworld {\n'
      + '            name\n'
      + '          }\n'
      + '        }\n'
      + '      }\n'
      + '    }\n'
      + '  }\n'
      + '}';
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
      query,
    }),
  })
    .then((r) => r.json())
    .then((data) => console.log('data returned:', data));
}
