import type {
  DigimonAttribute,
  DigimonElemental,
  DigimonSpecies,
  DigimonStage,
} from "./Digimon.type";

const elementalMap = {
  fire: "/spr_ElemAttribute/spr_ElemAttribute_0.png",
  ice: "/spr_ElemAttribute/spr_ElemAttribute_1.png",
  earth: "/spr_ElemAttribute/spr_ElemAttribute_2.png",
  light: "/spr_ElemAttribute/spr_ElemAttribute_3.png",
  "patch black": "/spr_ElemAttribute/spr_ElemAttribute_4.png",
  steel: "/spr_ElemAttribute/spr_ElemAttribute_5.png",
  thunder: "/spr_ElemAttribute/spr_ElemAttribute_6.png",
  water: "/spr_ElemAttribute/spr_ElemAttribute_7.png",
  wind: "/spr_ElemAttribute/spr_ElemAttribute_8.png",
  wood: "/spr_ElemAttribute/spr_ElemAttribute_9.png",
  neutral: "/spr_ElemAttribute/spr_ElemAttribute_10.png",
};
const attributeMap = {
  none: "/spr_Attribute/spr_Attribute_0.png",
  data: "/spr_Attribute/spr_Attribute_1.png",
  virus: "/spr_Attribute/spr_Attribute_2.png",
  vaccine: "/spr_Attribute/spr_Attribute_3.png",
  unknown: "/spr_Attribute/spr_Attribute_4.png",
};
const speciesMap = {
  none: "fnt_Evo_Text/fnt_Evo_Text_75.png",
  dragon: "fnt_Evo_Text/fnt_Evo_Text_76.png",
  beast: "fnt_Evo_Text/fnt_Evo_Text_77.png",
  insect: "fnt_Evo_Text/fnt_Evo_Text_78.png",
  holy: "fnt_Evo_Text/fnt_Evo_Text_79.png",
  bird: "fnt_Evo_Text/fnt_Evo_Text_80.png",
  aquatic: "fnt_Evo_Text/fnt_Evo_Text_81.png",
  machine: "fnt_Evo_Text/fnt_Evo_Text_82.png",
  dark: "fnt_Evo_Text/fnt_Evo_Text_83.png",
  plant: "fnt_Evo_Text/fnt_Evo_Text_84.png",
};
const stageMap = {
  no: "spr_EvoStage/spr_EvoStage_0.png",
  baby1: "spr_EvoStage/spr_EvoStage_1.png",
  baby2: "spr_EvoStage/spr_EvoStage_2.png",
  rookie: "spr_EvoStage/spr_EvoStage_3.png",
  champion: "spr_EvoStage/spr_EvoStage_4.png",
  ultimate: "spr_EvoStage/spr_EvoStage_5.png",
  mega: "spr_EvoStage/spr_EvoStage_6.png",
  ultra: "spr_EvoStage/spr_EvoStage_7.png",
  "no level": "spr_EvoStage/spr_EvoStage_8.png",
  unknown: "spr_EvoStage/spr_EvoStage_9.png",
  egg: "spr_EvoStage/spr_EvoStage_10.png",
};

export class Selected extends HTMLElement {
  private readonly shadow = this.attachShadow({ mode: "closed" });
  private readonly styleSheet = document.createElement("style");
  private readonly opponentWrapper = document.createElement("div");
  private readonly targetAnimation = document.createElement("img");
  private readonly opponent0 = document.createElement("img");
  private readonly opponent1 = document.createElement("img");
  private readonly opponent2 = document.createElement("img");
  private readonly elemental = document.createElement("img");
  private readonly attribute = document.createElement("img");
  private readonly species = document.createElement("img");
  private readonly stage = document.createElement("img");
  private readonly name = document.createElement("div");
  private readonly level = document.createElement("div");
  private readonly lv = document.createElement("div");
  private readonly hp = document.createElement("div");
  private _hp = 100;

  static get observedAttributes() {
    return [
      "elemental",
      "attribute",
      "species",
      "stage",
      "name",
      "level",
      "hp",
    ];
  }

  constructor() {
    super();
    this.style.position = "absolute";
    this.style.top = "50%";
    this.style.left = "50%";
    this.style.transform = "translate(-50%, -50%)";
    this.style.display = "inline-block";
    this.style.width = "86px";
    this.style.height = "80px";

    this.opponent0.src = "/spr_Target_Opponent/spr_Target_Opponent_0.png";
    this.opponent1.src = "/spr_Target_Opponent/spr_Target_Opponent_1.png";
    this.opponent2.src = "/spr_Target_Opponent/spr_Target_Opponent_2.png";

    this.opponent0.classList.add("opponent0");
    this.opponent1.classList.add("opponent1");
    this.opponent2.classList.add("opponent2");
    this.elemental.classList.add("elemental");
    this.attribute.classList.add("attribute");
    this.species.classList.add("species");
    this.stage.classList.add("stage");
    this.name.classList.add("name");
    this.level.classList.add("level");
    this.lv.classList.add("lv");
    this.hp.classList.add("hp");

    this.elemental.src =
      elementalMap[this.getAttribute("elemental") as DigimonElemental];
    this.attribute.src =
      attributeMap[this.getAttribute("attribute") as DigimonAttribute];
    this.species.src =
      speciesMap[this.getAttribute("species") as DigimonSpecies];
    this.stage.src = stageMap[this.getAttribute("stage") as DigimonStage];

    this.name.textContent = this.getAttribute("name");
    this.level.textContent = this.getAttribute("level");
    this.lv.textContent = "LV";

    this.level.dataset.text = this.getAttribute("level") || "1";
    this.lv.dataset.text = "LV";
    this.name.dataset.text = this.getAttribute("name") || "unknown";

    this._hp = Number(this.getAttribute("hp")) || 100;
    this.hp.style.width = `calc(${this._hp}% - 2px)`;
  }

  connectedCallback() {
    this.shadow.appendChild(this.opponentWrapper);
    this.shadow.appendChild(this.styleSheet);
    this.opponentWrapper.appendChild(this.targetAnimation);
    this.opponentWrapper.appendChild(this.opponent1);
    this.opponentWrapper.appendChild(this.opponent2);
    this.opponentWrapper.appendChild(this.opponent0);
    this.opponentWrapper.appendChild(this.elemental);
    this.opponentWrapper.appendChild(this.attribute);
    this.opponentWrapper.appendChild(this.species);
    this.opponentWrapper.appendChild(this.stage);
    this.opponentWrapper.appendChild(this.name);
    this.opponentWrapper.appendChild(this.level);
    this.opponentWrapper.appendChild(this.lv);
    this.opponentWrapper.appendChild(this.hp);

    this.styleSheet.textContent = `
      div {
        position: relative;
        width: 86px;
        height: 80px;
      }

      img {
        position: absolute;
        z-index: -1;
      }

      .opponent0 {
        left: 0;
        bottom: 10px;
      }

      .opponent1 {
        top: 2.2px;
        left: 5.5px;
      }

      .opponent2 {
        left: 3px;
        bottom: 0px;
        animation: opponent2 10s linear infinite;
      }

      @keyframes opponent2 {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(-360deg);
        }
      }

      .elemental {
        left: 17px;
        bottom: 13px;
      }

      .attribute {
        left: 47px;
        bottom: 12px;
      }

      .species {
        left: 1px;
        bottom: 12px;
        border-radius: 50%;
        box-shadow: 0 0 2px 1px #40e000;
        outline: 1px solid #40e000;
      }

      .stage {
        left: 35px;
        bottom: 13px;
      }

      .name, .level, .lv {
        position: absolute;
        height: 8px;
        font-size: 8px;
        font-family: "minecraftia", sans-serif;
        color: #efffff;
        box-sizing: border-box;
      }

      .name {
        top: 5px;
        left: 0;
        width: 100%;
        text-align: center;
      }

      .name::after {
        display: block !important;
        width: 100% !important;
        text-align: center;
      }

      .level {
        left: 67px;
        bottom: 14px;
        width: auto;
        font-size: 10px;
        font-family: "digivolve", sans-serif;
        text-shadow: none;
      }

      .name::after, .level::after, .lv::after {
        content: attr(data-text);
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        width: auto;
        -webkit-text-stroke: 2px #313131;
      }

      .lv {
        left: 61px;
        bottom: 12px;
        width: 4px;
        font-size: 4px;
        text-shadow: none;
        overflow-wrap: break-word;
      }

      .lv::after {
        width: 4px;
        font-size: 4px;
        overflow-wrap: break-word;
      }

      .hp {
        position: absolute;
        top: 16px;
        left: 1px;
        height: 4px;
        border-radius: 4px;
        background: #40e000;
      }
    `;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;

    if (name === "elemental") {
      this.elemental.src = elementalMap[newValue as DigimonElemental];
      return;
    }

    if (name === "attribute") {
      this.attribute.src = attributeMap[newValue as DigimonAttribute];
      return;
    }

    if (name === "species") {
      this.species.src = speciesMap[newValue as DigimonSpecies];
      return;
    }

    if (name === "stage") {
      this.stage.src = stageMap[newValue as DigimonStage];
      return;
    }

    if (name === "name") {
      this.name.textContent = newValue;
      return;
    }

    if (name === "level") {
      this.level.textContent = newValue;
      return;
    }

    if (name === "hp") {
      this._hp = Number(newValue);
      this.hp.style.width = `calc(${newValue}% - 2px)`;
      return;
    }
  }
}

customElements.define("dt2-digimon-selected", Selected);
