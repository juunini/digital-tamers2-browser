import type {
  DigimonAttribute,
  DigimonElemental,
  DigimonSpecies,
  DigimonStage,
} from "./Digimon.type";

export interface DigimonInfo {
  id: string;
  name: string;
  elemental: DigimonElemental;
  attribute: DigimonAttribute;
  species: DigimonSpecies;
  stage: DigimonStage;
}

export interface DigimonMotions {
  idle: string[];
  walk: string[];
  eat: string[];
  angry: string[];
  win: string[];
  lose: string[];
  atk01: string[];
  atk02: string[];
  atkSP: string[];
  block: string[];
  dmg: string[];
  jump: string[];
}

export interface DigimonSprites {
  path: string;
  frames: number;
  duration: number;
}

export interface DigimonStatus {
  maxHP: number;
  hp: number;

  maxXP: number;
  xp: number;

  level: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  spirit: number;
  friendship: number;

  maxAge: number;
  age: number;

  maxHunger: number;
  hunger: number;

  maxHealth: number;
  health: number;

  maxEnergy: number;
  energy: number;
}

export interface DigimonExtraStatus {
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  spirit: number;
}
