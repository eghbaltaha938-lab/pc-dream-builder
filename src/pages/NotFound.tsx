import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <p dir="ltr" className="text-6xl font-extrabold text-accent-cyan">404</p>
      <p className="mt-4 text-slate-400">صفحهٔ مورد نظر پیدا نشد.</p>
      <Link to="/" className="btn-primary mt-6">بازگشت به خانه</Link>
    </div>
  );
}
