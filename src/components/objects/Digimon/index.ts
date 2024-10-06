import { Object } from "@/components/objects/Object";
import { DigimonInfo } from "./DigimonInfo.interface";

export class Digimon extends Object {
  public digimonID: string = "";
  // @ts-ignore
  public info: DigimonInfo = {};

  static get observedAttributes() {
    return super.observedAttributes.concat(["digimon-id"]);
  }

  constructor() {
    super();

    this.digimonID = this.getAttribute("digimon-id") || "";
    this.fetchInfo();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  adoptedCallback() {
    super.adoptedCallback();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;

    super.attributeChangedCallback(name, oldValue, newValue);

    if (name === "digimon-id") {
      this.digimonID = newValue;
      this.fetchInfo();
      return;
    }
  }

  private fetchInfo() {
    fetch(`/digimons/${this.digimonID}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.info = data;
        this.img.src = `${this.info.motions.idle.path}_0.png`;
      });
  }

  public idle() {}

  public walk() {}

  public eat() {}

  public angry() {}

  public win() {}

  public lose() {}

  public atk01() {}

  public atk02() {}

  public atkSP() {}

  public block() {}

  public dmg() {}

  public jump() {}
}

customElements.define("dt2-digimon", Digimon);
