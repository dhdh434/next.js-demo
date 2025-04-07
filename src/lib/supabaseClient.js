import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kffahpauuwlphyeyqufj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmZmFocGF1dXdscGh5ZXlxdWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNjEyOTMsImV4cCI6MjA1OTYzNzI5M30.Du_EmwoUd3XbTwz9kZu4_cNlvlqLn4OEkf37RzLdJCw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
