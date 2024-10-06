import { Object } from "@/components/objects/Object";
import { DigimonInfo } from "./DigimonInfo.interface";

export class Digimon extends Object {
  public digimonID: string = "";
  // @ts-ignore
  public info: DigimonInfo = {};
  public level: number = 1;
  public maxHP: number = 100;
  public hp: number = 100;

  private readonly selected = document.createElement("div");

  static get observedAttributes() {
    return super.observedAttributes.concat([
      "digimon-id",
      "level",
      "selected",
      "max-hp",
      "hp",
    ]);
  }

  constructor() {
    super();

    this.digimonID = this.getAttribute("digimon-id") || "";
    this.fetchInfo().then(() => {
      if (this.getAttribute("selected") !== null) {
        this.select();
      }
    });
  }

  connectedCallback() {
    super.connectedCallback();

    this.level = parseInt(this.getAttribute("level") || "1");
    this.maxHP = parseInt(this.getAttribute("max-hp") || "100");
    this.hp = parseInt(this.getAttribute("hp") || "100");
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

    if (name === "level") {
      this.level = parseInt(newValue);
      return;
    }

    if (name === "selected") {
      if (this.info === null) {
        return;
      }

      if (newValue === null) {
        this.deSelect();
        return;
      }

      this.select();
      return;
    }

    if (name === "max-hp") {
      this.maxHP = parseInt(newValue);
      return;
    }

    if (name === "hp") {
      this.hp = parseInt(newValue);
      this.selected
        .querySelector("dt2-digimon-selected")
        ?.setAttribute("hp", `${(this.hp / this.maxHP) * 100}`);
      return;
    }
  }

  private async fetchInfo() {
    return fetch(`/digimons/${this.digimonID}.json`)
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

  public select() {
    this.shadow.appendChild(this.selected);
    this.selected.innerHTML = `
      <dt2-digimon-selected
        elemental="${this.info.elemental}"
        attribute="${this.info.attribute}"
        species="${this.info.species}"
        stage="${this.info.stage}"
        name="${this.info.name}"
        level="${this.level}"
        hp="${(this.hp / this.maxHP) * 100}"
      ></dt2-digimon-selected>
    `;
  }

  public deSelect() {
    this.shadow.removeChild(this.selected);
    this.selected.innerHTML = "";
  }
}

customElements.define("dt2-digimon", Digimon);
