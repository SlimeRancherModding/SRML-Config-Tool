import { Slimes } from "../enums";

export interface MoldableChromaConfig {
  LIGHT_MOLDED_COLOR: string[];
  DARK_MOLDED_COLOR: string[];
}

export interface MoldableChromaColors {
  LIGHT_MOLDED_COLOR_1: string;
  LIGHT_MOLDED_COLOR_2: string;
  LIGHT_MOLDED_COLOR_3: string;
  LIGHT_MOLDED_COLOR_4: string;
  LIGHT_MOLDED_COLOR_5: string;
  LIGHT_MOLDED_COLOR_6: string;
  LIGHT_MOLDED_COLOR_7: string;
  LIGHT_MOLDED_COLOR_8: string;
  DARK_MOLDED_COLOR_1: string;
  DARK_MOLDED_COLOR_2: string;
  DARK_MOLDED_COLOR_3: string;
  DARK_MOLDED_COLOR_4: string;
  DARK_MOLDED_COLOR_5: string;
  DARK_MOLDED_COLOR_6: string;
  DARK_MOLDED_COLOR_7: string;
  DARK_MOLDED_COLOR_8: string;
}

export interface MoldableChroma extends MoldableChromaConfig, MoldableChromaColors {}

export interface MoldableSlime {
  MOLDING: boolean;
  MOLDED_APPEARANCE: Slimes;
}

export interface JuModPackConfig {
  MoldableChroma: MoldableChroma;
  MoldableSlime: MoldableSlime;
}

// Default values
export const JuModPackDefaults: JuModPackConfig = {
  MoldableChroma: {
    LIGHT_MOLDED_COLOR: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
    DARK_MOLDED_COLOR: ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
    LIGHT_MOLDED_COLOR_1: "#FFFFFF",
    LIGHT_MOLDED_COLOR_2: "#FFFFFF",
    LIGHT_MOLDED_COLOR_3: "#FFFFFF",
    LIGHT_MOLDED_COLOR_4: "#FFFFFF",
    LIGHT_MOLDED_COLOR_5: "#FFFFFF",
    LIGHT_MOLDED_COLOR_6: "#FFFFFF",
    LIGHT_MOLDED_COLOR_7: "#FFFFFF",
    LIGHT_MOLDED_COLOR_8: "#FFFFFF",
    DARK_MOLDED_COLOR_1: "#000000",
    DARK_MOLDED_COLOR_2: "#000000",
    DARK_MOLDED_COLOR_3: "#000000",
    DARK_MOLDED_COLOR_4: "#000000",
    DARK_MOLDED_COLOR_5: "#000000",
    DARK_MOLDED_COLOR_6: "#000000",
    DARK_MOLDED_COLOR_7: "#000000",
    DARK_MOLDED_COLOR_8: "#000000",
  },
  MoldableSlime: {
    MOLDING: false,
    MOLDED_APPEARANCE: Slimes.PINK_SLIME,
  },
};