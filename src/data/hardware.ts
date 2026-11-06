import type { HardwareItem } from '../types/hardware';

/**
 * Sample records are fictional and must not be treated as real products.
 * Real CPU records are based on manufacturer specifications.
 * Unknown values must remain null.
 */

const s = (
  h: Omit<HardwareItem, 'isSample' | 'manufacturer'> & {
    manufacturer?: string;
  }
): HardwareItem => ({
  manufacturer: 'نمونهٔ آموزشی',
  ...h,
  isSample: true,
});

export const HARDWARE: HardwareItem[] = [
  // =========================
  // AMD Ryzen CPUs
  // =========================
  {
    id: 'cpu-amd-7600',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 5 7600',
    image: '/images/cpu/ryzen-5-7600.webp',
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 6,
      threads: 12,
      baseClock: 3.8,
      boostClock: 5.1,
      cache: 32,
      tdp: 65,
      memory: 'DDR5',
      pcie: '5.0',
      igpu: true,
    },
  },
  {
    id: 'cpu-amd-7600x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 5 7600X',
    image: '/images/cpu/ryzen-5-7600x.webp',
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 6,
      threads: 12,
      baseClock: 4.7,
      boostClock: 5.3,
      cache: 32,
      tdp: 105,
      memory: 'DDR5',
      pcie: '5.0',
      igpu: true,
    },
  },
  {
    id: 'cpu-amd-7700',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 7 7700',
    image: '/images/cpu/ryzen-7-7700.webp',
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 8,
      threads: 16,
      baseClock: 3.8,
      boostClock: 5.3,
      cache: 32,
      tdp: 65,
      memory: 'DDR5',
      pcie: '5.0',
      igpu: true,
    },
  },
  {
    id: 'cpu-amd-7800x3d',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 7 7800X3D',
    image: '/images/cpu/ryzen-7-7800x3d.webp',
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 8,
      threads: 16,
      baseClock: 4.2,
      boostClock: 5.0,
      cache: 96,
      tdp: 120,
      memory: 'DDR5',
      pcie: '5.0',
      igpu: true,
    },
  },
  {
    id: 'cpu-amd-9600x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 5 9600X',
    image: '/images/cpu/ryzen-5-9600x.webp',
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 6,
      threads: 12,
      baseClock: 3.9,
      boostClock: 5.4,
      cache: 32,
      tdp: 65,
      memory: 'DDR5',
      pcie: '5.0',
      igpu: true,
    },
  },
  {
    id: 'cpu-amd-9700x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 7 9700X',
    image: '/images/cpu/ryzen-7-9700x.webp',
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 8,
      threads: 16,
      baseClock: 3.8,
      boostClock: 5.5,
      cache: 32,
      tdp: 65,
      memory: 'DDR5',
      pcie: '5.0',
      igpu: true,
    },
  },
  {
    id: 'cpu-amd-9800x3d',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 7 9800X3D',
    image: '/images/cpu/ryzen-7-9800x3d.webp',
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 8,
      threads: 16,
      baseClock: 4.7,
      boostClock: 5.2,
      cache: 96,
      tdp: 120,
      memory: 'DDR5',
      pcie: '5.0',
      igpu: true,
    },
  },
  {
    id: 'cpu-amd-9900x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 9 9900X',
    image: '/images/cpu/ryzen-9-9900x.webp',
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 12,
      threads: 24,
      baseClock: 4.4,
      boostClock: 5.6,
      cache: 64,
      tdp: 120,
      memory: 'DDR5',
      pcie: '5.0',
      igpu: true,
    },
  },
  {
    id: 'cpu-amd-9950x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 9 9950X',
    image: '/images/cpu/ryzen-9-9950x.webp',
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 16,
      threads: 32,
      baseClock: 4.3,
      boostClock: 5.7,
      cache: 64,
      tdp: 170,
      memory: 'DDR5',
      pcie: '5.0',
      igpu: true,
    },
  },

  // =========================
  // Intel Core CPUs
  // =========================
  {
    id: 'cpu-intel-12400f',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i5-12400F',
    image: '/images/cpu/core-i5-12400f.webp',
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 6,
      threads: 12,
      baseClock: 2.5,
      boostClock: 4.4,
      cache: 18,
      tdp: 65,
      maxTurboPower: 117,
      memory: ['DDR4', 'DDR5'],
      pcie: '5.0',
      igpu: false,
    },
  },
  {
    id: 'cpu-intel-13400f',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i5-13400F',
    image: '/images/cpu/core-i5-13400f.webp',
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 10,
      threads: 16,
      baseClock: 2.5,
      boostClock: 4.6,
      cache: 20,
      tdp: 65,
      maxTurboPower: 148,
      memory: ['DDR4', 'DDR5'],
      pcie: '5.0',
      igpu: false,
    },
  },
  {
    id: 'cpu-intel-14400f',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i5-14400F',
    image: '/images/cpu/core-i5-14400f.webp',
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 10,
      threads: 16,
      baseClock: 2.5,
      boostClock: 4.7,
      cache: 20,
      tdp: 65,
      maxTurboPower: 148,
      memory: ['DDR4', 'DDR5'],
      pcie: '5.0',
      igpu: false,
    },
  },
  {
    id: 'cpu-intel-14600k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i5-14600K',
    image: '/images/cpu/core-i5-14600k.webp',
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 14,
      threads: 20,
      baseClock: 3.5,
      boostClock: 5.3,
      cache: 24,
      tdp: 125,
      maxTurboPower: 181,
      memory: ['DDR4', 'DDR5'],
      pcie: '5.0',
      igpu: true,
    },
  },
  {
    id: 'cpu-intel-12700k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i7-12700K',
    image: '/images/cpu/core-i7-12700k.webp',
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 12,
      threads: 20,
      baseClock: 3.6,
      boostClock: 5.0,
      cache: 25,
      tdp: 125,
      maxTurboPower: 190,
      memory: ['DDR4', 'DDR5'],
      pcie: '5.0',
      igpu: true,
    },
  },
  {
    id: 'cpu-intel-14700k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i7-14700K',
    image: '/images/cpu/core-i7-14700k.webp',
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 20,
      threads: 28,
      baseClock: 3.4,
      boostClock: 5.6,
      cache: 33,
      tdp: 125,
      maxTurboPower: 253,
      memory: ['DDR4', 'DDR5'],
      pcie: '5.0',
      igpu: true,
    },
  },

  // =========================
  // Sample GPUs
  // =========================
  s({
    id: 'gpu-s1',
    category: 'gpu',
    model: 'نمونه GPU-A',
    specs: {
      architecture: 'معماری فرضی ۱',
      vram: 12,
      memoryType: 'GDDR6',
      busWidth: 192,
      cores: null,
      powerDraw: 200,
      lengthMm: 300,
      slotWidth: '2.5',
      pcie: '4.0 x16',
    },
  }),
  s({
    id: 'gpu-s2',
    category: 'gpu',
    model: 'نمونه GPU-B',
    specs: {
      architecture: 'معماری فرضی ۲',
      vram: 16,
      memoryType: 'GDDR6X',
      busWidth: 256,
      cores: null,
      powerDraw: 320,
      lengthMm: 336,
      slotWidth: '3',
      pcie: '4.0 x16',
    },
  }),

  // =========================
  // Sample Motherboards
  // =========================
  s({
    id: 'mb-s1',
    category: 'motherboard',
    model: 'نمونه MB-A (LGA-X)',
    specs: {
      socket: 'LGA-X',
      chipset: 'چیپست فرضی A',
      formFactor: 'ATX',
      cpuFamilies: ['خانوادهٔ فرضی ۱'],
      ramType: 'DDR5',
      maxRam: 128,
      ramSlots: 4,
      pcieSlots: 3,
      m2Slots: 3,
      sataPorts: 4,
    },
  }),
  s({
    id: 'mb-s2',
    category: 'motherboard',
    model: 'نمونه MB-B (PGA-Y)',
    specs: {
      socket: 'PGA-Y',
      chipset: 'چیپست فرضی B',
      formFactor: 'Micro-ATX',
      cpuFamilies: ['خانوادهٔ فرضی ۲'],
      ramType: 'DDR4',
      maxRam: 64,
      ramSlots: 4,
      pcieSlots: 2,
      m2Slots: 2,
      sataPorts: 4,
    },
  }),

  // =========================
  // Sample RAM
  // =========================
  s({
    id: 'ram-s1',
    category: 'ram',
    model: 'نمونه RAM-A',
    specs: {
      ddr: 'DDR5',
      capacity: 32,
      frequency: 6000,
      latency: 30,
      modules: 2,
    },
  }),
  s({
    id: 'ram-s2',
    category: 'ram',
    model: 'نمونه RAM-B',
    specs: {
      ddr: 'DDR4',
      capacity: 16,
      frequency: 3200,
      latency: 16,
      modules: 2,
    },
  }),

  // =========================
  // Sample SSD
  // =========================
  s({
    id: 'ssd-s1',
    category: 'ssd',
    model: 'نمونه SSD-A',
    specs: {
      type: 'NVMe',
      capacity: 1000,
      interface: 'PCIe 4.0 x4 (M.2)',
      seqRead: null,
      seqWrite: null,
    },
  }),
  s({
    id: 'ssd-s2',
    category: 'ssd',
    model: 'نمونه SSD-B',
    specs: {
      type: 'SATA',
      capacity: 500,
      interface: 'SATA III (2.5")',
      seqRead: null,
      seqWrite: null,
    },
  }),

  // =========================
  // Sample HDD
  // =========================
  s({
    id: 'hdd-s1',
    category: 'hdd',
    model: 'نمونه HDD-A',
    specs: {
      type: '3.5" مکانیکی',
      capacity: 4000,
      interface: 'SATA III',
      seqRead: null,
      seqWrite: null,
    },
  }),

  // =========================
  // Sample PSUs
  // =========================
  s({
    id: 'psu-s1',
    category: 'psu',
    model: 'نمونه PSU-A',
    specs: {
      wattage: 750,
      efficiency: '80 PLUS Gold',
      formFactor: 'ATX',
      connectors: [
        '24-pin ATX',
        '8-pin CPU',
        '8-pin PCIe ×3',
        'SATA',
      ],
    },
  }),
  s({
    id: 'psu-s2',
    category: 'psu',
    model: 'نمونه PSU-B',
    specs: {
      wattage: 550,
      efficiency: '80 PLUS Bronze',
      formFactor: 'ATX',
      connectors: [
        '24-pin ATX',
        '8-pin CPU',
        '8-pin PCIe ×2',
        'SATA',
      ],
    },
  }),

  // =========================
  // Sample Coolers
  // =========================
  s({
    id: 'cl-s1',
    category: 'cooler',
    model: 'نمونه Cooler-A (هوایی)',
    specs: {
      type: 'هوایی (برجی)',
      sockets: ['LGA-X', 'PGA-Y'],
      heightMm: 155,
      radiatorMm: null,
      capacityW: null,
    },
  }),
  s({
    id: 'cl-s2',
    category: 'cooler',
    model: 'نمونه Cooler-B (مایع)',
    specs: {
      type: 'مایع AIO',
      sockets: ['LGA-X', 'PGA-Y'],
      heightMm: null,
      radiatorMm: 240,
      capacityW: null,
    },
  }),

  // =========================
  // Sample Cases
  // =========================
  s({
    id: 'case-s1',
    category: 'case',
    model: 'نمونه Case-A (Mid Tower)',
    specs: {
      formFactor: 'Mid Tower',
      motherboards: ['ATX', 'Micro-ATX', 'Mini-ITX'],
      maxGpuMm: 330,
      maxCoolerMm: 165,
      radiators: ['240 mm بالا', '360 mm جلو'],
    },
  }),
  s({
    id: 'case-s2',
    category: 'case',
    model: 'نمونه Case-B (Compact)',
    specs: {
      formFactor: 'Micro-ATX Tower',
      motherboards: ['Micro-ATX', 'Mini-ITX'],
      maxGpuMm: 300,
      maxCoolerMm: 150,
      radiators: ['240 mm جلو'],
    },
  }),
];