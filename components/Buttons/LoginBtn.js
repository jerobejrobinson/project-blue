import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from 'config/supabase/client'

async function handleClick(e) {
    e.preventDefault()
    let email = document.getElementById('loginEmail');
    let password = document.getElementById('loginPassword');

    function clearValues() {
        email.value = ""
        password.value = ""
    }
    const { user, session, error } = await supabase.auth.signIn({
        email: email.value,
        password: password.value
    })
    if(error) {
        toast.error(JSON.stringify(error))
        clearValues()
        return;
    }
    if(user) {
        toast.success('Login Successful')
        clearValues()
    }
    return;
}

export default function LoginBtn() {
    return (
        <>
            <button 
                onClick={(e) => handleClick(e)}
                className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
            >
                Login
            </button>
            <ToastContainer />
        </>
    )
}


