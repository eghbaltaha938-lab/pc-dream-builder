import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, Search, Image as ImageIcon } from 'lucide-react';
import { getCategoryBySlug } from '../lib/categories';
import { listHardware } from '../services/hardwareService';
import type { CategoryMeta, HardwareItem, SpecValue } from '../types/hardware';
import CategoryIcon from '../components/ui/CategoryIcon';
import { ErrorState, SampleBadge, Spinner } from '../components/ui/Feedback';
import NotFound from './NotFound';

function formatSpec(v: SpecValue | undefined, unit?: string): string {
  if (v === null || v === undefined) return 'نامشخص';
  if (typeof v === 'boolean') return v ? 'دارد' : 'ندارد';
  if (Array.isArray(v)) return v.join('، ');
  return unit ? `${v} ${unit}` : String(v);
}

function ItemCard({
  item,
  category,
}: {
  item: HardwareItem;
  category: CategoryMeta;
}) {
  const [open, setOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const shown = open ? category.fields : category.fields.slice(0, 4);

  return (
    <li className="card card-hover animate-fade-up overflow-hidden">
      <div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-slate-900/70 p-6">
        {item.image && !imageError ? (
          <img
            src={item.image}
            alt={item.model}
            className="block max-h-full max-w-full object-contain"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <ImageIcon className="h-12 w-12" />
            <span className="text-xs">تصویر محصول موجود نیست</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="mb-1 text-xs text-slate-500">
              {item.manufacturer}
            </p>
            <h3 className="font-bold leading-7">{item.model}</h3>
          </div>

          {item.isSample && <SampleBadge />}
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {shown.map((f) => {
            const v = item.specs[f.key];

            return (
              <div key={f.key} className="min-w-0">
                <dt className="text-xs text-slate-500">{f.label}</dt>
                <dd
                  className={
                    v === null ? 'text-slate-500' : 'text-slate-200'
                  }
                >
                  {formatSpec(v, f.unit)}
                </dd>
              </div>
            );
          })}
        </dl>

        <button
          className="mt-4 inline-flex items-center gap-1 text-sm text-accent-cyan hover:underline"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'مشخصات کمتر' : 'همهٔ مشخصات'}
          <ChevronDown
            className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>
      </div>
    </li>
  );
}

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  const [items, setItems] = useState<HardwareItem[]>([]);
  const [status, setStatus] = useState<'loading' | 'error' | 'ready'>(
    'loading'
  );
  const [query, setQuery] = useState('');
  const [filterKey, setFilterKey] = useState('');
  const [filterVal, setFilterVal] = useState('');

  const load = useCallback(() => {
    if (!category) return;

    setStatus('loading');

    listHardware(category.id)
      .then((r) => {
        setItems(r);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, [category]);

  useEffect(() => {
    setQuery('');
    setFilterKey('');
    setFilterVal('');
    load();
  }, [load]);

  const filterOptions = useMemo(() => {
    if (!category) return [];

    return category.fields.flatMap((f) => {
      const vals = new Set<string>();

      items.forEach((i) => {
        const v = i.specs[f.key];
        if (typeof v === 'string') vals.add(v);
      });

      return vals.size > 1 && vals.size <= 6
        ? [{ field: f, values: [...vals] }]
        : [];
    });
  }, [category, items]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    return items.filter((i) => {
      if (
        q &&
        !`${i.model} ${i.manufacturer}`.toLowerCase().includes(q)
      ) {
        return false;
      }

      if (
        filterKey &&
        filterVal &&
        i.specs[filterKey] !== filterVal
      ) {
        return false;
      }

      return true;
    });
  }, [items, query, filterKey, filterVal]);

  if (!category) return <NotFound />;

  const activeValues =
    filterOptions.find((o) => o.field.key === filterKey)?.values ?? [];

  const hasSampleItems = visible.some((item) => item.isSample);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-8 flex items-start gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cyan-400/10 text-accent-cyan">
          <CategoryIcon name={category.icon} className="h-7 w-7" />
        </span>

        <div>
          <h1 className="text-3xl font-extrabold">{category.title}</h1>
          <p className="mt-2 text-slate-400">{category.description}</p>
        </div>
      </header>

      {hasSampleItems && (
        <div
          role="note"
          className="mb-6 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm leading-7 text-amber-200"
        >
          رکوردهای نمونه، آموزشی هستند و نباید به‌عنوان مشخصات تأییدشده محصولات
          واقعی در نظر گرفته شوند. مقدار «نامشخص» یعنی داده موجود نیست.
        </div>
      )}

      <div className="mb-6 grid gap-3 md:grid-cols-[1fr_auto_auto]">
        <label className="relative block">
          <span className="sr-only">جستجو</span>
          <Search
            className="pointer-events-none absolute end-3 top-3 h-4 w-4 text-slate-500"
            aria-hidden
          />
          <input
            className="input pe-10"
            placeholder="جستجوی نام یا سازنده…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        {filterOptions.length > 0 && (
          <>
            <select
              className="input md:w-48"
              aria-label="فیلتر بر اساس"
              value={filterKey}
              onChange={(e) => {
                setFilterKey(e.target.value);
                setFilterVal('');
              }}
            >
              <option value="">فیلتر: همه</option>

              {filterOptions.map((o) => (
                <option key={o.field.key} value={o.field.key}>
                  {o.field.label}
                </option>
              ))}
            </select>

            <select
              className="input md:w-48"
              aria-label="مقدار فیلتر"
              value={filterVal}
              disabled={!filterKey}
              onChange={(e) => setFilterVal(e.target.value)}
            >
              <option value="">همهٔ مقادیر</option>

              {activeValues.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </>
        )}
      </div>

      {status === 'loading' && <Spinner />}

      {status === 'error' && (
        <ErrorState
          message="بارگذاری اطلاعات انجام نشد."
          onRetry={load}
        />
      )}

      {status === 'ready' &&
        (visible.length === 0 ? (
          <p className="py-16 text-center text-slate-400">
            موردی با این جستجو پیدا نشد.
          </p>
        ) : (
          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((i) => (
              <ItemCard key={i.id} item={i} category={category} />
            ))}
          </ul>
        ))}
    </div>
  );
}