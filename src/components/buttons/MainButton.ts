export class MainButton extends HTMLElement {
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

  private setStyles(styleSheet: HTMLStyleElement) {
    let buttonSizeRate = 1;

    if (window.innerWidth <= 568) {
      buttonSizeRate = 1.2;
    }

    if (window.innerWidth > 568 && window.innerWidth <= 896) {
      buttonSizeRate = 2;
    }

    if (window.innerWidth > 896 && window.innerWidth <= 1440) {
      buttonSizeRate = 2.5;
    }

    if (window.innerWidth > 1440 && window.innerWidth <= 1920) {
      buttonSizeRate = 3;
    }

    if (window.innerWidth > 1920) {
      buttonSizeRate = 4;
    }

    this.style.display = "flex";

    styleSheet.textContent = `
      button {
        position: relative;
        width: ${this.width * buttonSizeRate}px;
        height: ${this.height * buttonSizeRate}px;
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
        padding: ${this.paddingTop * buttonSizeRate}px ${
      this.paddingRight * buttonSizeRate
    }px 0 ${this.paddingLeft * buttonSizeRate}px;
        font-size: ${this.fontSize * buttonSizeRate}px;
        line-height: ${(this.fontSize - 3) * buttonSizeRate}px;
        font-family: "04b03", sans-serif;
        color: #efffff;
        text-shadow: -${buttonSizeRate}px ${buttonSizeRate}px 0 #313131,
                      ${buttonSizeRate}px ${buttonSizeRate}px 0 #313131,
                      ${buttonSizeRate}px -${buttonSizeRate}px 0 #313131,
                      -${buttonSizeRate}px -${buttonSizeRate}px 0 #313131;
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
        top: ${this.iconTop * buttonSizeRate}px;
        right: ${this.iconRight * buttonSizeRate}px;
        width: ${this.iconWidth * buttonSizeRate}px;
        height: ${this.iconHeight * buttonSizeRate}px;
      }
    `;
  }
}
