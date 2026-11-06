import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { CATEGORIES } from '../lib/categories';
import { countByCategory } from '../services/hardwareService';
import CategoryIcon from '../components/ui/CategoryIcon';
import type { CategoryId } from '../types/hardware';

const ROADMAP: { phase: string; items: string; done: boolean }[] = [
  { phase: 'فاز ۱', items: 'طراحی، ناوبری، صفحات دسته‌بندی، دادهٔ نمونه', done: true },
  { phase: 'فاز ۲', items: 'سازندهٔ PC و موتور سازگاری', done: false },
  { phase: 'فاز ۳', items: 'تحلیل عملکرد، نیازمندی بازی‌ها، مقایسه', done: false },
  { phase: 'فاز ۴', items: 'بک‌اند، PostgreSQL، احراز هویت، ذخیرهٔ کانفیگ', done: false },
  { phase: 'فاز ۵', items: 'دستیار هوش مصنوعی، پنل مدیریت، تست و استقرار', done: false },
];

export default function Home() {
  const [counts, setCounts] = useState<Partial<Record<CategoryId, number>>>({});
  useEffect(() => { countByCategory().then(setCounts).catch(() => setCounts({})); }, []);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-16 text-center md:pt-24">
        <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs text-accent-cyan">
          <ShieldCheck className="h-4 w-4" aria-hidden /> تمرکز کامل بر فناوری، سازگاری و عملکرد
        </p>
        <h1 className="animate-fade-up text-4xl font-extrabold leading-[1.4] md:text-6xl">
          PC رویاییت رو <span className="bg-gradient-to-l from-accent-cyan to-accent-blue bg-clip-text text-transparent">با ما بساز!</span>
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
          مشخصات فنی قطعات را بررسی کنید، سازگاری را بسنجید و پیکربندی خودتان را بر پایهٔ داده‌های فنی بسازید.
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/hardware/cpus" className="btn-primary">مشاهدهٔ پردازنده‌ها <ArrowLeft className="h-4 w-4" aria-hidden /></Link>
          <Link to="/hardware/gpus" className="btn-ghost">مشاهدهٔ کارت‌های گرافیک</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16" aria-labelledby="cats">
        <h2 id="cats" className="mb-6 text-2xl font-bold">دسته‌بندی سخت‌افزار</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <Link to={`/hardware/${c.slug}`} className="card card-hover block h-full p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-accent-cyan"><CategoryIcon name={c.icon} className="h-6 w-6" /></span>
                  <span className="text-xs text-slate-500">{counts[c.id] ?? '…'} رکورد نمونه</span>
                </div>
                <h3 className="font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{c.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20" aria-labelledby="road">
        <h2 id="road" className="mb-6 text-2xl font-bold">وضعیت توسعه</h2>
        <ol className="grid gap-3 md:grid-cols-5">
          {ROADMAP.map((r) => (
            <li key={r.phase} className={`card p-4 ${r.done ? 'border-cyan-400/40' : ''}`}>
              <div className="mb-2 flex items-center gap-2 font-bold">
                {r.done ? <CheckCircle2 className="h-4 w-4 text-accent-cyan" aria-hidden /> : <Clock className="h-4 w-4 text-slate-500" aria-hidden />}
                {r.phase}
                <span className="ms-auto text-xs font-normal text-slate-500">{r.done ? 'فعال' : 'در انتظار'}</span>
              </div>
              <p className="text-sm leading-6 text-slate-400">{r.items}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
