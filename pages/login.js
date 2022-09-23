import { useEffect, useState } from 'react'
import TextInputs from "components/Inputs/TextInputs"
import LoginBtn from "components/Buttons/LoginBtn"
import LogoutBtn from 'components/Buttons/LogoutBtn'
import { supabase } from 'config/supabase/client'

export default function Login() {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        const user = supabase.auth.user();
        setUser(user)
    }, [user])

    if(!user) {
        return (
            <form className="flex flex-col justify-center items-center h-screen">
                <p className="text-3xl font-bold py-8">Project Blue</p>
                <div className="grid gap-6 w-1/4 p-4 border border-gray-300 rounded shadow">
                    <TextInputs
                        labelChildren='Email'
                        inputId='loginEmail'
                        inputType='text'
                        inputName='email'
                    />
                    <TextInputs
                        labelChildren='Password'
                        inputId='loginPassword'
                        inputType='password'
                        inputName='password'
                    />
                    <LoginBtn />
                </div>
            </form>
        )
    }
    return (
        <>  
            <p>user:</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <p>client-side data fetching with RLS</p>
            
            <LogoutBtn />
        </>
    )
}