import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
    'https://dtycuytsihkxdytyieam.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0eWN1eXRzaWhreGR5dHlpZWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM3OTIzMjMsImV4cCI6MTk3OTM2ODMyM30.WUR9QDRnsWkkvZ-kxq3qfg_JApwYm7XFPzdA5YgTmqY'
)