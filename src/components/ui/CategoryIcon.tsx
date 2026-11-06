import { Box, CircuitBoard, Cpu, Database, Fan, HardDrive, MemoryStick, MonitorPlay, Zap, type LucideProps } from 'lucide-react';
import type { CategoryMeta } from '../../types/hardware';

const ICONS = { Cpu, MonitorPlay, CircuitBoard, MemoryStick, HardDrive, Database, Zap, Fan, Box };

export default function CategoryIcon({ name, ...props }: { name: CategoryMeta['icon'] } & LucideProps) {
  const Icon = ICONS[name];
  return <Icon aria-hidden {...props} />;
}
