// filepath: c:\PROGRAMACION GABRIEL CARVAJAL\TurismoColombia\project\src\supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jfojziqupeamjtudellf.supabase.co'; // Pega aquí tu Project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmb2p6aXF1cGVhbWp0dWRlbGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NDE0MzUsImV4cCI6MjA2NDIxNzQzNX0.4G1EIHI1BeK_ahsApVFjcsAgRiGRKIAjOs_DcRRNOHw'; // Pega aquí tu anon public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);