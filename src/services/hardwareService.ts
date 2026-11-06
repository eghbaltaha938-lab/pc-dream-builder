import { HARDWARE } from '../data/hardware';
import type { CategoryId, HardwareItem } from '../types/hardware';

/**
 * Data-access boundary. Phase 1 reads local sample data; Phase 4 swaps the body of these
 * functions for fetch() calls to the REST API (VITE_API_BASE_URL) without touching the UI.
 */
export async function listHardware(category: CategoryId): Promise<HardwareItem[]> {
  await new Promise((r) => setTimeout(r, 250)); // simulates latency so loading states are exercised
  return HARDWARE.filter((h) => h.category === category);
}

export async function countByCategory(): Promise<Record<CategoryId, number>> {
  const out = {} as Record<CategoryId, number>;
  for (const h of HARDWARE) out[h.category] = (out[h.category] ?? 0) + 1;
  return out;
}
