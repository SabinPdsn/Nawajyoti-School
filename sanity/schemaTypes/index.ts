import { type SchemaTypeDefinition } from 'sanity'
import gallery from './gallery'
import notice from './notice'
import contact from './contact'
import about from './about'
import staff from './staff'
import academics from './academics'
import downloads from './downloads'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, notice, contact, about, staff, academics, downloads],
}
