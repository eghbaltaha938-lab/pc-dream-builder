import { HARDWARE } from '../data/hardware';
import { CATEGORIES } from '../lib/categories';

let errors = 0;
const ids = new Set<string>();
for (const item of HARDWARE) {
  if (ids.has(item.id)) { console.error('duplicate id', item.id); errors++; }
  ids.add(item.id);
  if (!item.isSample) { console.error('non-sample record requires a verified source:', item.id); errors++; }
  const cat = CATEGORIES.find((c) => c.id === item.category);
  if (!cat) { console.error('unknown category', item.id); errors++; continue; }
  for (const f of cat.fields) if (!(f.key in item.specs)) { console.error(`${item.id}: missing field "${f.key}"`); errors++; }
  for (const k of Object.keys(item.specs)) if (!cat.fields.some((f) => f.key === k)) { console.error(`${item.id}: unknown field "${k}"`); errors++; }
}
for (const c of CATEGORIES) if (!HARDWARE.some((h) => h.category === c.id)) { console.error('empty category', c.id); errors++; }
console.log(errors ? `FAILED (${errors} errors)` : `OK: ${HARDWARE.length} records, ${CATEGORIES.length} categories`);
process.exit(errors ? 1 : 0);
