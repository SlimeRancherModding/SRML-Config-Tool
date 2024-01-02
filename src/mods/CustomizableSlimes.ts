import { Crafts, Crates, Emotions, FoodGroups, Foods, LargoProps, Plorts, Slimes, Toys, VacpackSize, Zones } from "../enums";

export interface CustomSlime {
  SLIME_NAME: string;
  TARR_SUPPORT: boolean;
  CAN_LARGOFY: boolean;
  WHAT_SLIME_LOOKS_LIKE: Slimes;
  WHAT_SLIME_ACTS_LIKE: Slimes;
  WHAT_SLIME_MATERIAL: Slimes;
  WHAT_SLIME_PRODUCES: (Plorts | Crafts | Crates)[];
  WHAT_SLIME_EATS: FoodGroups[];
  ADDITIONAL_FOOD_SLIME_EATS: Foods[];
  FAVORITE_SLIME_EATS: Foods[];
  FAVORITE_SLIME_TOY: Toys[];
  VACPACK_SIZE: VacpackSize;
  SLIMEPEDIA_TITLE: string;
  SLIMEPEDIA_INTRO: string;
  SLIMEPEDIA_DIET: string;
  SLIMEPEDIA_FAVORITE: string;
  SLIMEPEDIA_SLIMEOLOGY: string;
  SLIMEPEDIA_RISKS: string;
  SLIMEPEDIA_PLORTONOMICS: string;
  SLIME_TOP_COLOR_RGB: string;
  SLIME_MIDDLE_COLOR_RGB: string;
  SLIME_BOTTOM_COLOR_RGB: string;
  SLIME_SPEC_COLOR_RGB: string;
  SLIME_VAC_COLOR_RGB: string;
  MOUTH_TOP_COLOR_RGB: string;
  MOUTH_MIDDLE_COLOR_RGB: string;
  MOUTH_BOTTOM_COLOR_RGB: string;
  EYES_TOP_COLOR_RGB: string;
  EYES_MIDDLE_COLOR_RGB: string;
  EYES_BOTTOM_COLOR_RGB: string;
  SPLAT_TOP_COLOR_RGB: string;
  SPLAT_MIDDLE_COLOR_RGB: string;
  SPLAT_BOTTOM_COLOR_RGB: string;
}

export interface AdditionalConfig {
  DISABLE_SPAWNING: boolean;
  RANDOM_SLIME_COLORS: boolean;
  RANDOM_PLORT_COLORS: boolean;
  REMOVE_PHOSPHOR_WINGS: boolean;
  REMOVE_PHOSPHOR_ANTENNAS: boolean;
  REMOVE_STYLED_PHOSPHOR_WINGS: boolean;
  REMOVE_STYLED_PHOSPHOR_ANTENNAS: boolean;
}

export interface AdvancedConfig {
  SLIME_LOCAL_SCALE: number;
  SLIME_SPEED_FACTOR: number;
  SLIME_VERTICAL_FACTOR: number;
  PLORT_LOCAL_SCALE: number;
  ATTACK_PLAYER_DAMAGE: number;
  DAMAGE_ON_TOUCH_DAMAGE: number;
  DAMAGE_ON_TOUCH_REPEAT: number;
  GOTO_PLAYER_MIN_RADIUS: number;
  GOTO_PLAYER_MAX_RADIUS: number;
  GOTO_PLAYER_ATTEMPT: number;
  GOTO_PLAYER_GIVEUP: number;
  GOTO_PLAYER_MIN_DRIVE: number;
  TARR_GRAB_CAUSE_FEAR: boolean;
  TARR_GRAB_COOLDOWN: number;
  TARR_GRAB_MIN_RADIUS: number;
  TARR_GRAB_MAX_RADIUS: number;
  FLEE_THREATS_DRIVER: Emotions;
  FLEE_THREATS_MAX_JUMP: number;
  AGITATED_KILL_IGNORE: Emotions;
  AGITATED_KILL_DELAY: number;
  SLIME_RUN_COMMAND_DELAY: number;
  SLIME_RUN_COMMAND_DRIVER: Emotions;
  SLIME_RUN_COMMAND_DRIVER_AMOUNT: number;
  SLIME_RUN_COMMAND_TRIGGER: string;
}

export interface BehavioursConfig {
  HAS_DAMAGE_ON_TOUCH: boolean;
  HAS_SLIME_HOVER: boolean;
  HAS_PUDDLE_SLIME_SCOOT: boolean;
  HAS_BETTER_BREAK_ON_IMPACT: boolean;
  HAS_GOTO_PLAYER: boolean;
  HAS_ATTACK_PLAYER: boolean;
  HAS_FLEE_THREATS: boolean;
  HAS_METEOR_MAGNETISM: boolean;
  HAS_BOOM_EXPLOSION: boolean;
  HAS_CRYSTAL_SPIKES: boolean;
  HAS_DERVISH_TORNADO: boolean;
  HAS_MOSAIC_GLINT: boolean;
  HAS_TANGLE_VINES: boolean;
  HAS_TARR_GRAB: boolean;
  HAS_AGITATED_KILL: boolean;
  HAS_SLIME_RUN_COMMAND: boolean;
}

export interface CustomMesh {
  CUSTOM_MESH_ENABLED: boolean;
  CUSTOM_MESH_OBJ_NAME: string;
  CUSTOM_MESH_JIGGLE: number;
  CUSTOM_MESH_SCALE: number;
  CUSTOM_MESH_RUBBER_EFFECT: boolean;
  CUSTOM_MESH_IGNORE_LOD_INDEX: boolean;
  STYLED_CUSTOM_MESH_ENABLED: boolean;
  STYLED_CUSTOM_MESH_OBJ_NAME: string;
  STYLED_CUSTOM_MESH_JIGGLE: number;
  STYLED_CUSTOM_MESH_SCALE: number;
  STYLED_CUSTOM_MESH_RUBBER_EFFECT: boolean;
  STYLED_CUSTOM_MESH_IGNORE_LOD_INDEX: boolean;
}

export interface CustomPlort {
  PLORT_NAME: string;
  HAS_ROCKS: boolean;
  WHAT_PLORT_LOOKS_LIKE: Plorts;
  VACPACK_SIZE: VacpackSize;
  PLORT_PRICE: number;
  PLORT_SATURATION: number;
  PLORT_TOP_COLOR_RGB: string;
  PLORT_MIDDLE_COLOR_RGB: string;
  PLORT_BOTTOM_COLOR_RGB: string;
  PLORT_VAC_COLOR_RGB: string;
  ROCKS_TOP_COLOR_RGB: string;
  ROCKS_MIDDLE_COLOR_RGB: string;
  ROCKS_BOTTOM_COLOR_RGB: string;
}

export interface EatMapConfig {
  TRANSFORM_EATMAP: boolean;
  PRODUCE_EATMAP: boolean;
  TRANSFORM_WHAT_SLIME_EATS: Foods;
  TRANSFORM_WHAT_SLIME_BECOMES: Slimes;
  TRANSFORM_EAT_DRIVER: Emotions;
  TRANSFORM_MIN_DRIVE: number;
  TRANSFORM_EXTRA_DRIVE: number;
  PRODUCE_WHAT_SLIME_PRODUCES: Plorts;
  PRODUCE_WHAT_SLIME_EATS: Foods;
  PRODUCE_EAT_DRIVER: Emotions;
  PRODUCE_IS_FAVORITE_FOOD: boolean;
  PRODUCE_FAVORITE_PRODUCTION_COUNT: number;
  PRODUCE_MIN_DRIVE: number;
  PRODUCE_EXTRA_DRIVE: number;
}

export interface LargoProperties {
  LARGO_PROPERTY_1: LargoProps;
  LARGO_PROPERTY_2: LargoProps;
  LARGO_PROPERTY_3: LargoProps;
  LARGO_PROPERTY_4: LargoProps;
  LARGO_PROPERTY_5: LargoProps;
  LARGO_PROPERTY_6: LargoProps;
  LARGO_PROPERTY_7: LargoProps;
  LARGO_PROPERTY_8: LargoProps;
  LARGO_PROPERTY_9: LargoProps;
  LARGO_PROPERTY_10: LargoProps;
}

export interface SpawnZoneConfig {
  SPAWN_EVERYWHERE: boolean;
  SPAWN_CHANCE: number;
  SPAWN_ZONE_1: Zones;
  SPAWN_ZONE_2: Zones;
  SPAWN_ZONE_3: Zones;
  SPAWN_ZONE_4: Zones;
  SPAWN_ZONE_5: Zones;
}

export interface StructureConfig {
  RAD_AURA_MIDDLE_RGB: string;
  RAD_AURA_EDGE_RGB: string;
  PHOSPHOR_GLOW_TOP_RGB: string;
  PHOSPHOR_GLOW_MID_RGB: string;
  PHOSPHOR_GLOW_BOT_RGB: string;
  BOOM_CRACKS_RGB: string;
  STYLED_RAD_AURA_MIDDLE_RGB: string;
  STYLED_RAD_AURA_EDGE_RGB: string;
  STYLED_PHOSPHOR_GLOW_TOP_RGB: string;
  STYLED_PHOSPHOR_GLOW_MID_RGB: string;
  STYLED_PHOSPHOR_GLOW_BOT_RGB: string;
  STYLED_BOOM_CRACKS_RGB: string;
}

export interface StyleAppearance {
  SECRET_STYLES_ENABLED: boolean;
  STYLE_NAME: string;
  WHAT_STYLE_MATERIAL: Slimes;
  STYLE_TOP_COLOR_RGB: string;
  STYLE_MIDDLE_COLOR_RGB: string;
  STYLE_BOTTOM_COLOR_RGB: string;
  STYLE_SPEC_COLOR_RGB: string;
  STYLE_VAC_COLOR_RGB: string;
  MOUTH_TOP_COLOR_RGB: string;
  MOUTH_MIDDLE_COLOR_RGB: string;
  MOUTH_BOTTOM_COLOR_RGB: string;
  EYES_TOP_COLOR_RGB: string;
  EYES_MIDDLE_COLOR_RGB: string;
  EYES_BOTTOM_COLOR_RGB: string;
  SPLAT_TOP_COLOR_RGB: string;
  SPLAT_MIDDLE_COLOR_RGB: string;
  SPLAT_BOTTOM_COLOR_RGB: string;
}

export interface StyleCosmetic {
  COSMETIC_POD_ID_NAME: string;
  COSMETIC_POD_POSITION: string;
  COSMETIC_POD_PARENT: string;
  COSMETIC_POD_ROTATION: string;
}

export interface CustomizableSlimesConfig {
  customSlime: CustomSlime;
  additionalConfig: AdditionalConfig;
  advancedConfig: AdvancedConfig;
  behavioursConfig: BehavioursConfig;
  customMesh: CustomMesh;
  customPlort: CustomPlort;
  eatMapConfig: EatMapConfig;
  largoProperties: LargoProperties;
  spawnZoneConfig: SpawnZoneConfig;
  structureConfig: StructureConfig;
  styleAppearance: StyleAppearance;
  styleCosmetic: StyleCosmetic;
}

// Default values
export const CustomizableSlimesDefaults: CustomizableSlimesConfig = {
  customSlime: {
    SLIME_NAME: "Customizable Slime",
    TARR_SUPPORT: true,
    CAN_LARGOFY: false,
    WHAT_SLIME_LOOKS_LIKE: Slimes.PINK_SLIME,
    WHAT_SLIME_ACTS_LIKE: Slimes.PINK_SLIME,
    WHAT_SLIME_MATERIAL: Slimes.PINK_SLIME,
    WHAT_SLIME_PRODUCES: [Plorts.PINK_PLORT],
    WHAT_SLIME_EATS: [FoodGroups.VEGGIES],
    ADDITIONAL_FOOD_SLIME_EATS: [Foods.CARROT_VEGGIE],
    FAVORITE_SLIME_EATS: [Foods.HEART_BEET_VEGGIE],
    FAVORITE_SLIME_TOY: [Toys.KOOKADOBA_BALL],
    VACPACK_SIZE: VacpackSize.NORMAL,
    SLIMEPEDIA_TITLE: "Customizable Slime",
    SLIMEPEDIA_INTRO: "This slime can be customized via configuration files!",
    SLIMEPEDIA_DIET: "Veggies",
    SLIMEPEDIA_FAVORITE: "Heart Beet",
    SLIMEPEDIA_SLIMEOLOGY: "[Insert Long Description Here] and that's what the Customizable Slime can do!",
    SLIMEPEDIA_RISKS: "Don't break your slime! Be a little bit careful when you configure it.",
    SLIMEPEDIA_PLORTONOMICS: "Customizable Plorts are worth a lot of money!",
    SLIME_TOP_COLOR_RGB: "#000000",
    SLIME_MIDDLE_COLOR_RGB: "#000000",
    SLIME_BOTTOM_COLOR_RGB: "#000000",
    SLIME_SPEC_COLOR_RGB: "#000000",
    SLIME_VAC_COLOR_RGB: "#000000",
    MOUTH_TOP_COLOR_RGB: "#ffffff",
    MOUTH_MIDDLE_COLOR_RGB: "#ffffff",
    MOUTH_BOTTOM_COLOR_RGB: "#ffffff",
    EYES_TOP_COLOR_RGB: "#ffffff",
    EYES_MIDDLE_COLOR_RGB: "#ffffff",
    EYES_BOTTOM_COLOR_RGB: "#ffffff",
    SPLAT_TOP_COLOR_RGB: "#000000",
    SPLAT_MIDDLE_COLOR_RGB: "#000000",
    SPLAT_BOTTOM_COLOR_RGB: "#000000",
    },
  additionalConfig: {
    DISABLE_SPAWNING: false,
    RANDOM_SLIME_COLORS: false,
    RANDOM_PLORT_COLORS: false,
    REMOVE_PHOSPHOR_WINGS: false,
    REMOVE_PHOSPHOR_ANTENNAS: false,
    REMOVE_STYLED_PHOSPHOR_WINGS: false,
    REMOVE_STYLED_PHOSPHOR_ANTENNAS: false,
    },
  advancedConfig: {
    SLIME_LOCAL_SCALE: 1,
    SLIME_SPEED_FACTOR: 1,
    SLIME_VERTICAL_FACTOR: 1,
    PLORT_LOCAL_SCALE: 1,
    ATTACK_PLAYER_DAMAGE: 20,
    DAMAGE_ON_TOUCH_DAMAGE: 10,
    DAMAGE_ON_TOUCH_REPEAT: 1,
    GOTO_PLAYER_MIN_RADIUS: 5,
    GOTO_PLAYER_MAX_RADIUS: 20,
    GOTO_PLAYER_ATTEMPT: 10,
    GOTO_PLAYER_GIVEUP: 10,
    GOTO_PLAYER_MIN_DRIVE: 1,
    TARR_GRAB_CAUSE_FEAR: true,
    TARR_GRAB_COOLDOWN: 2,
    TARR_GRAB_MIN_RADIUS: 5,
    TARR_GRAB_MAX_RADIUS: 30,
    FLEE_THREATS_DRIVER: Emotions.FEAR,
    FLEE_THREATS_MAX_JUMP: 2,
    AGITATED_KILL_IGNORE: Emotions.AGITATION,
    AGITATED_KILL_DELAY: 60,
    SLIME_RUN_COMMAND_DELAY: 30,
    SLIME_RUN_COMMAND_DRIVER: Emotions.AGITATION,
    SLIME_RUN_COMMAND_DRIVER_AMOUNT: 0.5,
    SLIME_RUN_COMMAND_TRIGGER: "spawn PINK_SLIME",
    },
  behavioursConfig: {
    HAS_DAMAGE_ON_TOUCH: false,
    HAS_SLIME_HOVER: false,
    HAS_PUDDLE_SLIME_SCOOT: false,
    HAS_BETTER_BREAK_ON_IMPACT: false,
    HAS_GOTO_PLAYER: false,
    HAS_ATTACK_PLAYER: false,
    HAS_FLEE_THREATS: false,
    HAS_METEOR_MAGNETISM: false,
    HAS_BOOM_EXPLOSION: false,
    HAS_CRYSTAL_SPIKES: false,
    HAS_DERVISH_TORNADO: false,
    HAS_MOSAIC_GLINT: false,
    HAS_TANGLE_VINES: false,
    HAS_TARR_GRAB: false,
    HAS_AGITATED_KILL: false,
    HAS_SLIME_RUN_COMMAND: false,
    },
  customMesh: {
    CUSTOM_MESH_ENABLED: false,
    CUSTOM_MESH_OBJ_NAME: "obj_name_here",
    CUSTOM_MESH_JIGGLE: 1,
    CUSTOM_MESH_SCALE: 1,
    CUSTOM_MESH_RUBBER_EFFECT: true,
    CUSTOM_MESH_IGNORE_LOD_INDEX: false,
    STYLED_CUSTOM_MESH_ENABLED: false,
    STYLED_CUSTOM_MESH_OBJ_NAME: "obj_name_here",
    STYLED_CUSTOM_MESH_JIGGLE: 1,
    STYLED_CUSTOM_MESH_SCALE: 1,
    STYLED_CUSTOM_MESH_RUBBER_EFFECT: true,
    STYLED_CUSTOM_MESH_IGNORE_LOD_INDEX: false,
  },
  customPlort: {
    PLORT_NAME: "Customizable Plort",
    HAS_ROCKS: false,
    WHAT_PLORT_LOOKS_LIKE: Plorts.PINK_PLORT,
    VACPACK_SIZE: VacpackSize.NORMAL,
    PLORT_PRICE: 10,
    PLORT_SATURATION: 0.5,
    PLORT_TOP_COLOR_RGB: "#000000",
    PLORT_MIDDLE_COLOR_RGB: "#000000",
    PLORT_BOTTOM_COLOR_RGB: "#000000",
    PLORT_VAC_COLOR_RGB: "#000000",
    ROCKS_TOP_COLOR_RGB: "#000000",
    ROCKS_MIDDLE_COLOR_RGB: "#000000",
    ROCKS_BOTTOM_COLOR_RGB: "#000000",
  },
  eatMapConfig: {
    TRANSFORM_EATMAP: false,
    PRODUCE_EATMAP: false,
    TRANSFORM_WHAT_SLIME_EATS: Foods.CARROT_VEGGIE,
    TRANSFORM_WHAT_SLIME_BECOMES: Slimes.GOLD_SLIME,
    TRANSFORM_EAT_DRIVER: Emotions.HUNGER,
    TRANSFORM_MIN_DRIVE: 1,
    TRANSFORM_EXTRA_DRIVE: 0,
    PRODUCE_WHAT_SLIME_PRODUCES: Plorts.GOLD_PLORT,
    PRODUCE_WHAT_SLIME_EATS: 10,
    PRODUCE_EAT_DRIVER: 3,
    PRODUCE_IS_FAVORITE_FOOD: false,
    PRODUCE_FAVORITE_PRODUCTION_COUNT: 2,
    PRODUCE_MIN_DRIVE: 1,
    PRODUCE_EXTRA_DRIVE: 0,
  },
  largoProperties: {
    LARGO_PROPERTY_1: LargoProps.NONE,
    LARGO_PROPERTY_2: LargoProps.NONE,
    LARGO_PROPERTY_3: LargoProps.NONE,
    LARGO_PROPERTY_4: LargoProps.NONE,
    LARGO_PROPERTY_5: LargoProps.NONE,
    LARGO_PROPERTY_6: LargoProps.NONE,
    LARGO_PROPERTY_7: LargoProps.NONE,
    LARGO_PROPERTY_8: LargoProps.NONE,
    LARGO_PROPERTY_9: LargoProps.NONE,
    LARGO_PROPERTY_10: LargoProps.NONE,
  },
  spawnZoneConfig: {
    SPAWN_EVERYWHERE: false,
    SPAWN_CHANCE: 1,
    SPAWN_ZONE_1: Zones.RANCH,
    SPAWN_ZONE_2: Zones.NONE,
    SPAWN_ZONE_3: Zones.NONE,
    SPAWN_ZONE_4: Zones.NONE,
    SPAWN_ZONE_5: Zones.NONE,
  },
  structureConfig: {
    RAD_AURA_MIDDLE_RGB: "#000000",
    RAD_AURA_EDGE_RGB: "#000000",
    PHOSPHOR_GLOW_TOP_RGB: "#000000",
    PHOSPHOR_GLOW_MID_RGB: "#000000",
    PHOSPHOR_GLOW_BOT_RGB: "#000000",
    BOOM_CRACKS_RGB: "#000000",
    STYLED_RAD_AURA_MIDDLE_RGB: "#000000",
    STYLED_RAD_AURA_EDGE_RGB: "#000000",
    STYLED_PHOSPHOR_GLOW_TOP_RGB: "#000000",
    STYLED_PHOSPHOR_GLOW_MID_RGB: "#000000",
    STYLED_PHOSPHOR_GLOW_BOT_RGB: "#000000",
    STYLED_BOOM_CRACKS_RGB: "#000000",
  },
  styleAppearance: {
    SECRET_STYLES_ENABLED: false,
    STYLE_NAME: "De-Customizable Slime",
    WHAT_STYLE_MATERIAL: Slimes.PINK_SLIME,
    STYLE_TOP_COLOR_RGB: "#ffffff",
    STYLE_MIDDLE_COLOR_RGB: "#ffffff",
    STYLE_BOTTOM_COLOR_RGB: "#ffffff",
    STYLE_SPEC_COLOR_RGB: "#ffffff",
    STYLE_VAC_COLOR_RGB: "#ffffff",
    MOUTH_TOP_COLOR_RGB: "#000000",
    MOUTH_MIDDLE_COLOR_RGB: "#000000",
    MOUTH_BOTTOM_COLOR_RGB: "#000000",
    EYES_TOP_COLOR_RGB: "#000000",
    EYES_MIDDLE_COLOR_RGB: "#000000",
    EYES_BOTTOM_COLOR_RGB: "#000000",
    SPLAT_TOP_COLOR_RGB: "#ffffff",
    SPLAT_MIDDLE_COLOR_RGB: "#ffffff",
    SPLAT_BOTTOM_COLOR_RGB: "#ffffff",
  },
  styleCosmetic: {
    COSMETIC_POD_ID_NAME: "CustomizableCosmeticPod",
    COSMETIC_POD_POSITION: "103.6, 12.3, -136.7",
    COSMETIC_POD_PARENT: "zoneRANCH/cellRanch_Entrance/Sector",
    COSMETIC_POD_ROTATION: "0, 0, 0",
  },
};
