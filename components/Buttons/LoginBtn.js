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
                className='p-2 bg-blue-600 text-white rounded'
            >
                Login
            </button>
            <ToastContainer />
        </>
    )
}