export interface ColorfulSlimesSettings {
  SHOULD_RANDOMIZE_COLORS: boolean;
  SHOULD_RANDOMIZE_WITH_DISCO: boolean;
}

export interface ColorfulSlimesConfig {
  Settings: ColorfulSlimesSettings;
}

// Default values
export const ColorfulSlimesDefaults: ColorfulSlimesConfig = {
  Settings: {
    SHOULD_RANDOMIZE_COLORS: true,
    SHOULD_RANDOMIZE_WITH_DISCO: true,
  },
};
