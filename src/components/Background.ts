import {
  calculteRate,
  constantHeight,
  constantWidth,
} from "@/lib/calculateRate";

export class Background extends HTMLElement {
  private readonly resizeEvent = this.resize.bind(this);

  static get observedAttributes() {
    return ["src"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.resize();
    window.addEventListener("resize", this.resizeEvent);

    this.style.display = "flex";
    this.style.width = `${constantWidth}px`;
    this.style.height = `${constantHeight}px`;
    this.style.flexDirection = "column";
    this.style.justifyContent = "flex-end";
    this.style.background = `url(${this.getAttribute(
      "src"
    )}) no-repeat center center`;
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.resizeEvent);
  }

  adoptedCallback() {}

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }

    if (name === "src") {
      this.style.background = `url(${newValue}) no-repeat center center`;
    }
  }

  private resize() {
    this.style.zoom = String(calculteRate());
  }
}

customElements.define("dt2-background", Background);
