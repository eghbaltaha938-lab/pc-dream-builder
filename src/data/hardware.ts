import type { HardwareItem } from '../types/hardware';

const BASE_URL = import.meta.env.BASE_URL;

const image = (path: string) => `${BASE_URL}${path}`;

/**
 * Sample records are fictional and must not be treated as real products.
 * Real CPU records are based on manufacturer specifications.
 * Unknown values must remain null.
 */

export const HARDWARE: HardwareItem[] = [
  // =========================
  // CPU
  // =========================

  {
    id: 'amd-ryzen-5-7600',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 5 7600',
    image: image('images/cpu/ryzen-5-7600.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 6,
      threads: 12,
      baseClock: '3.8 GHz',
      boostClock: '5.1 GHz',
      tdp: 65,
      architecture: 'Zen 4',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-5-7600x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 5 7600X',
    image: image('images/cpu/ryzen-5-7600x.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 6,
      threads: 12,
      baseClock: '4.7 GHz',
      boostClock: '5.3 GHz',
      tdp: 105,
      architecture: 'Zen 4',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-7-7700',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 7 7700',
    image: image('images/cpu/ryzen-7-7700.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 8,
      threads: 16,
      baseClock: '3.8 GHz',
      boostClock: '5.3 GHz',
      tdp: 65,
      architecture: 'Zen 4',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-7-7800x3d',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 7 7800X3D',
    image: image('images/cpu/ryzen-7-7800x3d.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 8,
      threads: 16,
      baseClock: '4.2 GHz',
      boostClock: '5.0 GHz',
      tdp: 120,
      architecture: 'Zen 4 with 3D V-Cache',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-5-9600x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 5 9600X',
    image: image('images/cpu/ryzen-5-9600x.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 6,
      threads: 12,
      baseClock: '3.9 GHz',
      boostClock: '5.4 GHz',
      tdp: 65,
      architecture: 'Zen 5',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-7-9700x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 7 9700X',
    image: image('images/cpu/ryzen-7-9700x.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 8,
      threads: 16,
      baseClock: '3.8 GHz',
      boostClock: '5.5 GHz',
      tdp: 65,
      architecture: 'Zen 5',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-7-9800x3d',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 7 9800X3D',
    image: image('images/cpu/ryzen-7-9800x3d.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 8,
      threads: 16,
      baseClock: '4.7 GHz',
      boostClock: '5.2 GHz',
      tdp: 120,
      architecture: 'Zen 5 with 3D V-Cache',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-9-9900x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 9 9900X',
    image: image('images/cpu/ryzen-9-9900x.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 12,
      threads: 24,
      baseClock: '4.4 GHz',
      boostClock: '5.6 GHz',
      tdp: 120,
      architecture: 'Zen 5',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-9-9950x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 9 9950X',
    image: image('images/cpu/ryzen-9-9950x.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 16,
      threads: 32,
      baseClock: '4.3 GHz',
      boostClock: '5.7 GHz',
      tdp: 170,
      architecture: 'Zen 5',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'intel-core-i5-12400f',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i5-12400F',
    image: image('images/cpu/core-i5-12400f.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 6,
      threads: 12,
      baseClock: '2.5 GHz',
      boostClock: '4.4 GHz',
      tdp: 65,
      architecture: 'Alder Lake',
      memoryType: 'DDR4 / DDR5',
    },
  },

  {
    id: 'intel-core-i5-13400f',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i5-13400F',
    image: image('images/cpu/core-i5-13400f.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 10,
      threads: 16,
      baseClock: '2.5 GHz',
      boostClock: '4.6 GHz',
      tdp: 65,
      architecture: 'Raptor Lake',
      memoryType: 'DDR4 / DDR5',
    },
  },

  {
    id: 'intel-core-i5-14400f',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i5-14400F',
    image: image('images/cpu/core-i5-14400f.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 10,
      threads: 16,
      baseClock: '2.5 GHz',
      boostClock: '4.7 GHz',
      tdp: 65,
      architecture: 'Raptor Lake Refresh',
      memoryType: 'DDR4 / DDR5',
    },
  },

  {
    id: 'intel-core-i5-14600k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i5-14600K',
    image: image('images/cpu/core-i5-14600k.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 14,
      threads: 20,
      baseClock: '3.5 GHz',
      boostClock: '5.3 GHz',
      tdp: 125,
      architecture: 'Raptor Lake Refresh',
      memoryType: 'DDR4 / DDR5',
    },
  },

  {
    id: 'intel-core-i7-12700k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i7-12700K',
    image: image('images/cpu/core-i7-12700k.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 12,
      threads: 20,
      baseClock: '3.6 GHz',
      boostClock: '5.0 GHz',
      tdp: 125,
      architecture: 'Alder Lake',
      memoryType: 'DDR4 / DDR5',
    },
  },

  {
    id: 'intel-core-i7-14700k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i7-14700K',
    image: image('images/cpu/core-i7-14700k.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 20,
      threads: 28,
      baseClock: '3.4 GHz',
      boostClock: '5.6 GHz',
      tdp: 125,
      architecture: 'Raptor Lake Refresh',
      memoryType: 'DDR4 / DDR5',
    },
  },
];