import { LitElement, html, css } from 'lit-element';

// import './ia-home';
import './ia-location';
import './ia-time';
// import './ia-air';

class IaMain extends LitElement {
  static get styles() {
    return css`
      header {
        background: mediumseagreen;
        color: white;
        display: flex;
        justify-content: space-between;
        padding: 2rem;
      }

      footer {
        background: teal;
        color: white;
        padding: 2rem;
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      page: { type: String },
    };
  }

  constructor() {
    super();

    this.page = window.location.hash.substr(1);
    window.onhashchange = this._onHashChange.bind(this);
  }

  render() {
    return html`
      <header>
        <strong>Info App</strong>
        <nav>
          <select @change=${this._onChangeMenu}>
            <option value="">Home</option>
            <option ?selected=${this.page === 'location'} value="location">Location</option>
            <option ?selected=${this.page === 'time'} value="time">Time</option>
            <option ?selected=${this.page === 'air'} value="air">Air quality</option>
          </select>
        </nav>
      </header>

      <main>
        ${this._pageTemplate}
      </main>

      <footer>
        No &copy; 2020. No rights reserved.
      </footer>
    `;
  }

  _onChangeMenu(event) {
    window.location.hash = event.target.value;
  }

  _onHashChange(event) {
    const hash = new URL(event.newURL).hash;
    this.page = hash.substring(1);
  }

  get _pageTemplate() {
    if (!this.page) {
      return html` <ia-home></ia-home> `;
    }

    if (this.page === 'location') {
      return html` <ia-location></ia-location> `;
    }

    if (this.page === 'time') {
      return html` <ia-time></ia-time> `;
    }

    if (this.page === 'air') {
      return html` <ia-time></ia-time> `;
    }
  }
}

window.customElements.define('ia-main', IaMain);
