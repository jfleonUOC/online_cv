const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 60px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #f1f1f1;
      font-family: "Courier New", Courier, monospace;
    }
  </style>
  <footer>
    <p>Mail: Jo Fu Le 8 at gmail</p>
    <a href="https://www.linkedin.com/in/jonasfuentesleon" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://github.com/jfleonUOC/" target="_blank" rel="noopener noreferrer">GitHub</a>
    <p>Last update: June 2024.</p>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", Footer);
