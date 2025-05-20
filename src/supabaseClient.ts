// filepath: c:\PROGRAMACION GABRIEL CARVAJAL\TurismoColombia\project\src\supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dqzcsurojrqvoxjglvrc.supabase.co'; // Pega aquí tu Project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxemNzdXJvanJxdm94amdsdnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NjQ0ODksImV4cCI6MjA2MzM0MDQ4OX0.iC35NwIxnV4miYVv2-PY9PIf3DXV9bxpeeQeqgiR2Y4'; // Pega aquí tu anon public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);