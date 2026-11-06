
import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { Menu, Sparkles, X, Cpu } from 'lucide-react';

import { CATEGORIES } from '../../lib/categories';
import CategoryIcon from '../ui/CategoryIcon';

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const link = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
      isActive
        ? 'bg-cyan-400/15 text-accent-cyan'
        : 'text-slate-300 hover:bg-white/5'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-cyan-400/10 bg-navy-950/80 backdrop-blur-lg">
      <nav
        aria-label="ناوبری اصلی"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"
      >
        <Link to="/" className="flex items-center gap-2 font-extrabold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan to-accent-blue text-navy-950">
            <Sparkles className="h-5 w-5" aria-hidden />
          </span>

          <span dir="ltr" className="text-lg">
            PC Dream <span className="text-accent-cyan">Builder</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          <li>
            <NavLink to="/" end className={link}>
              خانه
            </NavLink>
          </li>

          <li>
            <NavLink to="/builder" className={link}>
              <Cpu className="h-4 w-4" />
              سازنده سیستم
            </NavLink>
          </li>

          {CATEGORIES.slice(0, 6).map((c) => (
            <li key={c.id}>
              <NavLink to={`/hardware/${c.slug}`} className={link}>
                {c.title.split(' (')[0]}
              </NavLink>
            </li>
          ))}

          <li className="relative group">
            <button
              className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5"
              aria-haspopup="true"
            >
              بیشتر
            </button>

            <ul className="invisible absolute end-0 top-full w-48 rounded-xl border border-cyan-400/15 bg-navy-900 p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {CATEGORIES.slice(6).map((c) => (
                <li key={c.id}>
                  <NavLink to={`/hardware/${c.slug}`} className={link}>
                    {c.title.split(' (')[0]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <button
          className="rounded-lg p-2 hover:bg-white/5 lg:hidden"
          aria-label={open ? 'بستن منو' : 'باز کردن منو'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <ul className="mx-4 mb-3 grid grid-cols-2 gap-1 rounded-2xl border border-cyan-400/10 bg-navy-900 p-2 lg:hidden">
          <li>
            <NavLink to="/" end className={link}>
              خانه
            </NavLink>
          </li>

          <li>
            <NavLink to="/builder" className={link}>
              <Cpu className="h-4 w-4" />
              سازنده سیستم
            </NavLink>
          </li>

          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <NavLink to={`/hardware/${c.slug}`} className={link}>
                <CategoryIcon
                  name={c.icon}
                  className="h-4 w-4"
                />
                {c.title.split(' (')[0]}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-cyan-400/10 py-8 text-center text-sm text-slate-500">
        <p>
          PC Dream Builder — پلتفرم فنی سخت‌افزار: مشخصات، سازگاری و عملکرد.
        </p>

        <p className="mt-1">
          همهٔ دادهٔ فعلی نمونهٔ آموزشی است و مشخصات واقعی محصولات نیست.
        </p>
      </footer>
    </div>
  );
}
