/* eslint-disable object-curly-spacing, class-methods-use-this */
import { h, Component } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

class AdventureItem extends Component {
  constructor(props) {
    super(props);
    this.adventurePrice = props.adventure.adventurePrice;
    this.adventureTitle = props.adventure.adventureTitle;
    this.adventurePrimaryImage = props.adventure.adventurePrimaryImage;
    this.adventureTripLength = props.adventure.adventureTripLength;
    // eslint-disable-next-line no-underscore-dangle
    this.path = props.adventure._path;
    this.slug = props.adventure.slug;
    this.editorProps = {
      'data-aue-resource': `urn:aemconnection:${this.path}/jcr:content/data/master`,
      'data-aue-type': 'reference',
      'data-aue-filter': 'cf',
      'data-aue-label': this.adventureTitle,
    };
  }

  render() {
    // eslint-disable-next-line no-underscore-dangle
    const imagePath = this.adventurePrimaryImage._path;
    return html`<div class="adventure-item" ...${this.editorProps}>
            <div class="adventure-image-card" >
                <img class="adventure-item-image" src="https://author-p117303-e1145208.adobeaemcloud.com${imagePath}" />
                <div class="adventure-item-price">${this.adventurePrice}</div> 
            </div>
            <div class="adventure-item-title"><p>${this.adventureTitle}</p></div>
        </div>`;
  }
}

export default AdventureItem;
