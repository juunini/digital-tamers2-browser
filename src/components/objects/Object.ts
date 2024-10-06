export class Object extends HTMLElement {
  protected readonly shadow = this.attachShadow({ mode: "closed" });
  private direction = 1;

  public readonly img = document.createElement("img");
  private _top = "inherit";
  private _right = "inherit";
  private _bottom = "inherit";
  private _left = "inherit";

  static get observedAttributes() {
    return ["src", "top", "right", "bottom", "left"];
  }

  constructor() {
    super();

    this.style.display = "inline-block";
    this.style.position = "absolute";

    this.shadow.appendChild(this.img);
  }

  connectedCallback() {
    this.img.src = this.getAttribute("src") || "";
    this.initPosition();
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;

    if (name === "src") {
      this.img.src = newValue;
      return;
    }

    if (name === "top") {
      this.top = newValue;
      return;
    }

    if (name === "right") {
      this.right = newValue;
      return;
    }

    if (name === "bottom") {
      this.bottom = newValue;
      return;
    }

    if (name === "left") {
      this.left = newValue;
      return;
    }
  }

  private initPosition() {
    this.top = this.getAttribute("top") || "initial";
    this.right = this.getAttribute("right") || "initial";
    this.bottom = this.getAttribute("bottom") || "initial";
    this.left = this.getAttribute("left") || "initial";
  }

  public turn() {
    this.direction *= -1;
    this.style.transform = `scaleX(${this.direction})`;
  }

  set left(value: string) {
    this._left = value;
    this.style.left = `${value}px`;
  }

  get left(): string {
    return this._left;
  }

  set right(value: string) {
    this._right = value;
    this.style.right = `${value}px`;
  }

  get right(): string {
    return this._right;
  }

  set top(value: string) {
    this._top = value;
    this.style.top = `${value}px`;
  }

  get top(): string {
    return this._top;
  }

  set bottom(value: string) {
    this._bottom = value;
    this.style.bottom = `${value}px`;
  }

  get bottom(): string {
    return this._bottom;
  }
}
