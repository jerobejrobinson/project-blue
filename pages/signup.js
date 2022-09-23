import SignupBtn from "components/Buttons/SignupBtn";
import TextInputs from "components/Inputs/TextInputs";


export default function SignUp() {
    
    return (
        <form className="flex justify-center items-center h-screen">
            <div className="grid gap-6 w-1/4 p-4 border border-gray-300 rounded shadow">
                <TextInputs
                    labelChildren='Email'
                    inputId='signupEmail'
                    inputType='text'
                    inputName='email'
                />
                <TextInputs
                    labelChildren='Password'
                    inputId='signupPassword'
                    inputType='password'
                    inputName='password'
                />
                <TextInputs
                    labelChildren='Retype Password'
                    inputId='signupPasswordRetype'
                    inputType='password'
                    inputName='password'
                />
                <SignupBtn />
            </div>
        </form>
    )
}