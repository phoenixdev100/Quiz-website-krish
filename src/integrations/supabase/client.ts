// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yumhqqqxacywzmcazovm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1bWhxcXF4YWN5d3ptY2F6b3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NTY4ODUsImV4cCI6MjA2NTIzMjg4NX0.I4_llN9HW3FIlUUQbx83heQfa2qTANnBHEUUPX1pzo8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);