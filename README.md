# PC Dream Builder — «PC رویاییت رو با ما بساز!»

Persian (RTL) PC hardware platform: specs, compatibility, performance. **No prices, budgets, carts or payments — by design.**

## Run
```
npm install
npm run validate:data   # checks sample-data integrity
npm run typecheck
npm run dev
```

## Status (Phase 1)
Functional: responsive RTL dark UI, navigation, home page, 9 category pages (search, filter, spec expand, loading/error states), typed data layer behind `src/services/hardwareService.ts`, data validation script.
Pending: builder + compatibility engine (P2), performance/games/compare (P3), backend/PostgreSQL/auth (P4), AI assistant/admin/tests/deploy (P5).

## Data honesty
All records in `src/data/hardware.ts` are **fictional illustrative samples** (`isSample: true`). `null` = unknown and must never count as compatible. Real data must come from verified datasheets.

## External requirements (later phases)
PostgreSQL instance (`DATABASE_URL`), a JWT secret, and an AI provider key (`AI_API_KEY`, server-side only). Without a key the assistant will run in a labeled demo mode. See `.env.example`.
