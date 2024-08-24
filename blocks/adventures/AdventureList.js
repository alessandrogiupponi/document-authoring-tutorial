/* eslint-disable object-curly-spacing, class-methods-use-this */
import { h, Component } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import AdventureItem from './AdventureItem.js';

const html = htm.bind(h);

export async function performQuery() {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  return fetch('https://author-p117303-e1145208.adobeaemcloud.com/graphql/execute.json/wknd/adventures-all', {
    method: 'GET',
    headers
  }).then((response) => {
    if (!response.ok) {
      return null;
    }
    return response.json();
  }).then((data) => data);
}

export async function getAdventures() {
  return performQuery().then((filmsData) => {
    if (!filmsData?.data?.allFilms?.films) {
      return null;
    }

    return filmsData?.data?.allFilms?.films;
  });
}

class AdventureItem extends Component {
  const editorProps = {
    "data-aue-resource": "urn:aemconnection:" + props?._path + "/jcr:content/data/master",
    "data-aue-type": "reference",
    "data-aue-filter": "cf",
    "data-aue-label": props.adventureTitle
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      adventures: [],
    };
  }

  componentDidMount() {
    getFilms().then((data) => {
      this.setState({
        loading: false,
        adventures: data,
      });
    });
  }

  render(props, state) {
    if (state.loading) return html`<div>Loading...</div>`;
    return html`<div class="table">
        <div class="table-header">
            <div class="table-header-cell">
                Title
            </div>
            <div class="table-header-cell">
                Director
            </div>
            <div class="table-header-cell">
                Release Date
            </div>
            <div class="table-header-cell">
                Producers
            </div>
        </div>
        <div class="table-body">
            ${state.films.map((film) => html`<${FilmListItem} film=${film} />`)}
        </div>
       </div>`;
  }
}

export default AdventureItem;
