export class Ground extends HTMLElement {
  private height = 75;

  static get observedAttributes() {
    return ["src", "height"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.style.display = "block";
    this.height = Number(this.getAttribute("height")) || this.height;
    this.style.height = `${this.height}px`;

    if (this.getAttribute("src") === null || this.getAttribute("src") === null)
      return;

    this.style.background = `url(${this.getAttribute(
      "src"
    )}) no-repeat center center`;
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;

    if (name === "src") {
      this.style.background =
        newValue === "" ? "none" : `url(${newValue}) no-repeat center center`;
    }
  }
}

customElements.define("dt2-ground", Ground);
