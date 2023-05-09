import { createClient } from '@supabase/supabase-js'

const baseUrl = 'https://jfifrgmpdxxgqipftxrv.supabase.co'
const apiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmaWZyZ21wZHh4Z3FpcGZ0eHJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3NjUxMDEsImV4cCI6MTk5ODM0MTEwMX0.9YAdbtXHPJQiHe_97-NVJg8mH5_XVXeWehS38T5M4KM'

// Create a single supabase client for interacting with your database
export default createClient(baseUrl, apiKey)
