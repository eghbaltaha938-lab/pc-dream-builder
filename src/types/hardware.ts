export type CategoryId =
  | 'cpu'
  | 'gpu'
  | 'motherboard'
  | 'ram'
  | 'ssd'
  | 'hdd'
  | 'psu'
  | 'cooler'
  | 'case';

export type SpecValue =
  | string
  | number
  | boolean
  | string[]
  | null;

export interface SpecField {
  key: string;
  label: string;
  unit?: string;
}

export interface CategoryMeta {
  id: CategoryId;
  slug: string;
  title: string;
  description: string;
  icon:
    | 'Cpu'
    | 'MonitorPlay'
    | 'CircuitBoard'
    | 'MemoryStick'
    | 'HardDrive'
    | 'Database'
    | 'Zap'
    | 'Fan'
    | 'Box';
  fields: SpecField[];
}

/** A hardware record. */
export interface HardwareItem {
  id: string;
  category: CategoryId;
  manufacturer: string;
  model: string;

  /** Product image path inside the public folder */
  image?: string;

  /** Product family / generation */
  series?: string;

  /** true = illustrative sample record */
  isSample: boolean;

  /** null spec = unknown */
  specs: Record<string, SpecValue>;
}