import { DigimonMotion } from "./Digimon.type";
import { DigimonInfo } from "./DigimonInfo.interface";

interface DigimonMotionProps {
  count?: number;
  loop?: boolean;
}

export class Digimon extends HTMLElement {
  private readonly shadow = this.attachShadow({ mode: "closed" });
  public readonly img = document.createElement("img");
  private readonly styleSheet = document.createElement("style");

  public name: string = "";
  public digimonID: string = "";
  // @ts-ignore
  public info: DigimonInfo = {};
  public animation?: Timer;

  static get observedAttributes() {
    return ["name", "digimon-id"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.style.display = "flex";

    this.shadow.appendChild(this.img);
    this.shadow.appendChild(this.styleSheet);

    this.styleSheet.textContent = `
      img {
        zoom: 3;
      }
    `;

    this.initAttributes();
    this.fetchInfo();
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;

    if (name === "name") this.name = newValue;

    if (name === "digimon-id") {
      this.digimonID = newValue;
      this.fetchInfo();
    }
  }

  private initAttributes() {
    this.name = this.getAttribute("name") || "";
    this.digimonID = this.getAttribute("digimon-id") || "";
  }

  private fetchInfo() {
    fetch(`/digimons/${this.digimonID}.json`)
      .then((response) => response.json())
      .then((data) => (this.info = data));
  }

  public stop() {
    clearInterval(this.animation);
  }

  public idle({ count = 1, loop = false }: DigimonMotionProps) {
    this.stop();

    const motion = this.info.motions.idle;

    this.img.src = `${motion.path}_0.png`;

    if (motion.frames === 1) return;

    let i = 1;
    let currentCount = 0;
    let direction = 1;

    this.animation = setInterval(() => {
      this.img.src = `${motion.path}_${i}.png`;

      i += direction;

      if (i === motion.frames - 1 || i === 0) {
        currentCount++;
        direction *= -1;
      }

      if (currentCount === count && !loop) {
        this.stop();
      }

      if (currentCount === count && loop) {
        currentCount = 0;
      }
    }, motion.duration / motion.frames);
  }

  public walk({ count = 1, loop = false }: DigimonMotionProps) {
    animate({ digimon: this, motionName: "walk", count, loop });
  }

  public eat({ count = 1, loop = false }: DigimonMotionProps) {
    animate({ digimon: this, motionName: "eat", count, loop });
  }

  public angry({ count = 1, loop = false }: DigimonMotionProps) {
    animate({ digimon: this, motionName: "angry", count, loop });
  }

  public win({ count = 1, loop = false }: DigimonMotionProps) {
    animate({ digimon: this, motionName: "win", count, loop });
  }

  public lose({ count = 1, loop = false }: DigimonMotionProps) {
    animate({ digimon: this, motionName: "lose", count, loop });
  }

  public atk01({ count = 1, loop = false }: DigimonMotionProps) {
    animate({ digimon: this, motionName: "atk01", count, loop });
  }

  public atk02({ count = 1, loop = false }: DigimonMotionProps) {
    animate({ digimon: this, motionName: "atk02", count, loop });
  }

  public atkSP({ count = 1, loop = false }: DigimonMotionProps) {
    animate({ digimon: this, motionName: "atkSP", count, loop });
  }

  public block({ count = 1, loop = false }: DigimonMotionProps) {
    animate({ digimon: this, motionName: "block", count, loop });
  }

  public dmg({ count = 1, loop = false }: DigimonMotionProps) {
    animate({ digimon: this, motionName: "dmg", count, loop });
  }

  public jump({ count = 1, loop = false }: DigimonMotionProps) {
    animate({ digimon: this, motionName: "jump", count, loop });
  }
}

interface animateProps {
  digimon: Digimon;
  motionName: DigimonMotion;
  count?: number;
  loop?: boolean;
}

function animate({
  digimon,
  motionName,
  count = 1,
  loop = false,
}: animateProps) {
  digimon.stop();

  const motion = digimon.info.motions[motionName];

  digimon.img.src = `${motion.path}_0.png`;

  if (motion.frames === 1) return;

  let i = 1;
  let currentCount = 0;

  digimon.animation = setInterval(() => {
    digimon.img.src = `${motion.path}_${i}.png`;

    i++;

    if (i === motion.frames) {
      i = 0;
      currentCount++;
    }

    if (currentCount === count && !loop) {
      digimon.stop();
    }
  }, motion.duration / motion.frames);
}

customElements.define("dt2-digimon", Digimon);
