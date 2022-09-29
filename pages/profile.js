import LogoutBtn from "components/Buttons/LogoutBtn";
import { supabase } from "config/supabase/client";
export default function Profile({ user }) {
  return (
    <div>
      hi 
      <LogoutBtn />
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = supabase.auth.session()
  console.log(session)
  return {
    props: {}
  }
}