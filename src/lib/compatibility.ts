
import type { CategoryId, HardwareItem } from '../types/hardware';

export type CompatibilityStatus =
  | 'compatible'
  | 'incompatible'
  | 'unknown';

export interface CompatibilityIssue {
  status: CompatibilityStatus;
  title: string;
  message: string;
}

export type SelectedParts = Partial<
  Record<CategoryId, HardwareItem>
>;

function includesValue(
  value: unknown,
  expected: string
): boolean | null {
  if (typeof value === 'string') {
    return value === expected;
  }

  if (Array.isArray(value) && value.every(
    (item) => typeof item === 'string'
  )) {
    return value.includes(expected);
  }

  return null;
}

export function checkCompatibility(
  parts: SelectedParts
): CompatibilityIssue[] {
  const issues: CompatibilityIssue[] = [];

  const cpu = parts.cpu;
  const gpu = parts.gpu;
  const motherboard = parts.motherboard;
  const ram = parts.ram;
  const psu = parts.psu;
  const cooler = parts.cooler;
  const pcCase = parts.case;
  const ssd = parts.ssd;
  const hdd = parts.hdd;

  // CPU and motherboard: socket
  if (cpu && motherboard) {
    const cpuSocket = cpu.specs.socket;
    const boardSocket = motherboard.specs.socket;

    if (
      typeof cpuSocket !== 'string' ||
      typeof boardSocket !== 'string'
    ) {
      issues.push({
        status: 'unknown',
        title: 'سوکت پردازنده',
        message: 'اطلاعات سوکت کامل نیست.',
      });
    } else {
      const compatible = cpuSocket === boardSocket;

      issues.push({
        status: compatible ? 'compatible' : 'incompatible',
        title: 'سوکت پردازنده',
        message: compatible
          ? 'سوکت پردازنده و مادربرد مطابقت دارند.'
          : 'سوکت پردازنده با مادربرد سازگار نیست.',
      });
    }

    // CPU memory support and motherboard RAM type
    const cpuMemory = cpu.specs.memory;
    const boardMemory = motherboard.specs.ramType;

    if (typeof boardMemory !== 'string') {
      issues.push({
        status: 'unknown',
        title: 'پشتیبانی حافظه پردازنده',
        message: 'نوع رم مادربرد مشخص نیست.',
      });
    } else {
      const memoryResult = includesValue(
        cpuMemory,
        boardMemory
      );

      issues.push({
        status: memoryResult === null
          ? 'unknown'
          : memoryResult
            ? 'compatible'
            : 'incompatible',
        title: 'پشتیبانی حافظه پردازنده',
        message: memoryResult === null
          ? 'اطلاعات حافظه پردازنده کامل نیست.'
          : memoryResult
            ? `پردازنده از ${boardMemory} پشتیبانی می‌کند.`
            : `پردازنده از ${boardMemory} پشتیبانی نمی‌کند.`,
      });
    }
  }

  // RAM and motherboard
  if (ram && motherboard) {
    const ramType = ram.specs.ddr;
    const boardType = motherboard.specs.ramType;

    if (
      typeof ramType === 'string' &&
      typeof boardType === 'string'
    ) {
      const compatible = ramType === boardType;

      issues.push({
        status: compatible ? 'compatible' : 'incompatible',
        title: 'نوع رم',
        message: compatible
          ? 'نوع رم با مادربرد سازگار است.'
          : 'نوع رم با مادربرد سازگار نیست.',
      });
    } else {
      issues.push({
        status: 'unknown',
        title: 'نوع رم',
        message: 'اطلاعات کافی برای بررسی وجود ندارد.',
      });
    }

    // RAM capacity
    const capacity = ram.specs.capacity;
    const maxRam = motherboard.specs.maxRam;

    if (
      typeof capacity === 'number' &&
      typeof maxRam === 'number'
    ) {
      const compatible = capacity <= maxRam;

      issues.push({
        status: compatible ? 'compatible' : 'incompatible',
        title: 'ظرفیت رم',
        message: compatible
          ? 'ظرفیت رم در محدوده پشتیبانی مادربرد است.'
          : 'ظرفیت رم بیشتر از حداکثر ظرفیت مادربرد است.',
      });
    } else {
      issues.push({
        status: 'unknown',
        title: 'ظرفیت رم',
        message: 'اطلاعات ظرفیت کامل نیست.',
      });
    }

    // RAM module count and motherboard slots
    const modules = ram.specs.modules;
    const slots = motherboard.specs.ramSlots;

    if (
      typeof modules === 'number' &&
      typeof slots === 'number'
    ) {
      const compatible = modules <= slots;

      issues.push({
        status: compatible ? 'compatible' : 'incompatible',
        title: 'تعداد ماژول‌های رم',
        message: compatible
          ? 'تعداد ماژول‌های رم از تعداد اسلات‌های مادربرد بیشتر نیست.'
          : 'تعداد ماژول‌های رم از تعداد اسلات‌های مادربرد بیشتر است.',
      });
    } else {
      issues.push({
        status: 'unknown',
        title: 'تعداد اسلات رم',
        message: 'اطلاعات تعداد ماژول‌ها یا اسلات‌ها کامل نیست.',
      });
    }
  }

  // Motherboard and case
  if (motherboard && pcCase) {
    const supported = pcCase.specs.motherboards;
    const formFactor = motherboard.specs.formFactor;

    if (
      Array.isArray(supported) &&
      supported.every((item) => typeof item === 'string') &&
      typeof formFactor === 'string'
    ) {
      const compatible = supported.includes(formFactor);

      issues.push({
        status: compatible ? 'compatible' : 'incompatible',
        title: 'ابعاد مادربرد و کیس',
        message: compatible
          ? 'کیس از ابعاد مادربرد پشتیبانی می‌کند.'
          : 'کیس از ابعاد این مادربرد پشتیبانی نمی‌کند.',
      });
    } else {
      issues.push({
        status: 'unknown',
        title: 'ابعاد مادربرد و کیس',
        message: 'اطلاعات ابعاد کامل نیست.',
      });
    }
  }

  // GPU and case
  if (gpu && pcCase) {
    const gpuLength = gpu.specs.lengthMm;
    const maxLength = pcCase.specs.maxGpuMm;

    if (
      typeof gpuLength === 'number' &&
      typeof maxLength === 'number'
    ) {
      const compatible = gpuLength <= maxLength;

      issues.push({
        status: compatible ? 'compatible' : 'incompatible',
        title: 'طول کارت گرافیک',
        message: compatible
          ? 'طول کارت گرافیک در محدوده مجاز کیس است.'
          : 'کارت گرافیک از فضای مجاز کیس بلندتر است.',
      });
    } else {
      issues.push({
        status: 'unknown',
        title: 'طول کارت گرافیک',
        message: 'اطلاعات اندازه کامل نیست.',
      });
    }
  }

  // CPU and cooler socket
  if (cpu && cooler) {
    const socket = cpu.specs.socket;
    const sockets = cooler.specs.sockets;

    if (
      typeof socket === 'string' &&
      Array.isArray(sockets) &&
      sockets.every((item) => typeof item === 'string')
    ) {
      const compatible = sockets.includes(socket);

      issues.push({
        status: compatible ? 'compatible' : 'incompatible',
        title: 'سوکت خنک‌کننده',
        message: compatible
          ? 'خنک‌کننده از سوکت پردازنده پشتیبانی می‌کند.'
          : 'خنک‌کننده با سوکت پردازنده سازگار نیست.',
      });
    } else {
      issues.push({
        status: 'unknown',
        title: 'سوکت خنک‌کننده',
        message: 'اطلاعات کافی برای بررسی وجود ندارد.',
      });
    }
  }

  // Cooler and case clearance
  if (cooler && pcCase) {
    const height = cooler.specs.heightMm;
    const maxHeight = pcCase.specs.maxCoolerMm;

    if (
      typeof height === 'number' &&
      typeof maxHeight === 'number'
    ) {
      const compatible = height <= maxHeight;

      issues.push({
        status: compatible ? 'compatible' : 'incompatible',
        title: 'ارتفاع خنک‌کننده',
        message: compatible
          ? 'ارتفاع خنک‌کننده در محدوده مجاز کیس است.'
          : 'خنک‌کننده از فضای مجاز کیس بلندتر است.',
      });
    } else {
      issues.push({
        status: 'unknown',
        title: 'ارتفاع خنک‌کننده',
        message: 'اطلاعات ارتفاع خنک‌کننده یا کیس موجود نیست.',
      });
    }
  }

  // PSU estimated power
  if (psu && cpu && gpu) {
    const wattage = psu.specs.wattage;
    const cpuPower = cpu.specs.tdp;
    const gpuPower = gpu.specs.powerDraw;

    if (
      typeof wattage === 'number' &&
      typeof cpuPower === 'number' &&
      typeof gpuPower === 'number'
    ) {
      const estimatedNeed = cpuPower + gpuPower + 150;
      const compatible = wattage >= estimatedNeed;

      issues.push({
        status: compatible ? 'compatible' : 'incompatible',
        title: 'توان تخمینی پاور',
        message: compatible
          ? `توان پاور از تخمین اولیه ${estimatedNeed} وات بیشتر است.`
          : `توان پاور از تخمین اولیه ${estimatedNeed} وات کمتر است.`,
      });
    } else {
      issues.push({
        status: 'unknown',
        title: 'توان پاور',
        message: 'اطلاعات کافی برای تخمین توان وجود ندارد.',
      });
    }
  }

  // NVMe SSD and M.2 slots
  if (
    ssd &&
    motherboard &&
    ssd.specs.type === 'NVMe'
  ) {
    const slots = motherboard.specs.m2Slots;

    if (typeof slots === 'number') {
      issues.push({
        status: slots > 0 ? 'compatible' : 'incompatible',
        title: 'درگاه M.2',
        message: slots > 0
          ? 'مادربرد دارای درگاه M.2 است.'
          : 'مادربرد درگاه M.2 ندارد.',
      });
    } else {
      issues.push({
        status: 'unknown',
        title: 'درگاه M.2',
        message: 'تعداد درگاه‌های M.2 مشخص نیست.',
      });
    }
  }

  // SATA storage and motherboard ports
  if (motherboard) {
    const sataDrives = [ssd, hdd].filter((drive) => {
      const type = drive?.specs.type;
      const connection = drive?.specs.interface;

      return (
        type === 'SATA' ||
        (
          typeof connection === 'string' &&
          connection.includes('SATA')
        )
      );
    }).length;

    if (sataDrives > 0) {
      const ports = motherboard.specs.sataPorts;

      if (typeof ports === 'number') {
        const compatible = ports >= sataDrives;

        issues.push({
          status: compatible ? 'compatible' : 'incompatible',
          title: 'درگاه‌های SATA',
          message: compatible
            ? 'تعداد درگاه‌های SATA کافی است.'
            : 'تعداد درگاه‌های SATA برای حافظه‌های انتخاب‌شده کافی نیست.',
        });
      } else {
        issues.push({
          status: 'unknown',
          title: 'درگاه‌های SATA',
          message: 'تعداد درگاه‌های SATA مادربرد مشخص نیست.',
        });
      }
    }
  }

  return issues;
}
