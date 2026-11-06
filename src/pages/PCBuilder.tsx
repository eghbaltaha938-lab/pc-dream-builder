
import { useMemo, useState } from 'react';
import type { ElementType } from 'react';

import { HARDWARE } from '../data/hardware';
import {
  checkCompatibility,
  type SelectedParts,
} from '../lib/compatibility';

import type { CategoryId, HardwareItem } from '../types/hardware';

import {
  Cpu,
  Monitor,
  CircuitBoard,
  MemoryStick,
  HardDrive,
  Zap,
  Fan,
  Box,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';

const categories: {
  id: CategoryId;
  title: string;
  icon: ElementType;
}[] = [
  { id: 'cpu', title: 'پردازنده (CPU)', icon: Cpu },
  { id: 'gpu', title: 'کارت گرافیک (GPU)', icon: Monitor },
  { id: 'motherboard', title: 'مادربرد', icon: CircuitBoard },
  { id: 'ram', title: 'حافظه رم', icon: MemoryStick },
  { id: 'ssd', title: 'حافظه SSD', icon: HardDrive },
  { id: 'hdd', title: 'هارد HDD', icon: HardDrive },
  { id: 'psu', title: 'پاور', icon: Zap },
  { id: 'cooler', title: 'خنک‌کننده', icon: Fan },
  { id: 'case', title: 'کیس', icon: Box },
];

const statusInfo = {
  compatible: {
    label: 'سازگار',
    icon: CheckCircle2,
    color: 'text-emerald-400',
  },
  incompatible: {
    label: 'ناسازگار',
    icon: AlertTriangle,
    color: 'text-red-400',
  },
  unknown: {
    label: 'نامشخص',
    icon: HelpCircle,
    color: 'text-amber-400',
  },
};

export default function PCBuilder() {
  const [selectedIds, setSelectedIds] = useState<
    Partial<Record<CategoryId, string>>
  >({});

  const selectedParts = useMemo(() => {
    const result: SelectedParts = {};

    categories.forEach((category) => {
      const id = selectedIds[category.id];

      if (id) {
        const item = HARDWARE.find(
          (part) => part.id === id
        );

        if (item) {
          result[category.id] = item;
        }
      }
    });

    return result;
  }, [selectedIds]);

  const issues = useMemo(
    () => checkCompatibility(selectedParts),
    [selectedParts]
  );

  const selectedCount = Object.keys(selectedParts).length;

  const compatibleCount = issues.filter(
    (item) => item.status === 'compatible'
  ).length;

  const incompatibleCount = issues.filter(
    (item) => item.status === 'incompatible'
  ).length;

  const unknownCount = issues.filter(
    (item) => item.status === 'unknown'
  ).length;

  function handleSelect(
    category: CategoryId,
    id: string
  ) {
    setSelectedIds((previous) => ({
      ...previous,
      [category]: id || undefined,
    }));
  }

  function getSpecs(item: HardwareItem) {
    return Object.entries(item.specs)
      .filter(([, value]) => value !== null)
      .slice(0, 4)
      .map(([key, value]) => {
        const displayValue = Array.isArray(value)
          ? value.join(', ')
          : String(value);

        return key + ': ' + displayValue;
      })
      .join(' | ');
  }

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-navy-950 px-4 py-10 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Cpu size={16} />
            PC Dream Builder
          </div>

          <h1 className="mb-3 text-3xl font-black md:text-4xl">
            سیستم رویاییت رو بساز
          </h1>

          <p className="max-w-2xl text-slate-400">
            قطعات موردنظرت را انتخاب کن و نتیجه بررسی اولیه سازگاری آن‌ها را ببین.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">
              قطعات انتخاب‌شده
            </p>
            <p className="mt-2 text-3xl font-bold text-cyan-300">
              {selectedCount}/9
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">
              موارد سازگار
            </p>
            <p className="mt-2 text-3xl font-bold text-emerald-400">
              {compatibleCount}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">
              موارد ناسازگار
            </p>
            <p className="mt-2 text-3xl font-bold text-red-400">
              {incompatibleCount}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">
              موارد نامشخص
            </p>
            <p className="mt-2 text-3xl font-bold text-amber-400">
              {unknownCount}
            </p>
          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-7">

            <h2 className="mb-6 text-xl font-bold">
              انتخاب قطعات کامپیوتر
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">

              {categories.map((category) => {
                const Icon = category.icon;

                const products = HARDWARE.filter(
                  (item) => item.category === category.id
                );

                return (
                  <div
                    key={category.id}
                    className="rounded-2xl border border-white/10 bg-navy-900/70 p-4"
                  >

                    <label className="mb-3 flex items-center gap-2 font-semibold">
                      <Icon
                        size={19}
                        className="text-cyan-400"
                      />
                      {category.title}
                    </label>

                    <select
                      value={selectedIds[category.id] || ''}
                      onChange={(event) =>
                        handleSelect(category.id, event.target.value)
                      }
                      className="w-full rounded-xl border border-white/10 bg-navy-950 px-3 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
                    >

                      <option value="">
                        انتخاب قطعه...
                      </option>

                      {products.map((product) => (
                        <option
                          key={product.id}
                          value={product.id}
                          className="bg-navy-950"
                        >
                          {product.model}
                        </option>
                      ))}

                    </select>

                    {selectedParts[category.id] && (
                      <p className="mt-3 text-xs leading-6 text-slate-400">
                        {getSpecs(selectedParts[category.id]!)}
                      </p>
                    )}

                  </div>
                );
              })}

            </div>

            <button
              onClick={() => setSelectedIds({})}
              className="mt-6 rounded-xl border border-red-400/20 px-5 py-3 text-sm text-red-400 transition hover:bg-red-400/10"
            >
              پاک کردن تمام انتخاب‌ها
            </button>

          </section>

          <section className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-7">

            <h2 className="mb-2 text-xl font-bold">
              بررسی سازگاری قطعات
            </h2>

            <p className="mb-6 text-sm text-slate-400">
              نتیجه بررسی با هر انتخاب به‌روزرسانی می‌شود.
            </p>

            {issues.length === 0 ? (

              <div className="rounded-2xl border border-dashed border-white/15 p-8 text-center">

                <Cpu
                  size={36}
                  className="mx-auto mb-4 text-slate-500"
                />

                <p className="font-semibold">
                  هنوز قطعه‌ای برای بررسی وجود ندارد
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  ابتدا قطعات موردنظرت را انتخاب کن.
                </p>

              </div>

            ) : (

              <div className="space-y-3">

                {issues.map((issue, index) => {
                  const info = statusInfo[issue.status];
                  const Icon = info.icon;

                  return (
                    <div
                      key={issue.title + '-' + index}
                      className="rounded-2xl border border-white/10 bg-navy-900/70 p-4"
                    >

                      <div className="mb-2 flex items-center justify-between gap-3">

                        <span className="font-semibold text-sm">
                          {issue.title}
                        </span>

                        <span
                          className={
                            'flex items-center gap-1 text-xs ' +
                            info.color
                          }
                        >
                          <Icon size={15} />
                          {info.label}
                        </span>

                      </div>

                      <p className="text-xs leading-6 text-slate-400">
                        {issue.message}
                      </p>

                    </div>
                  );
                })}

              </div>

            )}

            <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">

              <p className="text-xs leading-6 text-amber-200">
                اطلاعات قطعات فعلی نمونه آموزشی و فرضی هستند.
                نتایج این ابزار بررسی اولیه‌اند و تأیید قطعی
                سازگاری محسوب نمی‌شوند.
              </p>

            </div>

          </section>

        </div>

      </div>
    </div>
  );
}
