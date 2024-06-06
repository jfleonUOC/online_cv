const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <style>
    nav {
      // height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #0a0a23;
    }
    li {
      list-style: none;
      display: inline;
      height: 30px;
    }
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
    @media screen and (max-width: 600px) {
    li {
      float: none;
      display: block;
      text-align: center;
    }
    }
}

  </style>
  <header>
    <nav>
      <ul>
        <li><a href="index.html">About</a></li>
        <li><a href="work_experience.html">Work</a></li>
	    	<li><a href="education.html">Education</a></li>
        <li><a href="publications.html">Publications</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
