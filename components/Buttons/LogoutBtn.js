import { ToastContainer, toast } from "react-toastify";
import { supabase } from "config/supabase/client";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { base } from 'config/api/endpoints'

export default function LogoutBtn() {
    const router = useRouter()
    return (
        <>
            <button 
                onClick={async () => {
                    const { error } = await supabase.auth.signOut();
                    if(error) {
                        toast.error(JSON.stringify(error))
                    } else {
                        router.push(`${base}`)
                    }

                }}
                className='p-2 bg-gray-300 text-white rounded'
            >
                Login Out
            </button>
            <ToastContainer />
        </>
    )
}