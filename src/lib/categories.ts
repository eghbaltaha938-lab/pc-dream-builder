import type { CategoryMeta, CategoryId } from '../types/hardware';

export const CATEGORIES: CategoryMeta[] = [
  { id: 'cpu', slug: 'cpus', title: 'پردازنده (CPU)', icon: 'Cpu',
    description: 'مغز سیستم؛ سوکت، تعداد هسته و نخ، کلاک و حافظهٔ پشتیبانی‌شده.',
    fields: [
      { key: 'socket', label: 'سوکت' }, { key: 'cores', label: 'تعداد هسته' }, { key: 'threads', label: 'تعداد نخ' },
      { key: 'baseClock', label: 'کلاک پایه', unit: 'GHz' }, { key: 'boostClock', label: 'کلاک بوست', unit: 'GHz' },
      { key: 'cache', label: 'کش', unit: 'MB' }, { key: 'tdp', label: 'TDP', unit: 'W' },
      { key: 'memory', label: 'حافظهٔ پشتیبانی‌شده' }, { key: 'pcie', label: 'PCIe' }, { key: 'igpu', label: 'گرافیک مجتمع' },
    ] },
  { id: 'gpu', slug: 'gpus', title: 'کارت گرافیک (GPU)', icon: 'MonitorPlay',
    description: 'معماری، حافظهٔ تصویری، باس حافظه، توان مصرفی و ابعاد فیزیکی.',
    fields: [
      { key: 'architecture', label: 'معماری' }, { key: 'vram', label: 'ظرفیت VRAM', unit: 'GB' }, { key: 'memoryType', label: 'نوع حافظه' },
      { key: 'busWidth', label: 'باس حافظه', unit: 'bit' }, { key: 'cores', label: 'تعداد هستهٔ پردازشی' },
      { key: 'powerDraw', label: 'توان مصرفی', unit: 'W' }, { key: 'lengthMm', label: 'طول', unit: 'mm' },
      { key: 'slotWidth', label: 'ضخامت (اسلات)' }, { key: 'pcie', label: 'رابط PCIe' },
    ] },
  { id: 'motherboard', slug: 'motherboards', title: 'مادربرد', icon: 'CircuitBoard',
    description: 'سوکت، چیپست، فرم‌فکتور و تعداد درگاه‌ها و اسلات‌ها.',
    fields: [
      { key: 'socket', label: 'سوکت' }, { key: 'chipset', label: 'چیپست' }, { key: 'formFactor', label: 'فرم‌فکتور' },
      { key: 'cpuFamilies', label: 'خانوادهٔ CPU پشتیبانی‌شده' }, { key: 'ramType', label: 'نوع RAM' },
      { key: 'maxRam', label: 'حداکثر RAM', unit: 'GB' }, { key: 'ramSlots', label: 'اسلات RAM' },
      { key: 'pcieSlots', label: 'اسلات PCIe' }, { key: 'm2Slots', label: 'اسلات M.2' }, { key: 'sataPorts', label: 'درگاه SATA' },
    ] },
  { id: 'ram', slug: 'ram', title: 'حافظهٔ رم (RAM)', icon: 'MemoryStick',
    description: 'نسل DDR، ظرفیت، فرکانس، تأخیر و تعداد ماژول.',
    fields: [
      { key: 'ddr', label: 'نسل DDR' }, { key: 'capacity', label: 'ظرفیت کل', unit: 'GB' },
      { key: 'frequency', label: 'فرکانس', unit: 'MT/s' }, { key: 'latency', label: 'تأخیر (CL)' }, { key: 'modules', label: 'تعداد ماژول' },
    ] },
  { id: 'ssd', slug: 'ssds', title: 'حافظهٔ SSD', icon: 'HardDrive',
    description: 'نوع، ظرفیت، رابط و سرعت خواندن و نوشتن ترتیبی.',
    fields: [
      { key: 'type', label: 'نوع' }, { key: 'capacity', label: 'ظرفیت', unit: 'GB' }, { key: 'interface', label: 'رابط' },
      { key: 'seqRead', label: 'سرعت خواندن ترتیبی', unit: 'MB/s' }, { key: 'seqWrite', label: 'سرعت نوشتن ترتیبی', unit: 'MB/s' },
    ] },
  { id: 'hdd', slug: 'hdds', title: 'هارد دیسک (HDD)', icon: 'Database',
    description: 'ذخیره‌سازی مکانیکی با ظرفیت بالا؛ رابط و سرعت ترتیبی.',
    fields: [
      { key: 'type', label: 'نوع' }, { key: 'capacity', label: 'ظرفیت', unit: 'GB' }, { key: 'interface', label: 'رابط' },
      { key: 'seqRead', label: 'سرعت خواندن ترتیبی', unit: 'MB/s' }, { key: 'seqWrite', label: 'سرعت نوشتن ترتیبی', unit: 'MB/s' },
    ] },
  { id: 'psu', slug: 'psus', title: 'منبع تغذیه (PSU)', icon: 'Zap',
    description: 'توان، گواهی بازدهی، فرم‌فکتور و کانکتورهای موجود.',
    fields: [
      { key: 'wattage', label: 'توان', unit: 'W' }, { key: 'efficiency', label: 'گواهی بازدهی' },
      { key: 'formFactor', label: 'فرم‌فکتور' }, { key: 'connectors', label: 'کانکتورها' },
    ] },
  { id: 'cooler', slug: 'coolers', title: 'خنک‌کنندهٔ CPU', icon: 'Fan',
    description: 'نوع خنک‌کننده، سوکت‌های پشتیبانی‌شده، ابعاد و ظرفیت خنک‌سازی.',
    fields: [
      { key: 'type', label: 'نوع' }, { key: 'sockets', label: 'سوکت‌های پشتیبانی‌شده' },
      { key: 'heightMm', label: 'ارتفاع / ضخامت', unit: 'mm' }, { key: 'radiatorMm', label: 'اندازهٔ رادیاتور', unit: 'mm' },
      { key: 'capacityW', label: 'ظرفیت خنک‌سازی', unit: 'W' },
    ] },
  { id: 'case', slug: 'cases', title: 'کیس', icon: 'Box',
    description: 'فرم‌فکتور، مادربردهای پشتیبانی‌شده، حداکثر طول GPU و ارتفاع کولر.',
    fields: [
      { key: 'formFactor', label: 'فرم‌فکتور' }, { key: 'motherboards', label: 'مادربردهای پشتیبانی‌شده' },
      { key: 'maxGpuMm', label: 'حداکثر طول GPU', unit: 'mm' }, { key: 'maxCoolerMm', label: 'حداکثر ارتفاع کولر', unit: 'mm' },
      { key: 'radiators', label: 'پشتیبانی رادیاتور' },
    ] },
];

export const getCategoryBySlug = (slug?: string) => CATEGORIES.find((c) => c.slug === slug);
export const getCategory = (id: CategoryId) => CATEGORIES.find((c) => c.id === id)!;
