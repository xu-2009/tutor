import { createClient } from '@supabase/supabase-js'

// Config comes from .env.local (VITE_ vars are exposed to the browser on purpose;
// the anon key is safe to ship — data is protected by row-level security in Supabase).
const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anonKey) {
  console.error('Supabase is not configured: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local, then restart the dev server.')
}

export const supabase = createClient(url, anonKey)
