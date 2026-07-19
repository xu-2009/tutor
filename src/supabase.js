import { createClient } from '@supabase/supabase-js'

// Prefer env vars (.env.local for dev, host env vars for deploy); fall back to the
// project's public values so the app works even if the host's env vars aren't wired up.
// This is safe: the Supabase URL and anon key are designed to be public — data is
// protected by row-level security, not by hiding these values.
const FALLBACK_URL = 'https://zbxrqzgkljzcdhnrznul.supabase.co'
const FALLBACK_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpieHJxemdrbGp6Y2RobnJ6bnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0MTczNzAsImV4cCI6MjA5OTk5MzM3MH0.s4mqG_QfK3JZX02k0bi9xphbmXabomDRVRb4fqVd3Sw'

const url = import.meta.env.VITE_SUPABASE_URL || FALLBACK_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || FALLBACK_ANON_KEY

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
