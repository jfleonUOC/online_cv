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
    .license {
      padding: 0px;
      // width: 80%;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      background-color: #f8f8ff;
      text-align: center;
    }
    @media screen and (max-width: 1200px) {
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
    <p><a href="https://jfleonuoc.github.io/online_cv/images/CV_JFL_20241114.pdf" target="_blank">Download CV.pdf</a></p>
    <p>Last update: November 2024.</p>
  </footer>
    <div class="license">
    <p xmlns:cc="http://creativecommons.org/ns#" >This work by <span property="cc:attributionName">Jonas Fuentes Leon</span> is licensed under: <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>
    </div>
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
