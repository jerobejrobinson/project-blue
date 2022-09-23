import { NEW_USER_SIGNUP } from "config/api/endpoints/signup"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

async function handleClick(e) {
    e.preventDefault()
    let signupEmail = document.getElementById('signupEmail');
    let signupPassword = document.getElementById('signupPassword');
    let signupPasswordRetype = document.getElementById('signupPasswordRetype');

    function clearValues() {
        signupEmail.value = ""
        signupPassword.value = ""
        signupPasswordRetype.value = ""
    }

    if(signupPassword.value != signupPasswordRetype.value) {
        toast.error('These passwords do not match')
        clearValues()
        return;
    };

    const fetchOpts = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: signupEmail.value, password: signupPassword.value})
    };

    let { msg, error } = await fetch(NEW_USER_SIGNUP, fetchOpts).then(res => res.json());

    if(error) {
        toast.error(error)
        clearValues()
        return;
    }

    toast.success(msg)
    clearValues()
    return;
}

export default function SignupBtn() {
    return (
        <>
            <button 
                onClick={(e) => handleClick(e)}
                className='p-2 bg-blue-600 text-white rounded'
            >
                Create Account
            </button>
            <ToastContainer />
        </>
    )
}