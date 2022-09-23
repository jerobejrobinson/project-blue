import { supabase } from "config/supabase/client"

export default async function handler(req, res) {
    //BONUS PROJECT - create a middleware to hashpassword
    const { user, error } = await supabase.auth.signIn({
        email: req.body.email,
        password: req.body.password
    })
    if(error) {
        res.status(error.status).json({error: error.message})
    }
    if(user) {
        res.status(200).json({msg: 'Login Successful'})
    }
}