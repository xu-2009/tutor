import { createClient } from '@supabase/supabase-js'

// Config comes from .env.local (VITE_ vars are exposed to the browser on purpose;
// the anon key is safe to ship — data is protected by row-level security in Supabase).
const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabaseConfigured = Boolean(url && anonKey)

if (!supabaseConfigured) {
  // Fail gracefully: the app still loads (no import-time crash), but auth/DB calls
  // will error and be surfaced to the user. On deploy, set both VITE_SUPABASE_* env vars.
  console.error('Supabase is not configured: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (in .env.local for dev, or the host\'s env vars for deploy).')
}

// Use harmless placeholders when unconfigured so createClient does not throw at import time.
export const supabase = createClient(
  url || 'https://unconfigured.supabase.co',
  anonKey || 'unconfigured-anon-key'
)
