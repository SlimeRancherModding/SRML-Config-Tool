//mods.ts
import { ColorfulSlimesConfig, ColorfulSlimesDefaults } from "./ColorfulSlimes";
import { CustomizableSlimesConfig, CustomizableSlimesDefaults } from "./CustomizableSlimes";
import { CustomisableSlimesExtraConfig, CustomisableSlimesExtraDefaults } from "./CustomizableSlimesExtra";
import { JuModPackConfig, JuModPackDefaults } from "./JUModPack";
import { MaterialSlimesConfig, MaterialSlimesDefaults } from "./MaterialSlimes";

export interface Mods {
  CustomisableSlimes: CustomizableSlimesConfig;
  CustomisableSlimesExtra: CustomisableSlimesExtraConfig;
  MaterialSlimes: MaterialSlimesConfig;
  ColorfulSlimes: ColorfulSlimesConfig;
  JuModPack: JuModPackConfig;
  [key: string]: any; // Index signature for flexibility
}

export const ModsDefaults: Mods = {
  CustomisableSlimes: CustomizableSlimesDefaults,
  CustomisableSlimesExtra: CustomisableSlimesExtraDefaults,
  MaterialSlimes: MaterialSlimesDefaults,
  ColorfulSlimes: ColorfulSlimesDefaults,
  JuModPack: JuModPackDefaults,
};
