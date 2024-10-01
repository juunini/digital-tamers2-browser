export interface DigimonInfo {
  id: string;
  name: string;
  motions: {
    idle: DigimonSprites;
    walk: DigimonSprites;
    eat: DigimonSprites;
    angry: DigimonSprites;
    win: DigimonSprites;
    lose: DigimonSprites;
    atk01: DigimonSprites;
    atk02: DigimonSprites;
    atkSP: DigimonSprites;
    block: DigimonSprites;
    dmg: DigimonSprites;
    jump: DigimonSprites;
  };
}

export interface DigimonSprites {
  path: string;
  frames: number;
  duration: number;
}
