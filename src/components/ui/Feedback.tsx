import { AlertTriangle, FlaskConical, Loader2 } from 'lucide-react';

export function Spinner({ label = 'در حال بارگذاری…' }: { label?: string }) {
  return (
    <div role="status" className="flex items-center justify-center gap-3 py-20 text-slate-400">
      <Loader2 className="h-5 w-5 animate-spin text-accent-cyan" aria-hidden /> {label}
    </div>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div role="alert" className="card mx-auto max-w-md p-8 text-center">
      <AlertTriangle className="mx-auto mb-3 h-8 w-8 text-amber-400" aria-hidden />
      <p className="mb-4 text-slate-300">{message}</p>
      {onRetry && <button className="btn-ghost" onClick={onRetry}>تلاش مجدد</button>}
    </div>
  );
}

export function SampleBadge() {
  return (
    <span title="این رکورد نمونهٔ آموزشی است و مشخصات یک محصول واقعی نیست"
      className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-xs text-amber-300">
      <FlaskConical className="h-3 w-3" aria-hidden /> نمونهٔ آموزشی
    </span>
  );
}
