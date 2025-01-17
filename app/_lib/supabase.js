import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.supabaseUrl, process.env.supabaseKey);

export default supabase;
