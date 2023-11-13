// import the schema from the json file and export it
import CustomizableSlimes from './CustomizableSlimes.json'
import CustomizableSlimesExtra from './CustomizableSlimesExtra.json'
import { Resolver } from "@stoplight/json-ref-resolver";

const resolver = new Resolver();

const resolvedCustomisableSlimes = await resolver.resolve(CustomizableSlimes);
const customisableSlimesResult = resolvedCustomisableSlimes.result;

const resolvedCustomisableSlimesExtra = await resolver.resolve(CustomizableSlimesExtra);
const customisableSlimesExtraResult = resolvedCustomisableSlimesExtra.result;

console.log(customisableSlimesResult)

export const mods = {
  customisableSlimes: customisableSlimesResult,
  customisableSlimesExtra: customisableSlimesExtraResult
}