const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
  <style>
    footer {
      // height: 60px;
      // padding: 0 10px;
      padding: 10px;
      list-style: none;
      display: flex;
      // float: none;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #f1f1f1;
    }
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #000000;
      text-decoration: none;
      box-shadow: inset 0 -1px 0 0 #ff0000;
    }
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -4px 0 0 #ff0000;
    }
    @media screen and (max-width: 600px) {
    footer {
      float: none;
      display: block;
      text-align: center;
    }
  </style>
  <footer>
    <p>Mail: Jo Fu Le 8 at gmail</p>
    <p><a href="https://www.linkedin.com/in/jonasfuentesleon" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    <p><a href="https://github.com/jfleonUOC/" target="_blank" rel="noopener noreferrer">GitHub</a></p>
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
