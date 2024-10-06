export class MainButton extends HTMLElement {
  private readonly shadow = this.attachShadow({ mode: "closed" });
  private readonly img = document.createElement("img");
  private readonly icon = document.createElement("img");
  private readonly textWrapper = document.createElement("div");
  private readonly line1 = document.createElement("span");
  private readonly line2 = document.createElement("span");

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

    if (this.getAttribute("color") === null) {
      this.img.src = "/buttons/primary_button.png";
    }
  }

  disconnectedCallback() {}

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;

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
    this.style.display = "flex";

    styleSheet.textContent = `
      button {
        position: relative;
        width: 65px;
        height: 45px;
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
        padding: 3px 8px 0 3px;
        font-size: 12px;
        line-height: 9px;
        font-family: "04b03", sans-serif;
        color: #efffff;
        box-sizing: border-box;
      }

      .text-wrapper span {
        transform: scaleX(0.75);
        text-shadow: -1px 1px 0 #313131,
                      1px 1px 0 #313131,
                      1px -1px 0 #313131,
                     -1px -1px 0 #313131;
      }

      .main-button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .icon {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 20px;
        height: 20px;
      }
    `;
  }
}
