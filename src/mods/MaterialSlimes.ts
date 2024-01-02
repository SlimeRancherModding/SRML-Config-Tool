export interface MaterialSlimesSettings {
  OLD_APPEARANCES: boolean;
}

export interface MaterialSlimesConfig {
  Settings: MaterialSlimesSettings;
}

// Default values
export const MaterialSlimesDefaults: MaterialSlimesConfig = {
  Settings: {
    OLD_APPEARANCES: false,
  },
};
