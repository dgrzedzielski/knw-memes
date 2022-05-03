import { createClient } from '@supabase/supabase-js';

import { getRequiredEnv } from './get-env';

const url = getRequiredEnv('NEXT_SUPABASE_URL');
const anonKey = getRequiredEnv('NEXT_SUPABASE_ANON_KEY');

export const supabase = createClient(url, anonKey);
