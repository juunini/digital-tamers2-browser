import { calculteRate } from "@/lib/calculateRate";

export class MainButton extends HTMLElement {
  private readonly resizeEvent = this.resize.bind(this);
  private readonly shadow = this.attachShadow({ mode: "closed" });
  private readonly img = document.createElement("img");
  private readonly icon = document.createElement("img");
  private readonly textWrapper = document.createElement("div");
  private readonly line1 = document.createElement("span");
  private readonly line2 = document.createElement("span");

  private readonly width = 65;
  private readonly height = 45;
  private readonly iconWidth = 20;
  private readonly iconHeight = 20;
  private readonly iconTop = 4;
  private readonly iconRight = 4;
  private readonly paddingTop = 3;
  private readonly paddingLeft = 3;
  private readonly paddingRight = 8;
  private readonly fontSize = 12;

  static get observedAttributes() {
    return ["src", "line1", "line2", "line1-align", "line2-align", "color"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    const button = document.createElement("button");
    const styleSheet = document.createElement("style");

    this.shadow.appendChild(button);
    this.shadow.appendChild(styleSheet);

    button.appendChild(this.img);
    button.appendChild(this.icon);
    button.appendChild(this.textWrapper);

    this.textWrapper.classList.add("text-wrapper");
    this.textWrapper.appendChild(this.line1);
    this.textWrapper.appendChild(this.line2);

    this.img.classList.add("main-button");

    this.icon.classList.add("icon");

    this.setStyles(styleSheet);
    window.addEventListener("resize", () => this.setStyles(styleSheet));

    if (this.getAttribute("color") === null) {
      this.img.src = "/buttons/primary_button.png";
    }

    this.resize();
    window.addEventListener("resize", this.resizeEvent);
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.resizeEvent);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }

    if (name === "src") {
      this.icon.src = newValue;
      return;
    }

    if (name == "line1") {
      this.line1.textContent = newValue;
      return;
    }

    if (name == "line2") {
      this.line2.textContent = newValue;
      return;
    }

    if (name == "line1-align") {
      if (newValue === "left") {
        this.line1.style.alignSelf = "flex-start";
        return;
      }

      if (newValue === "center") {
        this.line1.style.alignSelf = "center";
        return;
      }

      if (newValue === "right") {
        this.line1.style.alignSelf = "flex-end";
        return;
      }
    }

    if (name == "line2-align") {
      if (newValue === "left") {
        this.line2.style.alignSelf = "flex-start";
        return;
      }

      if (newValue === "center") {
        this.line2.style.alignSelf = "center";
        return;
      }

      if (newValue === "right") {
        this.line2.style.alignSelf = "flex-end";
        return;
      }
    }

    if (name == "color") {
      if (newValue === "primary" || newValue === "") {
        this.img.src = "/buttons/primary_button.png";
        return;
      }

      if (newValue === "secondary") {
        this.img.src = "/buttons/secondary_button.png";
        return;
      }
    }
  }

  private resize() {
    const zoom = calculteRate();
    this.style.zoom = String(zoom);
    this.textWrapper.style.textShadow = `-${zoom}px ${zoom}px 0 #313131,
                                         ${zoom}px ${zoom}px 0 #313131,
                                         ${zoom}px -${zoom}px 0 #313131,
                                         -${zoom}px -${zoom}px 0 #313131;`;
  }

  private setStyles(styleSheet: HTMLStyleElement) {
    this.style.display = "flex";

    styleSheet.textContent = `
      button {
        position: relative;
        width: ${this.width}px;
        height: ${this.height}px;
        border: none;
        background: none;
        cursor: pointer;
      }

      .text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: ${this.paddingTop}px ${this.paddingRight}px 0 ${
      this.paddingLeft
    }px;
        font-size: ${this.fontSize}px;
        line-height: ${this.fontSize - 3}px;
        font-family: "04b03", sans-serif;
        color: #efffff;
        box-sizing: border-box;
      }

      .text-wrapper span {
        transform: scaleX(0.75);
      }

      .main-button {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .icon {
        position: absolute;
        z-index: -1;
        top: ${this.iconTop}px;
        right: ${this.iconRight}px;
        width: ${this.iconWidth}px;
        height: ${this.iconHeight}px;
      }
    `;
  }
}
