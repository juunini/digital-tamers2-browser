export class Field extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.style.display = "block";
    this.style.flex = "1";
    this.style.position = "relative";

    if (this.getAttribute("src") === null) {
      return;
    }

    this.style.background = `url(${this.getAttribute(
      "src"
    )}) no-repeat center center`;
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }

    if (name === "src") {
      this.style.background = `url(${newValue}) no-repeat center center`;
    }
  }
}

customElements.define("dt2-field", Field);
