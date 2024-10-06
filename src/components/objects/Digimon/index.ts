import { Object } from "@/components/objects/Object";
import type {
  DigimonInfo,
  DigimonStatus,
  DigimonExtraStatus,
  DigimonMotions,
} from "./DigimonInfo.interface";

export class Digimon extends Object {
  private _info: DigimonInfo = {
    id: "unknown",
    name: "unknown",
    elemental: "neutral",
    attribute: "unknown",
    species: "none",
    stage: "unknown",
  };
  public motions: DigimonMotions = {
    idle: [],
    walk: [],
    eat: [],
    angry: [],
    win: [],
    lose: [],
    atk01: [],
    atk02: [],
    atkSP: [],
    block: [],
    dmg: [],
    jump: [],
  };
  private _status: DigimonStatus = {
    maxHP: 0,
    hp: 0,
    maxXP: 0,
    xp: 0,
    level: 0,
    attack: 0,
    defense: 0,
    spAttack: 0,
    spDefense: 0,
    spirit: 0,
    friendship: 0,
    maxAge: 0,
    age: 0,
    maxHunger: 0,
    hunger: 0,
    maxHealth: 0,
    health: 0,
    maxEnergy: 0,
    energy: 0,
  };
  private _extraStatus: DigimonExtraStatus = {
    hp: 0,
    attack: 0,
    defense: 0,
    spAttack: 0,
    spDefense: 0,
    spirit: 0,
  };

  private readonly selected = document.createElement("div");

  static get observedAttributes() {
    return super.observedAttributes.concat(["digimon-id", "selected"]);
  }

  constructor() {
    super();

    this._info.id = this.getAttribute("digimon-id") || "";
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
      this._info.id = newValue;
      this.fetchInfo();
      return;
    }

    if (name === "selected") {
      if (this._info === null) {
        return;
      }

      if (newValue === null) {
        this.deSelect();
        return;
      }

      this.select();
      return;
    }
  }

  private async fetchInfo() {
    return fetch(`/digimons/${this._info.id}.json`)
      .then((response) => response.json())
      .then((data) => {
        this._info = {
          id: data.id,
          name: data.name,
          elemental: data.elemental,
          attribute: data.attribute,
          species: data.species,
          stage: data.stage,
        };
        this.motions = data.motions;
        this.img.src = this.motions.idle[0];
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
        level="${this.status.level}"
        hp="${(this.status.hp / this.status.maxHP) * 100}"
      ></dt2-digimon-selected>
    `;
  }

  public deSelect() {
    this.shadow.removeChild(this.selected);
    this.selected.innerHTML = "";
  }

  get info() {
    return this._info;
  }

  set info(info: DigimonInfo) {
    this._info = info;
  }

  get status() {
    return this._status;
  }

  set status(status: DigimonStatus) {
    if (status.hp > status.maxHP) {
      status.hp = status.maxHP;
    }

    if (status.hp < 0) {
      status.hp = 0;
    }

    if (status.xp >= status.maxXP) {
      status.xp = status.maxXP;
      status.level += 1;
      status.maxXP =
        Math.pow(status.level, 3) +
        6 * Math.pow(status.level, 2) +
        12 * (status.level - 1);
    }

    this._status = status;
  }

  get extraStatus() {
    return this._extraStatus;
  }

  set extraStatus(extraStatus: DigimonExtraStatus) {
    this._extraStatus = extraStatus;
  }
}

customElements.define("dt2-digimon", Digimon);
