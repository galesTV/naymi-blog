import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { instagramType } from "./instagram";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, instagramType],
}
