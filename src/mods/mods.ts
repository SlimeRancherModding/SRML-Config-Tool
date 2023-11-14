import { Resolver } from "@stoplight/json-ref-resolver";

// import the schema from the json file and export it
import CustomizableSlimes from './CustomizableSlimes.json'
import CustomizableSlimesExtra from './CustomizableSlimesExtra.json'
import MaterialSlimes from './MaterialSlimes.json'
import ColorfulSlimes from './ColorfulSlimes.json'
import JuModPack from './JuModPack.json'

const resolver = new Resolver();

const resolvedCustomisableSlimes = await resolver.resolve(CustomizableSlimes);
const customisableSlimesResult = resolvedCustomisableSlimes.result;

const resolvedCustomisableSlimesExtra = await resolver.resolve(CustomizableSlimesExtra);
const customisableSlimesExtraResult = resolvedCustomisableSlimesExtra.result;

const resolvedMaterialSlimes = await resolver.resolve(MaterialSlimes);
const materialSlimesResult = resolvedMaterialSlimes.result;

const resolvedColorfulSlimes = await resolver.resolve(ColorfulSlimes);
const colorfulSlimesResult = resolvedColorfulSlimes.result;

const resolvedJuModPack = await resolver.resolve(JuModPack);
const juModPackResult = resolvedJuModPack.result;


export const mods = {
  CustomisableSlimes: customisableSlimesResult,
  CustomisableSlimesExtra: customisableSlimesExtraResult,
  MaterialSlimes: materialSlimesResult,
  ColorfulSlimes: colorfulSlimesResult,
  JuModPack: juModPackResult
}