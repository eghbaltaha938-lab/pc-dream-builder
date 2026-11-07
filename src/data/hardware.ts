import type { HardwareItem } from '../types/hardware';

const BASE_URL = import.meta.env.BASE_URL;

const image = (path: string) => `${BASE_URL}${path}`;

/**
 * Sample records are fictional and must not be treated as real products.
 * Real CPU records are based on manufacturer specifications.
 * Unknown values must remain null.
 */


// ==========================================
// MOTHERBOARD CATALOG
// Photos will be added after the catalog and filters are complete.
// ==========================================

const createMotherboard = (
  id: string,
  manufacturer: string,
  model: string,
  socket: string,
  chipset: string,
  memoryType: string,
  formFactor: string
): HardwareItem => ({
  id,
  category: 'motherboard',
  manufacturer,
  model,
  isSample: false,
  series: chipset,
  specs: {
    socket,
    chipset,
    memoryType,
    formFactor,
  },
});

const MOTHERBOARD_DATA: HardwareItem[] = [
  createMotherboard('asus-prime-b450m-a-ii', 'ASUS', 'PRIME B450M-A II', 'AM4', 'B450', 'DDR4', 'Micro-ATX'),
  createMotherboard('asus-tuf-b450-plus-gaming', 'ASUS', 'TUF B450-PLUS GAMING', 'AM4', 'B450', 'DDR4', 'ATX'),
  createMotherboard('asus-rog-strix-b450-f-gaming-ii', 'ASUS', 'ROG STRIX B450-F GAMING II', 'AM4', 'B450', 'DDR4', 'ATX'),
  createMotherboard('asus-prime-b550m-a-wifi-ii', 'ASUS', 'PRIME B550M-A WIFI II', 'AM4', 'B550', 'DDR4', 'Micro-ATX'),
  createMotherboard('asus-tuf-gaming-x570-plus-wifi', 'ASUS', 'TUF GAMING X570-PLUS (WI-FI)', 'AM4', 'X570', 'DDR4', 'ATX'),
  createMotherboard('msi-b450-tomahawk-max-ii', 'MSI', 'B450 TOMAHAWK MAX II', 'AM4', 'B450', 'DDR4', 'ATX'),
  createMotherboard('msi-b450m-pro-vdh-max', 'MSI', 'B450M PRO-VDH MAX', 'AM4', 'B450', 'DDR4', 'Micro-ATX'),
  createMotherboard('msi-b550m-pro-vdh-wifi', 'MSI', 'B550M PRO-VDH WIFI', 'AM4', 'B550', 'DDR4', 'Micro-ATX'),
  createMotherboard('msi-mag-b550-tomahawk', 'MSI', 'MAG B550 TOMAHAWK', 'AM4', 'B550', 'DDR4', 'ATX'),
  createMotherboard('msi-mag-x570-tomahawk-wifi', 'MSI', 'MAG X570 TOMAHAWK WIFI', 'AM4', 'X570', 'DDR4', 'ATX'),
  createMotherboard('gigabyte-b450-aorus-elite-v2', 'Gigabyte', 'B450 AORUS ELITE V2', 'AM4', 'B450', 'DDR4', 'ATX'),
  createMotherboard('gigabyte-b450m-ds3h-v2', 'Gigabyte', 'B450M DS3H V2', 'AM4', 'B450', 'DDR4', 'Micro-ATX'),
  createMotherboard('gigabyte-b550-aorus-elite-ax-v2', 'Gigabyte', 'B550 AORUS ELITE AX V2', 'AM4', 'B550', 'DDR4', 'ATX'),
  createMotherboard('gigabyte-b550m-ds3h', 'Gigabyte', 'B550M DS3H', 'AM4', 'B550', 'DDR4', 'Micro-ATX'),
  createMotherboard('gigabyte-x570-aorus-elite', 'Gigabyte', 'X570 AORUS ELITE', 'AM4', 'X570', 'DDR4', 'ATX'),
  createMotherboard('asrock-b450m-pro4-r2', 'ASRock', 'B450M Pro4 R2.0', 'AM4', 'B450', 'DDR4', 'Micro-ATX'),
  createMotherboard('asrock-b450-steel-legend', 'ASRock', 'B450 Steel Legend', 'AM4', 'B450', 'DDR4', 'ATX'),
  createMotherboard('asrock-b550m-pro4', 'ASRock', 'B550M Pro4', 'AM4', 'B550', 'DDR4', 'Micro-ATX'),
  createMotherboard('asrock-b550-steel-legend', 'ASRock', 'B550 Steel Legend', 'AM4', 'B550', 'DDR4', 'ATX'),
  createMotherboard('asrock-x570-taichi', 'ASRock', 'X570 Taichi', 'AM4', 'X570', 'DDR4', 'ATX'),
  createMotherboard('asus-prime-b650-plus', 'ASUS', 'PRIME B650-PLUS', 'AM5', 'B650', 'DDR5', 'ATX'),
  createMotherboard('asus-tuf-gaming-b650-plus-wifi', 'ASUS', 'TUF GAMING B650-PLUS WIFI', 'AM5', 'B650', 'DDR5', 'ATX'),
  createMotherboard('asus-rog-strix-b650e-f-gaming-wifi', 'ASUS', 'ROG STRIX B650E-F GAMING WIFI', 'AM5', 'B650E', 'DDR5', 'ATX'),
  createMotherboard('asus-rog-crosshair-x670e-hero', 'ASUS', 'ROG CROSSHAIR X670E HERO', 'AM5', 'X670E', 'DDR5', 'ATX'),
  createMotherboard('asus-tuf-gaming-x870-plus-wifi', 'ASUS', 'TUF GAMING X870-PLUS WIFI', 'AM5', 'X870', 'DDR5', 'ATX'),
  createMotherboard('msi-pro-b650m-a-wifi', 'MSI', 'PRO B650M-A WIFI', 'AM5', 'B650', 'DDR5', 'Micro-ATX'),
  createMotherboard('msi-mag-b650-tomahawk-wifi', 'MSI', 'MAG B650 TOMAHAWK WIFI', 'AM5', 'B650', 'DDR5', 'ATX'),
  createMotherboard('msi-mpg-x670e-carbon-wifi', 'MSI', 'MPG X670E CARBON WIFI', 'AM5', 'X670E', 'DDR5', 'ATX'),
  createMotherboard('msi-mag-x870-tomahawk-wifi', 'MSI', 'MAG X870 TOMAHAWK WIFI', 'AM5', 'X870', 'DDR5', 'ATX'),
  createMotherboard('msi-mpg-b850-edge-ti-wifi', 'MSI', 'MPG B850 EDGE TI WIFI', 'AM5', 'B850', 'DDR5', 'ATX'),
  createMotherboard('gigabyte-b650-aorus-elite-ax', 'Gigabyte', 'B650 AORUS ELITE AX', 'AM5', 'B650', 'DDR5', 'ATX'),
  createMotherboard('gigabyte-b650m-ds3h', 'Gigabyte', 'B650M DS3H', 'AM5', 'B650', 'DDR5', 'Micro-ATX'),
  createMotherboard('gigabyte-x670e-aorus-master', 'Gigabyte', 'X670E AORUS MASTER', 'AM5', 'X670E', 'DDR5', 'E-ATX'),
  createMotherboard('gigabyte-x870-aorus-elite-wifi7', 'Gigabyte', 'X870 AORUS ELITE WIFI7', 'AM5', 'X870', 'DDR5', 'ATX'),
  createMotherboard('gigabyte-b850-gaming-x-wifi6e', 'Gigabyte', 'B850 GAMING X WIFI6E', 'AM5', 'B850', 'DDR5', 'ATX'),
  createMotherboard('asrock-b650m-pro-rs', 'ASRock', 'B650M Pro RS', 'AM5', 'B650', 'DDR5', 'Micro-ATX'),
  createMotherboard('asrock-b650e-steel-legend-wifi', 'ASRock', 'B650E Steel Legend WiFi', 'AM5', 'B650E', 'DDR5', 'ATX'),
  createMotherboard('asrock-x670e-taichi', 'ASRock', 'X670E Taichi', 'AM5', 'X670E', 'DDR5', 'E-ATX'),
  createMotherboard('asrock-x870-steel-legend-wifi', 'ASRock', 'X870 Steel Legend WiFi', 'AM5', 'X870', 'DDR5', 'ATX'),
  createMotherboard('asrock-b850m-pro-rs-wifi', 'ASRock', 'B850M Pro RS WiFi', 'AM5', 'B850', 'DDR5', 'Micro-ATX'),
  createMotherboard('asus-prime-z490-a', 'ASUS', 'PRIME Z490-A', 'LGA1200', 'Z490', 'DDR4', 'ATX'),
  createMotherboard('asus-tuf-gaming-z490-plus', 'ASUS', 'TUF GAMING Z490-PLUS', 'LGA1200', 'Z490', 'DDR4', 'ATX'),
  createMotherboard('asus-prime-b560m-a', 'ASUS', 'PRIME B560M-A', 'LGA1200', 'B560', 'DDR4', 'Micro-ATX'),
  createMotherboard('msi-mag-z490-tomahawk', 'MSI', 'MAG Z490 TOMAHAWK', 'LGA1200', 'Z490', 'DDR4', 'ATX'),
  createMotherboard('msi-b560m-pro-vdh-wifi', 'MSI', 'B560M PRO-VDH WIFI', 'LGA1200', 'B560', 'DDR4', 'Micro-ATX'),
  createMotherboard('gigabyte-z490-aorus-elite-ac', 'Gigabyte', 'Z490 AORUS ELITE AC', 'LGA1200', 'Z490', 'DDR4', 'ATX'),
  createMotherboard('gigabyte-b560m-aorus-pro', 'Gigabyte', 'B560M AORUS PRO', 'LGA1200', 'B560', 'DDR4', 'Micro-ATX'),
  createMotherboard('asrock-z490-steel-legend', 'ASRock', 'Z490 Steel Legend', 'LGA1200', 'Z490', 'DDR4', 'ATX'),
  createMotherboard('asus-prime-h610m-k-d4', 'ASUS', 'PRIME H610M-K D4', 'LGA1700', 'H610', 'DDR4', 'Micro-ATX'),
  createMotherboard('asus-prime-b660m-a-d4', 'ASUS', 'PRIME B660M-A D4', 'LGA1700', 'B660', 'DDR4', 'Micro-ATX'),
  createMotherboard('asus-tuf-gaming-b660-plus-wifi-d4', 'ASUS', 'TUF GAMING B660-PLUS WIFI D4', 'LGA1700', 'B660', 'DDR4', 'ATX'),
  createMotherboard('asus-rog-strix-z690-a-gaming-wifi-d4', 'ASUS', 'ROG STRIX Z690-A GAMING WIFI D4', 'LGA1700', 'Z690', 'DDR4', 'ATX'),
  createMotherboard('asus-prime-z790-p-wifi', 'ASUS', 'PRIME Z790-P WIFI', 'LGA1700', 'Z790', 'DDR5', 'ATX'),
  createMotherboard('msi-pro-h610m-g-ddr4', 'MSI', 'PRO H610M-G DDR4', 'LGA1700', 'H610', 'DDR4', 'Micro-ATX'),
  createMotherboard('msi-pro-b760m-a-wifi-ddr4', 'MSI', 'PRO B760M-A WIFI DDR4', 'LGA1700', 'B760', 'DDR4', 'Micro-ATX'),
  createMotherboard('msi-mag-b760-tomahawk-wifi', 'MSI', 'MAG B760 TOMAHAWK WIFI', 'LGA1700', 'B760', 'DDR5', 'ATX'),
  createMotherboard('msi-mag-z790-tomahawk-wifi', 'MSI', 'MAG Z790 TOMAHAWK WIFI', 'LGA1700', 'Z790', 'DDR5', 'ATX'),
  createMotherboard('msi-mpg-z790-edge-wifi', 'MSI', 'MPG Z790 EDGE WIFI', 'LGA1700', 'Z790', 'DDR5', 'ATX'),
  createMotherboard('gigabyte-h610m-h-v2-ddr4', 'Gigabyte', 'H610M H V2 DDR4', 'LGA1700', 'H610', 'DDR4', 'Micro-ATX'),
  createMotherboard('gigabyte-b760m-ds3h-ddr4', 'Gigabyte', 'B760M DS3H DDR4', 'LGA1700', 'B760', 'DDR4', 'Micro-ATX'),
  createMotherboard('gigabyte-b760-aorus-elite-ax', 'Gigabyte', 'B760 AORUS ELITE AX', 'LGA1700', 'B760', 'DDR5', 'ATX'),
  createMotherboard('gigabyte-z790-aorus-elite-ax', 'Gigabyte', 'Z790 AORUS ELITE AX', 'LGA1700', 'Z790', 'DDR5', 'ATX'),
  createMotherboard('gigabyte-z790-gaming-x-ax', 'Gigabyte', 'Z790 GAMING X AX', 'LGA1700', 'Z790', 'DDR5', 'ATX'),
  createMotherboard('asrock-h610m-hdv-m2', 'ASRock', 'H610M-HDV/M.2', 'LGA1700', 'H610', 'DDR4', 'Micro-ATX'),
  createMotherboard('asrock-b760m-pro-rs-d4', 'ASRock', 'B760M Pro RS/D4', 'LGA1700', 'B760', 'DDR4', 'Micro-ATX'),
  createMotherboard('asrock-b760-steel-legend-wifi', 'ASRock', 'B760 Steel Legend WiFi', 'LGA1700', 'B760', 'DDR5', 'ATX'),
  createMotherboard('asrock-z790-pg-lightning', 'ASRock', 'Z790 PG Lightning', 'LGA1700', 'Z790', 'DDR5', 'ATX'),
  createMotherboard('asrock-z790-taichi-lite', 'ASRock', 'Z790 Taichi Lite', 'LGA1700', 'Z790', 'DDR5', 'E-ATX'),
  createMotherboard('asus-rog-maximus-z890-hero', 'ASUS', 'ROG MAXIMUS Z890 HERO', 'LGA1851', 'Z890', 'DDR5', 'ATX'),
  createMotherboard('asus-rog-strix-z890-e-gaming-wifi', 'ASUS', 'ROG STRIX Z890-E GAMING WIFI', 'LGA1851', 'Z890', 'DDR5', 'ATX'),
  createMotherboard('asus-tuf-gaming-z890-plus-wifi', 'ASUS', 'TUF GAMING Z890-PLUS WIFI', 'LGA1851', 'Z890', 'DDR5', 'ATX'),
  createMotherboard('msi-meg-z890-ace', 'MSI', 'MEG Z890 ACE', 'LGA1851', 'Z890', 'DDR5', 'E-ATX'),
  createMotherboard('msi-mpg-z890-carbon-wifi', 'MSI', 'MPG Z890 CARBON WIFI', 'LGA1851', 'Z890', 'DDR5', 'ATX'),
  createMotherboard('msi-mag-z890-tomahawk-wifi', 'MSI', 'MAG Z890 TOMAHAWK WIFI', 'LGA1851', 'Z890', 'DDR5', 'ATX'),
  createMotherboard('gigabyte-z890-aorus-master', 'Gigabyte', 'Z890 AORUS MASTER', 'LGA1851', 'Z890', 'DDR5', 'E-ATX'),
  createMotherboard('gigabyte-z890-aorus-elite-wifi7', 'Gigabyte', 'Z890 AORUS ELITE WIFI7', 'LGA1851', 'Z890', 'DDR5', 'ATX'),
  createMotherboard('gigabyte-z890-gaming-x-wifi7', 'Gigabyte', 'Z890 GAMING X WIFI7', 'LGA1851', 'Z890', 'DDR5', 'ATX'),
  createMotherboard('asrock-z890-taichi', 'ASRock', 'Z890 Taichi', 'LGA1851', 'Z890', 'DDR5', 'E-ATX'),
  createMotherboard('asrock-z890-steel-legend-wifi', 'ASRock', 'Z890 Steel Legend WiFi', 'LGA1851', 'Z890', 'DDR5', 'ATX'),
  createMotherboard('asrock-z890-pro-rs-wifi', 'ASRock', 'Z890 Pro RS WiFi', 'LGA1851', 'Z890', 'DDR5', 'ATX'),
  createMotherboard('asus-prime-a320m-k', 'ASUS', 'PRIME A320M-K', 'AM4', 'A320', 'DDR4', 'Micro-ATX'),
  createMotherboard('asus-prime-a520m-k', 'ASUS', 'PRIME A520M-K', 'AM4', 'A520', 'DDR4', 'Micro-ATX'),
  createMotherboard('msi-a520m-a-pro', 'MSI', 'A520M-A PRO', 'AM4', 'A520', 'DDR4', 'Micro-ATX'),
  createMotherboard('gigabyte-x470-aorus-ultra-gaming', 'Gigabyte', 'X470 AORUS ULTRA GAMING', 'AM4', 'X470', 'DDR4', 'ATX'),
  createMotherboard('asus-prime-a620m-k', 'ASUS', 'PRIME A620M-K', 'AM5', 'A620', 'DDR5', 'Micro-ATX'),
  createMotherboard('msi-pro-a620m-e', 'MSI', 'PRO A620M-E', 'AM5', 'A620', 'DDR5', 'Micro-ATX'),
  createMotherboard('gigabyte-x670-aorus-elite-ax', 'Gigabyte', 'X670 AORUS ELITE AX', 'AM5', 'X670', 'DDR5', 'ATX'),
  createMotherboard('gigabyte-x870e-aorus-master', 'Gigabyte', 'X870E AORUS MASTER', 'AM5', 'X870E', 'DDR5', 'E-ATX'),
  createMotherboard('asrock-b840-pro-rs-wifi', 'ASRock', 'B840 Pro RS WiFi', 'AM5', 'B840', 'DDR5', 'ATX'),
  createMotherboard('asus-prime-h410m-k', 'ASUS', 'PRIME H410M-K', 'LGA1200', 'H410', 'DDR4', 'Micro-ATX'),
  createMotherboard('msi-b460m-pro-vdh-wifi', 'MSI', 'B460M PRO-VDH WIFI', 'LGA1200', 'B460', 'DDR4', 'Micro-ATX'),
  createMotherboard('asrock-h470-steel-legend', 'ASRock', 'H470 Steel Legend', 'LGA1200', 'H470', 'DDR4', 'ATX'),
  createMotherboard('gigabyte-h510m-h', 'Gigabyte', 'H510M H', 'LGA1200', 'H510', 'DDR4', 'Micro-ATX'),
  createMotherboard('msi-mag-z590-tomahawk-wifi', 'MSI', 'MAG Z590 TOMAHAWK WIFI', 'LGA1200', 'Z590', 'DDR4', 'ATX'),
  createMotherboard('asus-prime-h670-plus-d4', 'ASUS', 'PRIME H670-PLUS D4', 'LGA1700', 'H670', 'DDR4', 'ATX'),
  createMotherboard('msi-pro-h770-p-wifi', 'MSI', 'PRO H770-P WIFI', 'LGA1700', 'H770', 'DDR5', 'ATX'),
  createMotherboard('asus-prime-b860m-a-wifi', 'ASUS', 'PRIME B860M-A WIFI', 'LGA1851', 'B860', 'DDR5', 'Micro-ATX'),
  createMotherboard('msi-mag-b860-tomahawk-wifi', 'MSI', 'MAG B860 TOMAHAWK WIFI', 'LGA1851', 'B860', 'DDR5', 'ATX'),
  createMotherboard('gigabyte-b860-aorus-elite-wifi7', 'Gigabyte', 'B860 AORUS ELITE WIFI7', 'LGA1851', 'B860', 'DDR5', 'ATX'),
  createMotherboard('asrock-b860-steel-legend-wifi', 'ASRock', 'B860 Steel Legend WiFi', 'LGA1851', 'B860', 'DDR5', 'ATX')
];

// ==========================================
// RAM CATALOG
// ==========================================

const createRam = (
  id: string,
  manufacturer: string,
  model: string,
  capacityGB: number,
  memoryType: string,
  speedMHz: number,
  modules: string,
  latency: string,
  formFactor = 'DIMM'
): HardwareItem => ({
  id,
  category: 'ram',
  manufacturer,
  model,
  isSample: false,
  series: memoryType,
  specs: {
    capacityGB,
    memoryType,
    speedMHz,
    modules,
    latency,
    formFactor,
  },
});

const RAM_DATA: HardwareItem[] = [
  // CORSAIR DDR4
  createRam('corsair-lpx-16gb-3200', 'Corsair', 'Vengeance LPX 16GB 3200MHz', 16, 'DDR4', 3200, '2×8GB', 'CL16'),
  createRam('corsair-lpx-32gb-3200', 'Corsair', 'Vengeance LPX 32GB 3200MHz', 32, 'DDR4', 3200, '2×16GB', 'CL16'),
  createRam('corsair-lpx-32gb-3600', 'Corsair', 'Vengeance LPX 32GB 3600MHz', 32, 'DDR4', 3600, '2×16GB', 'CL18'),
  createRam('corsair-rgb-pro-16gb', 'Corsair', 'Vengeance RGB Pro 16GB 3200MHz', 16, 'DDR4', 3200, '2×8GB', 'CL16'),
  createRam('corsair-rgb-pro-32gb', 'Corsair', 'Vengeance RGB Pro 32GB 3600MHz', 32, 'DDR4', 3600, '2×16GB', 'CL18'),

  // CORSAIR DDR5
  createRam('corsair-ddr5-32gb-6000', 'Corsair', 'Vengeance DDR5 32GB 6000MHz', 32, 'DDR5', 6000, '2×16GB', 'CL36'),
  createRam('corsair-ddr5-32gb-6000-cl30', 'Corsair', 'Vengeance DDR5 32GB 6000MHz CL30', 32, 'DDR5', 6000, '2×16GB', 'CL30'),
  createRam('corsair-ddr5-64gb-6000', 'Corsair', 'Vengeance DDR5 64GB 6000MHz', 64, 'DDR5', 6000, '2×32GB', 'CL30'),
  createRam('corsair-rgb-ddr5-32gb', 'Corsair', 'Vengeance RGB DDR5 32GB 6000MHz', 32, 'DDR5', 6000, '2×16GB', 'CL36'),
  createRam('corsair-dominator-titanium-32gb', 'Corsair', 'Dominator Titanium DDR5 32GB 6400MHz', 32, 'DDR5', 6400, '2×16GB', 'CL32'),

  // G.SKILL DDR4
  createRam('gskill-ripjaws-v-16gb', 'G.Skill', 'Ripjaws V 16GB 3200MHz', 16, 'DDR4', 3200, '2×8GB', 'CL16'),
  createRam('gskill-ripjaws-v-32gb', 'G.Skill', 'Ripjaws V 32GB 3600MHz', 32, 'DDR4', 3600, '2×16GB', 'CL18'),
  createRam('gskill-trident-z-neo-32gb', 'G.Skill', 'Trident Z Neo 32GB 3600MHz', 32, 'DDR4', 3600, '2×16GB', 'CL16'),

  // G.SKILL DDR5
  createRam('gskill-flare-x5-32gb', 'G.Skill', 'Flare X5 DDR5 32GB 6000MHz', 32, 'DDR5', 6000, '2×16GB', 'CL30'),
  createRam('gskill-trident-z5-32gb', 'G.Skill', 'Trident Z5 RGB DDR5 32GB 6400MHz', 32, 'DDR5', 6400, '2×16GB', 'CL32'),
  createRam('gskill-trident-z5-64gb', 'G.Skill', 'Trident Z5 Neo RGB DDR5 64GB 6000MHz', 64, 'DDR5', 6000, '2×32GB', 'CL30'),
  createRam('gskill-ripjaws-s5-32gb', 'G.Skill', 'Ripjaws S5 DDR5 32GB 6000MHz', 32, 'DDR5', 6000, '2×16GB', 'CL30'),

  // KINGSTON DDR4
  createRam('kingston-beast-16gb', 'Kingston', 'FURY Beast 16GB 3200MHz', 16, 'DDR4', 3200, '2×8GB', 'CL16'),
  createRam('kingston-beast-32gb', 'Kingston', 'FURY Beast 32GB 3200MHz', 32, 'DDR4', 3200, '2×16GB', 'CL16'),
  createRam('kingston-renegade-32gb', 'Kingston', 'FURY Renegade 32GB 3600MHz', 32, 'DDR4', 3600, '2×16GB', 'CL16'),

  // KINGSTON DDR5
  createRam('kingston-beast-ddr5-32gb', 'Kingston', 'FURY Beast DDR5 32GB 6000MHz', 32, 'DDR5', 6000, '2×16GB', 'CL36'),
  createRam('kingston-beast-ddr5-64gb', 'Kingston', 'FURY Beast DDR5 64GB 6000MHz', 64, 'DDR5', 6000, '2×32GB', 'CL36'),
  createRam('kingston-renegade-ddr5-32gb', 'Kingston', 'FURY Renegade DDR5 32GB 6400MHz', 32, 'DDR5', 6400, '2×16GB', 'CL32'),
  createRam('kingston-renegade-ddr5-64gb', 'Kingston', 'FURY Renegade DDR5 64GB 6400MHz', 64, 'DDR5', 6400, '2×32GB', 'CL32'),

  // CRUCIAL DDR4
  createRam('crucial-pro-16gb', 'Crucial', 'Pro DDR4 16GB 3200MHz', 16, 'DDR4', 3200, '2×8GB', 'CL22'),
  createRam('crucial-pro-32gb', 'Crucial', 'Pro DDR4 32GB 3200MHz', 32, 'DDR4', 3200, '2×16GB', 'CL22'),

  // CRUCIAL DDR5
  createRam('crucial-pro-ddr5-32gb', 'Crucial', 'Pro DDR5 32GB 5600MHz', 32, 'DDR5', 5600, '2×16GB', 'CL46'),
  createRam('crucial-pro-ddr5-64gb', 'Crucial', 'Pro DDR5 64GB 5600MHz', 64, 'DDR5', 5600, '2×32GB', 'CL46'),

  // TEAMGROUP DDR4
  createRam('teamgroup-vulcan-z-16gb', 'TeamGroup', 'T-Force Vulcan Z 16GB 3200MHz', 16, 'DDR4', 3200, '2×8GB', 'CL16'),
  createRam('teamgroup-vulcan-z-32gb', 'TeamGroup', 'T-Force Vulcan Z 32GB 3600MHz', 32, 'DDR4', 3600, '2×16GB', 'CL18'),
  createRam('teamgroup-delta-rgb-32gb', 'TeamGroup', 'T-Force Delta RGB 32GB 3600MHz', 32, 'DDR4', 3600, '2×16GB', 'CL18'),

  // TEAMGROUP DDR5
  createRam('teamgroup-vulcan-ddr5-32gb', 'TeamGroup', 'T-Force Vulcan DDR5 32GB 6000MHz', 32, 'DDR5', 6000, '2×16GB', 'CL38'),
  createRam('teamgroup-delta-rgb-ddr5-32gb', 'TeamGroup', 'T-Force Delta RGB DDR5 32GB 6000MHz', 32, 'DDR5', 6000, '2×16GB', 'CL30'),
  createRam('teamgroup-delta-rgb-ddr5-64gb', 'TeamGroup', 'T-Force Delta RGB DDR5 64GB 6400MHz', 64, 'DDR5', 6400, '2×32GB', 'CL40'),

  // ADATA DDR4
  createRam('adata-xpg-gammix-d10-16gb', 'ADATA', 'XPG Gammix D10 16GB 3200MHz', 16, 'DDR4', 3200, '2×8GB', 'CL16'),
  createRam('adata-xpg-spectrix-d50-32gb', 'ADATA', 'XPG Spectrix D50 32GB 3600MHz', 32, 'DDR4', 3600, '2×16GB', 'CL18'),

  // ADATA DDR5
  createRam('adata-xpg-lancer-32gb', 'ADATA', 'XPG Lancer DDR5 32GB 6000MHz', 32, 'DDR5', 6000, '2×16GB', 'CL30'),
  createRam('adata-xpg-lancer-rgb-32gb', 'ADATA', 'XPG Lancer RGB DDR5 32GB 6400MHz', 32, 'DDR5', 6400, '2×16GB', 'CL32'),

  // PATRIOT DDR4
  createRam('patriot-viper-steel-16gb', 'Patriot', 'Viper Steel 16GB 3200MHz', 16, 'DDR4', 3200, '2×8GB', 'CL16'),
  createRam('patriot-viper-steel-32gb', 'Patriot', 'Viper Steel 32GB 3600MHz', 32, 'DDR4', 3600, '2×16GB', 'CL18'),

  // PATRIOT DDR5
  createRam('patriot-viper-venom-32gb', 'Patriot', 'Viper Venom DDR5 32GB 6000MHz', 32, 'DDR5', 6000, '2×16GB', 'CL36'),
  createRam('patriot-viper-elite-5-32gb', 'Patriot', 'Viper Elite 5 DDR5 32GB 6000MHz', 32, 'DDR5', 6000, '2×16GB', 'CL36'),
];const HARDWARE_DATA: HardwareItem[] = [
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
    // =========================
  // AMD RYZEN 5000 SERIES
  // =========================

  {
    id: 'amd-ryzen-5-5500',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 5 5500',
    image: image('images/cpu/ryzen-5-5500.webp'),
    isSample: false,
    specs: {
      socket: 'AM4',
      cores: 6,
      threads: 12,
      baseClock: '3.6 GHz',
      boostClock: '4.2 GHz',
      tdp: 65,
      architecture: 'Zen 3',
      memoryType: 'DDR4',
    },
  },

  {
    id: 'amd-ryzen-5-5600',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 5 5600',
    image: image('images/cpu/ryzen-5-5600.webp'),
    isSample: false,
    specs: {
      socket: 'AM4',
      cores: 6,
      threads: 12,
      baseClock: '3.5 GHz',
      boostClock: '4.4 GHz',
      tdp: 65,
      architecture: 'Zen 3',
      memoryType: 'DDR4',
    },
  },

  {
    id: 'amd-ryzen-7-5700x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 7 5700X',
    image: image('images/cpu/ryzen-7-5700x.webp'),
    isSample: false,
    specs: {
      socket: 'AM4',
      cores: 8,
      threads: 16,
      baseClock: '3.4 GHz',
      boostClock: '4.6 GHz',
      tdp: 65,
      architecture: 'Zen 3',
      memoryType: 'DDR4',
    },
  },

  {
    id: 'amd-ryzen-7-5800x3d',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 7 5800X3D',
    image: image('images/cpu/ryzen-7-5800x3d.webp'),
    isSample: false,
    specs: {
      socket: 'AM4',
      cores: 8,
      threads: 16,
      baseClock: '3.4 GHz',
      boostClock: '4.5 GHz',
      tdp: 105,
      architecture: 'Zen 3 with 3D V-Cache',
      memoryType: 'DDR4',
    },
  },

  {
    id: 'amd-ryzen-9-5900x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 9 5900X',
    image: image('images/cpu/ryzen-9-5900x.webp'),
    isSample: false,
    specs: {
      socket: 'AM4',
      cores: 12,
      threads: 24,
      baseClock: '3.7 GHz',
      boostClock: '4.8 GHz',
      tdp: 105,
      architecture: 'Zen 3',
      memoryType: 'DDR4',
    },
  },

  {
    id: 'amd-ryzen-9-5950x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 9 5950X',
    image: image('images/cpu/ryzen-9-5950x.webp'),
    isSample: false,
    specs: {
      socket: 'AM4',
      cores: 16,
      threads: 32,
      baseClock: '3.4 GHz',
      boostClock: '4.9 GHz',
      tdp: 105,
      architecture: 'Zen 3',
      memoryType: 'DDR4',
    },
  },

  // =========================
  // AMD RYZEN 7000 SERIES
  // =========================

  {
    id: 'amd-ryzen-5-7500f',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 5 7500F',
    image: image('images/cpu/ryzen-5-7500f.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 6,
      threads: 12,
      baseClock: '3.7 GHz',
      boostClock: '5.0 GHz',
      tdp: 65,
      architecture: 'Zen 4',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-9-7900x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 9 7900X',
    image: image('images/cpu/ryzen-9-7900x.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 12,
      threads: 24,
      baseClock: '4.7 GHz',
      boostClock: '5.6 GHz',
      tdp: 170,
      architecture: 'Zen 4',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-9-7950x',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 9 7950X',
    image: image('images/cpu/ryzen-9-7950x.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 16,
      threads: 32,
      baseClock: '4.5 GHz',
      boostClock: '5.7 GHz',
      tdp: 170,
      architecture: 'Zen 4',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-9-7950x3d',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 9 7950X3D',
    image: image('images/cpu/ryzen-9-7950x3d.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 16,
      threads: 32,
      baseClock: '4.2 GHz',
      boostClock: '5.7 GHz',
      tdp: 120,
      architecture: 'Zen 4 with 3D V-Cache',
      memoryType: 'DDR5',
    },
  },

  // =========================
  // AMD RYZEN 8000G SERIES
  // =========================

  {
    id: 'amd-ryzen-5-8500g',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 5 8500G',
    image: image('images/cpu/ryzen-5-8500g.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 6,
      threads: 12,
      baseClock: '3.5 GHz',
      boostClock: '5.0 GHz',
      tdp: 65,
      architecture: 'Zen 4',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-5-8600g',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 5 8600G',
    image: image('images/cpu/ryzen-5-8600g.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 6,
      threads: 12,
      baseClock: '4.3 GHz',
      boostClock: '5.0 GHz',
      tdp: 65,
      architecture: 'Zen 4',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'amd-ryzen-7-8700g',
    category: 'cpu',
    manufacturer: 'AMD',
    model: 'Ryzen 7 8700G',
    image: image('images/cpu/ryzen-7-8700g.webp'),
    isSample: false,
    specs: {
      socket: 'AM5',
      cores: 8,
      threads: 16,
      baseClock: '4.2 GHz',
      boostClock: '5.1 GHz',
      tdp: 65,
      architecture: 'Zen 4',
      memoryType: 'DDR5',
    },
  },

  // =========================
  // INTEL 12TH GENERATION
  // =========================

  {
    id: 'intel-core-i3-12100f',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i3-12100F',
    image: image('images/cpu/core-i3-12100f.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 4,
      threads: 8,
      baseClock: '3.3 GHz',
      boostClock: '4.3 GHz',
      tdp: 58,
      architecture: 'Alder Lake',
      memoryType: 'DDR4 / DDR5',
    },
  },

  {
    id: 'intel-core-i5-12600k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i5-12600K',
    image: image('images/cpu/core-i5-12600k.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 10,
      threads: 16,
      baseClock: '3.7 GHz',
      boostClock: '4.9 GHz',
      tdp: 125,
      architecture: 'Alder Lake',
      memoryType: 'DDR4 / DDR5',
    },
  },

  // =========================
  // INTEL 13TH GENERATION
  // =========================

  {
    id: 'intel-core-i7-13700k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i7-13700K',
    image: image('images/cpu/core-i7-13700k.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 16,
      threads: 24,
      baseClock: '3.4 GHz',
      boostClock: '5.4 GHz',
      tdp: 125,
      architecture: 'Raptor Lake',
      memoryType: 'DDR4 / DDR5',
    },
  },

  {
    id: 'intel-core-i9-13900k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i9-13900K',
    image: image('images/cpu/core-i9-13900k.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 24,
      threads: 32,
      baseClock: '3.0 GHz',
      boostClock: '5.8 GHz',
      tdp: 125,
      architecture: 'Raptor Lake',
      memoryType: 'DDR4 / DDR5',
    },
  },

  // =========================
  // INTEL 14TH GENERATION
  // =========================

  {
    id: 'intel-core-i3-14100f',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i3-14100F',
    image: image('images/cpu/core-i3-14100f.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 4,
      threads: 8,
      baseClock: '3.5 GHz',
      boostClock: '4.7 GHz',
      tdp: 58,
      architecture: 'Raptor Lake Refresh',
      memoryType: 'DDR4 / DDR5',
    },
  },

  {
    id: 'intel-core-i9-14900k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core i9-14900K',
    image: image('images/cpu/core-i9-14900k.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1700',
      cores: 24,
      threads: 32,
      baseClock: '3.2 GHz',
      boostClock: '6.0 GHz',
      tdp: 125,
      architecture: 'Raptor Lake Refresh',
      memoryType: 'DDR4 / DDR5',
    },
  },

  // =========================
  // INTEL CORE ULTRA SERIES 2
  // =========================

  {
    id: 'intel-core-ultra-5-245k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core Ultra 5 245K',
    image: image('images/cpu/core-ultra-5-245k.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1851',
      cores: 14,
      threads: 14,
      baseClock: '4.2 GHz',
      boostClock: '5.2 GHz',
      tdp: 125,
      architecture: 'Arrow Lake',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'intel-core-ultra-7-265k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core Ultra 7 265K',
    image: image('images/cpu/core-ultra-7-265k.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1851',
      cores: 20,
      threads: 20,
      baseClock: '3.9 GHz',
      boostClock: '5.5 GHz',
      tdp: 125,
      architecture: 'Arrow Lake',
      memoryType: 'DDR5',
    },
  },

  {
    id: 'intel-core-ultra-9-285k',
    category: 'cpu',
    manufacturer: 'Intel',
    model: 'Core Ultra 9 285K',
    image: image('images/cpu/core-ultra-9-285k.webp'),
    isSample: false,
    specs: {
      socket: 'LGA1851',
      cores: 24,
      threads: 24,
      baseClock: '3.7 GHz',
      boostClock: '5.7 GHz',
      tdp: 125,
      architecture: 'Arrow Lake',
      memoryType: 'DDR5',
    },
  },
    // =========================================================
  // GPU - NVIDIA GTX 10
  // =========================================================

  {
    id: 'nvidia-gtx-1050',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1050',
    image: image('images/gpu/gtx-1050.webp'),
    isSample: false,
    specs: {
      vram: '2 GB',
      memoryType: 'GDDR5',
      memoryBus: '128-bit',
      tdp: 75,
      recommendedPsu: '300W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-gtx-1050-ti',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1050 Ti',
    image: image('images/gpu/gtx-1050-ti.webp'),
    isSample: false,
    specs: {
      vram: '4 GB',
      memoryType: 'GDDR5',
      memoryBus: '128-bit',
      tdp: 75,
      recommendedPsu: '300W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-gtx-1060-3gb',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1060 3GB',
    image: image('images/gpu/gtx-1060-3gb.webp'),
    isSample: false,
    specs: {
      vram: '3 GB',
      memoryType: 'GDDR5',
      memoryBus: '192-bit',
      tdp: 120,
      recommendedPsu: '400W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-gtx-1060-6gb',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1060 6GB',
    image: image('images/gpu/gtx-1060-6gb.webp'),
    isSample: false,
    specs: {
      vram: '6 GB',
      memoryType: 'GDDR5',
      memoryBus: '192-bit',
      tdp: 120,
      recommendedPsu: '400W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-gtx-1070',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1070',
    image: image('images/gpu/gtx-1070.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR5',
      memoryBus: '256-bit',
      tdp: 150,
      recommendedPsu: '500W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-gtx-1070-ti',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1070 Ti',
    image: image('images/gpu/gtx-1070-ti.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR5',
      memoryBus: '256-bit',
      tdp: 180,
      recommendedPsu: '500W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-gtx-1080',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1080',
    image: image('images/gpu/gtx-1080.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR5X',
      memoryBus: '256-bit',
      tdp: 180,
      recommendedPsu: '500W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-gtx-1080-ti',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1080 Ti',
    image: image('images/gpu/gtx-1080-ti.webp'),
    isSample: false,
    specs: {
      vram: '11 GB',
      memoryType: 'GDDR5X',
      memoryBus: '352-bit',
      tdp: 250,
      recommendedPsu: '600W',
      pciExpress: '3.0',
    },
  },

  // =========================================================
  // GPU - NVIDIA GTX 16
  // =========================================================

  {
    id: 'nvidia-gtx-1650',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1650',
    image: image('images/gpu/gtx-1650.webp'),
    isSample: false,
    specs: {
      vram: '4 GB',
      memoryType: 'GDDR5',
      memoryBus: '128-bit',
      tdp: 75,
      recommendedPsu: '300W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-gtx-1650-super',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1650 SUPER',
    image: image('images/gpu/gtx-1650-super.webp'),
    isSample: false,
    specs: {
      vram: '4 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 100,
      recommendedPsu: '350W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-gtx-1660',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1660',
    image: image('images/gpu/gtx-1660.webp'),
    isSample: false,
    specs: {
      vram: '6 GB',
      memoryType: 'GDDR5',
      memoryBus: '192-bit',
      tdp: 120,
      recommendedPsu: '450W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-gtx-1660-super',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1660 SUPER',
    image: image('images/gpu/gtx-1660-super.webp'),
    isSample: false,
    specs: {
      vram: '6 GB',
      memoryType: 'GDDR6',
      memoryBus: '192-bit',
      tdp: 125,
      recommendedPsu: '450W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-gtx-1660-ti',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce GTX 1660 Ti',
    image: image('images/gpu/gtx-1660-ti.webp'),
    isSample: false,
    specs: {
      vram: '6 GB',
      memoryType: 'GDDR6',
      memoryBus: '192-bit',
      tdp: 120,
      recommendedPsu: '450W',
      pciExpress: '3.0',
    },
  },

  // =========================================================
  // GPU - NVIDIA RTX 20
  // =========================================================

  {
    id: 'nvidia-rtx-2060',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 2060',
    image: image('images/gpu/rtx-2060.webp'),
    isSample: false,
    specs: {
      vram: '6 GB',
      memoryType: 'GDDR6',
      memoryBus: '192-bit',
      tdp: 160,
      recommendedPsu: '500W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-rtx-2060-super',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 2060 SUPER',
    image: image('images/gpu/rtx-2060-super.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 175,
      recommendedPsu: '550W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-rtx-2070',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 2070',
    image: image('images/gpu/rtx-2070.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 175,
      recommendedPsu: '550W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-rtx-2070-super',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 2070 SUPER',
    image: image('images/gpu/rtx-2070-super.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 215,
      recommendedPsu: '650W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-rtx-2080',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 2080',
    image: image('images/gpu/rtx-2080.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 215,
      recommendedPsu: '650W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-rtx-2080-super',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 2080 SUPER',
    image: image('images/gpu/rtx-2080-super.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 250,
      recommendedPsu: '650W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'nvidia-rtx-2080-ti',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 2080 Ti',
    image: image('images/gpu/rtx-2080-ti.webp'),
    isSample: false,
    specs: {
      vram: '11 GB',
      memoryType: 'GDDR6',
      memoryBus: '352-bit',
      tdp: 250,
      recommendedPsu: '650W',
      pciExpress: '3.0',
    },
  },

  // =========================================================
  // GPU - NVIDIA RTX 30
  // =========================================================

  {
    id: 'nvidia-rtx-3050',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 3050',
    image: image('images/gpu/rtx-3050.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 130,
      recommendedPsu: '550W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-3060-12gb',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 3060 12GB',
    image: image('images/gpu/rtx-3060-12gb.webp'),
    isSample: false,
    specs: {
      vram: '12 GB',
      memoryType: 'GDDR6',
      memoryBus: '192-bit',
      tdp: 170,
      recommendedPsu: '550W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-3060-ti',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 3060 Ti',
    image: image('images/gpu/rtx-3060-ti.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 200,
      recommendedPsu: '600W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-3070',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 3070',
    image: image('images/gpu/rtx-3070.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 220,
      recommendedPsu: '650W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-3070-ti',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 3070 Ti',
    image: image('images/gpu/rtx-3070-ti.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6X',
      memoryBus: '256-bit',
      tdp: 290,
      recommendedPsu: '750W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-3080-10gb',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 3080 10GB',
    image: image('images/gpu/rtx-3080-10gb.webp'),
    isSample: false,
    specs: {
      vram: '10 GB',
      memoryType: 'GDDR6X',
      memoryBus: '320-bit',
      tdp: 320,
      recommendedPsu: '750W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-3080-12gb',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 3080 12GB',
    image: image('images/gpu/rtx-3080-12gb.webp'),
    isSample: false,
    specs: {
      vram: '12 GB',
      memoryType: 'GDDR6X',
      memoryBus: '384-bit',
      tdp: 350,
      recommendedPsu: '750W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-3080-ti',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 3080 Ti',
    image: image('images/gpu/rtx-3080-ti.webp'),
    isSample: false,
    specs: {
      vram: '12 GB',
      memoryType: 'GDDR6X',
      memoryBus: '384-bit',
      tdp: 350,
      recommendedPsu: '750W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-3090',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 3090',
    image: image('images/gpu/rtx-3090.webp'),
    isSample: false,
    specs: {
      vram: '24 GB',
      memoryType: 'GDDR6X',
      memoryBus: '384-bit',
      tdp: 350,
      recommendedPsu: '750W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-3090-ti',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 3090 Ti',
    image: image('images/gpu/rtx-3090-ti.webp'),
    isSample: false,
    specs: {
      vram: '24 GB',
      memoryType: 'GDDR6X',
      memoryBus: '384-bit',
      tdp: 450,
      recommendedPsu: '850W',
      pciExpress: '4.0',
    },
  },
    // =========================================================
  // GPU - NVIDIA RTX 40
  // =========================================================

  {
    id: 'nvidia-rtx-4060',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 4060',
    image: image('images/gpu/rtx-4060.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 115,
      recommendedPsu: '550W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-4060-ti-8gb',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 4060 Ti 8GB',
    image: image('images/gpu/rtx-4060-ti-8gb.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 160,
      recommendedPsu: '550W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-4060-ti-16gb',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 4060 Ti 16GB',
    image: image('images/gpu/rtx-4060-ti-16gb.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 165,
      recommendedPsu: '550W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-4070',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 4070',
    image: image('images/gpu/rtx-4070.webp'),
    isSample: false,
    specs: {
      vram: '12 GB',
      memoryType: 'GDDR6X',
      memoryBus: '192-bit',
      tdp: 200,
      recommendedPsu: '650W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-4070-super',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 4070 SUPER',
    image: image('images/gpu/rtx-4070-super.webp'),
    isSample: false,
    specs: {
      vram: '12 GB',
      memoryType: 'GDDR6X',
      memoryBus: '192-bit',
      tdp: 220,
      recommendedPsu: '650W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-4070-ti',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 4070 Ti',
    image: image('images/gpu/rtx-4070-ti.webp'),
    isSample: false,
    specs: {
      vram: '12 GB',
      memoryType: 'GDDR6X',
      memoryBus: '192-bit',
      tdp: 285,
      recommendedPsu: '700W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-4070-ti-super',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 4070 Ti SUPER',
    image: image('images/gpu/rtx-4070-ti-super.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6X',
      memoryBus: '256-bit',
      tdp: 285,
      recommendedPsu: '700W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-4080',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 4080',
    image: image('images/gpu/rtx-4080.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6X',
      memoryBus: '256-bit',
      tdp: 320,
      recommendedPsu: '750W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-4080-super',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 4080 SUPER',
    image: image('images/gpu/rtx-4080-super.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6X',
      memoryBus: '256-bit',
      tdp: 320,
      recommendedPsu: '750W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'nvidia-rtx-4090',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 4090',
    image: image('images/gpu/rtx-4090.webp'),
    isSample: false,
    specs: {
      vram: '24 GB',
      memoryType: 'GDDR6X',
      memoryBus: '384-bit',
      tdp: 450,
      recommendedPsu: '850W',
      pciExpress: '4.0',
    },
  },

  // =========================================================
  // GPU - NVIDIA RTX 50
  // =========================================================

  {
    id: 'nvidia-rtx-5050',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 5050',
    image: image('images/gpu/rtx-5050.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 130,
      recommendedPsu: '550W',
      pciExpress: '5.0',
    },
  },

  {
    id: 'nvidia-rtx-5060',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 5060',
    image: image('images/gpu/rtx-5060.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR7',
      memoryBus: '128-bit',
      tdp: 145,
      recommendedPsu: '550W',
      pciExpress: '5.0',
    },
  },

  {
    id: 'nvidia-rtx-5060-ti-8gb',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 5060 Ti 8GB',
    image: image('images/gpu/rtx-5060-ti-8gb.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR7',
      memoryBus: '128-bit',
      tdp: 180,
      recommendedPsu: '600W',
      pciExpress: '5.0',
    },
  },

  {
    id: 'nvidia-rtx-5060-ti-16gb',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 5060 Ti 16GB',
    image: image('images/gpu/rtx-5060-ti-16gb.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR7',
      memoryBus: '128-bit',
      tdp: 180,
      recommendedPsu: '600W',
      pciExpress: '5.0',
    },
  },

  {
    id: 'nvidia-rtx-5070',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 5070',
    image: image('images/gpu/rtx-5070.webp'),
    isSample: false,
    specs: {
      vram: '12 GB',
      memoryType: 'GDDR7',
      memoryBus: '192-bit',
      tdp: 250,
      recommendedPsu: '650W',
      pciExpress: '5.0',
    },
  },

  {
    id: 'nvidia-rtx-5070-ti',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 5070 Ti',
    image: image('images/gpu/rtx-5070-ti.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR7',
      memoryBus: '256-bit',
      tdp: 300,
      recommendedPsu: '750W',
      pciExpress: '5.0',
    },
  },

  {
    id: 'nvidia-rtx-5080',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 5080',
    image: image('images/gpu/rtx-5080.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR7',
      memoryBus: '256-bit',
      tdp: 360,
      recommendedPsu: '850W',
      pciExpress: '5.0',
    },
  },

  {
    id: 'nvidia-rtx-5090',
    category: 'gpu',
    manufacturer: 'NVIDIA',
    model: 'GeForce RTX 5090',
    image: image('images/gpu/rtx-5090.webp'),
    isSample: false,
    specs: {
      vram: '32 GB',
      memoryType: 'GDDR7',
      memoryBus: '512-bit',
      tdp: 575,
      recommendedPsu: '1000W',
      pciExpress: '5.0',
    },
  },

  // =========================================================
  // GPU - AMD RX 500
  // =========================================================

  {
    id: 'amd-rx-550',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 550',
    image: image('images/gpu/rx-550.webp'),
    isSample: false,
    specs: {
      vram: '2 GB',
      memoryType: 'GDDR5',
      memoryBus: '128-bit',
      tdp: 50,
      recommendedPsu: '400W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'amd-rx-560',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 560',
    image: image('images/gpu/rx-560.webp'),
    isSample: false,
    specs: {
      vram: '4 GB',
      memoryType: 'GDDR5',
      memoryBus: '128-bit',
      tdp: 80,
      recommendedPsu: '450W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'amd-rx-570',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 570',
    image: image('images/gpu/rx-570.webp'),
    isSample: false,
    specs: {
      vram: '4 GB',
      memoryType: 'GDDR5',
      memoryBus: '256-bit',
      tdp: 150,
      recommendedPsu: '450W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'amd-rx-580-8gb',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 580 8GB',
    image: image('images/gpu/rx-580-8gb.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR5',
      memoryBus: '256-bit',
      tdp: 185,
      recommendedPsu: '500W',
      pciExpress: '3.0',
    },
  },

  {
    id: 'amd-rx-590',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 590',
    image: image('images/gpu/rx-590.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR5',
      memoryBus: '256-bit',
      tdp: 175,
      recommendedPsu: '500W',
      pciExpress: '3.0',
    },
  },

  // =========================================================
  // GPU - AMD RX 5000
  // =========================================================

  {
    id: 'amd-rx-5500-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 5500 XT',
    image: image('images/gpu/rx-5500-xt.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 130,
      recommendedPsu: '450W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-5600-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 5600 XT',
    image: image('images/gpu/rx-5600-xt.webp'),
    isSample: false,
    specs: {
      vram: '6 GB',
      memoryType: 'GDDR6',
      memoryBus: '192-bit',
      tdp: 150,
      recommendedPsu: '450W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-5700',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 5700',
    image: image('images/gpu/rx-5700.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 180,
      recommendedPsu: '600W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-5700-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 5700 XT',
    image: image('images/gpu/rx-5700-xt.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 225,
      recommendedPsu: '600W',
      pciExpress: '4.0',
    },
  },
    // =========================================================
  // GPU - AMD RX 6000
  // =========================================================

  {
    id: 'amd-rx-6400',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 6400',
    image: image('images/gpu/rx-6400.webp'),
    isSample: false,
    specs: {
      vram: '4 GB',
      memoryType: 'GDDR6',
      memoryBus: '64-bit',
      tdp: 53,
      recommendedPsu: '350W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-6500-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 6500 XT',
    image: image('images/gpu/rx-6500-xt.webp'),
    isSample: false,
    specs: {
      vram: '4 GB',
      memoryType: 'GDDR6',
      memoryBus: '64-bit',
      tdp: 107,
      recommendedPsu: '400W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-6600',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 6600',
    image: image('images/gpu/rx-6600.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 132,
      recommendedPsu: '450W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-6600-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 6600 XT',
    image: image('images/gpu/rx-6600-xt.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 160,
      recommendedPsu: '500W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-6650-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 6650 XT',
    image: image('images/gpu/rx-6650-xt.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 176,
      recommendedPsu: '500W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-6700',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 6700',
    image: image('images/gpu/rx-6700.webp'),
    isSample: false,
    specs: {
      vram: '10 GB',
      memoryType: 'GDDR6',
      memoryBus: '160-bit',
      tdp: 175,
      recommendedPsu: '550W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-6700-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 6700 XT',
    image: image('images/gpu/rx-6700-xt.webp'),
    isSample: false,
    specs: {
      vram: '12 GB',
      memoryType: 'GDDR6',
      memoryBus: '192-bit',
      tdp: 230,
      recommendedPsu: '650W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-6750-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 6750 XT',
    image: image('images/gpu/rx-6750-xt.webp'),
    isSample: false,
    specs: {
      vram: '12 GB',
      memoryType: 'GDDR6',
      memoryBus: '192-bit',
      tdp: 250,
      recommendedPsu: '650W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-6800',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 6800',
    image: image('images/gpu/rx-6800.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 250,
      recommendedPsu: '650W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-6800-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 6800 XT',
    image: image('images/gpu/rx-6800-xt.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 300,
      recommendedPsu: '750W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-6900-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 6900 XT',
    image: image('images/gpu/rx-6900-xt.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 300,
      recommendedPsu: '850W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-6950-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 6950 XT',
    image: image('images/gpu/rx-6950-xt.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 335,
      recommendedPsu: '850W',
      pciExpress: '4.0',
    },
  },

  // =========================================================
  // GPU - AMD RX 7000
  // =========================================================

  {
    id: 'amd-rx-7600',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 7600',
    image: image('images/gpu/rx-7600.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 165,
      recommendedPsu: '550W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-7600-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 7600 XT',
    image: image('images/gpu/rx-7600-xt.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 190,
      recommendedPsu: '600W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-7700-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 7700 XT',
    image: image('images/gpu/rx-7700-xt.webp'),
    isSample: false,
    specs: {
      vram: '12 GB',
      memoryType: 'GDDR6',
      memoryBus: '192-bit',
      tdp: 245,
      recommendedPsu: '700W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-7800-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 7800 XT',
    image: image('images/gpu/rx-7800-xt.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 263,
      recommendedPsu: '700W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-7900-gre',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 7900 GRE',
    image: image('images/gpu/rx-7900-gre.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 260,
      recommendedPsu: '700W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-7900-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 7900 XT',
    image: image('images/gpu/rx-7900-xt.webp'),
    isSample: false,
    specs: {
      vram: '20 GB',
      memoryType: 'GDDR6',
      memoryBus: '320-bit',
      tdp: 315,
      recommendedPsu: '750W',
      pciExpress: '4.0',
    },
  },

  {
    id: 'amd-rx-7900-xtx',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 7900 XTX',
    image: image('images/gpu/rx-7900-xtx.webp'),
    isSample: false,
    specs: {
      vram: '24 GB',
      memoryType: 'GDDR6',
      memoryBus: '384-bit',
      tdp: 355,
      recommendedPsu: '800W',
      pciExpress: '4.0',
    },
  },

  // =========================================================
  // GPU - AMD RX 9000
  // =========================================================

  {
    id: 'amd-rx-9060-xt-8gb',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 9060 XT 8GB',
    image: image('images/gpu/rx-9060-xt-8gb.webp'),
    isSample: false,
    specs: {
      vram: '8 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 150,
      recommendedPsu: '450W',
      pciExpress: '5.0',
    },
  },

  {
    id: 'amd-rx-9060-xt-16gb',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 9060 XT 16GB',
    image: image('images/gpu/rx-9060-xt-16gb.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6',
      memoryBus: '128-bit',
      tdp: 160,
      recommendedPsu: '450W',
      pciExpress: '5.0',
    },
  },

  {
    id: 'amd-rx-9070',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 9070',
    image: image('images/gpu/rx-9070.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 220,
      recommendedPsu: '650W',
      pciExpress: '5.0',
    },
  },

  {
    id: 'amd-rx-9070-xt',
    category: 'gpu',
    manufacturer: 'AMD',
    model: 'Radeon RX 9070 XT',
    image: image('images/gpu/rx-9070-xt.webp'),
    isSample: false,
    specs: {
      vram: '16 GB',
      memoryType: 'GDDR6',
      memoryBus: '256-bit',
      tdp: 304,
      recommendedPsu: '750W',
      pciExpress: '5.0',
    },
  },

    // =========================
  // MOTHERBOARDS (100 MODELS)
  // =========================
  ...MOTHERBOARD_DATA,

  // =========================
  // RAM
  // =========================
  ...RAM_DATA,
];

// ==========================================
// HARDWARE SERIES DETECTION
// ==========================================

function getHardwareSeries(item: HardwareItem): string | undefined {
  const model = item.model;

  // NVIDIA GPUs
  if (item.category === 'gpu' && item.manufacturer === 'NVIDIA') {
    if (/GTX 10/i.test(model)) return 'GTX 10';
    if (/GTX 16/i.test(model)) return 'GTX 16';
    if (/RTX 20/i.test(model)) return 'RTX 20';
    if (/RTX 30/i.test(model)) return 'RTX 30';
    if (/RTX 40/i.test(model)) return 'RTX 40';
    if (/RTX 50/i.test(model)) return 'RTX 50';
  }

  // AMD GPUs
  if (item.category === 'gpu' && item.manufacturer === 'AMD') {
    if (/RX 5\d{3}/i.test(model)) return 'RX 5000';
    if (/RX 5\d{2}/i.test(model)) return 'RX 500';
    if (/RX 6\d{3}/i.test(model)) return 'RX 6000';
    if (/RX 7\d{3}/i.test(model)) return 'RX 7000';
    if (/RX 9\d{3}/i.test(model)) return 'RX 9000';
  }

  // AMD CPUs
  if (item.category === 'cpu' && item.manufacturer === 'AMD') {
    if (/Ryzen 5 7\d{3}|Ryzen 7 7\d{3}|Ryzen 9 7\d{3}/i.test(model)) {
      return 'Ryzen 7000';
    }

    if (/Ryzen 5 9\d{3}|Ryzen 7 9\d{3}|Ryzen 9 9\d{3}/i.test(model)) {
      return 'Ryzen 9000';
    }
  }

  // Intel CPUs
  if (item.category === 'cpu' && item.manufacturer === 'Intel') {
    if (/Core i[3579]-12\d{3}/i.test(model)) return 'Core نسل 12';
    if (/Core i[3579]-13\d{3}/i.test(model)) return 'Core نسل 13';
    if (/Core i[3579]-14\d{3}/i.test(model)) return 'Core نسل 14';
  }

  return undefined;
}

// Final hardware catalog
export const HARDWARE: HardwareItem[] = HARDWARE_DATA.map((item) => ({
  ...item,
  series: item.series ?? getHardwareSeries(item),
}));
