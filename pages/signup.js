import { NEW_USER_SIGNUP } from "config/api/endpoints/signup"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
    async function handleSignupClick() {
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
    return (
        <div>
            <form>
                <label htmlFor="signupEmail">
                    Email:
                    <input type="text" id="signupEmail" name="email"/>
                </label>
                <label htmlFor="signupPassword">
                    Password:
                    <input type="password" id="signupPassword" name="password"/>
                </label>
                <label htmlFor="signupPasswordRetype">
                    Retype Password:
                    <input type="password" id="signupPasswordRetype" name="password"/>
                </label>
                <button onClick={(e) => {
                    e.preventDefault()
                    handleSignupClick()
                }}>
                    Create New Account
                </button>
            </form>
            <ToastContainer />
        </div>
    )
}