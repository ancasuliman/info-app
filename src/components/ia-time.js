import { LitElement, html, css } from 'lit-element';

class IaTime extends LitElement {
  static get styles() {
    return css`
      section {
        background: #eee;
        box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.2);
        margin-bottom: 2rem;
        padding: 1rem;
      }
    `;
  }

  static get properties() {
    return {
      time: { type: String },
    };
  }

  constructor() {
    super();

    setInterval(() => {
      this.time = new Date().toLocaleTimeString('ro');
    }, 1000);
  }

  render() {
    return html`
      <section>
        <h1>Current time</h1>
        <p>
          <strong>${this.time}</strong>
        </p>
      </section>
    `;
  }
}

window.customElements.define('ia-time', IaTime);
