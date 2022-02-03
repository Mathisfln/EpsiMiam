import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../utils/Button'
import Input from '../utils/Input'

interface Props {
    onUserCreated?: Function
}

const SignupForm : React.FC<Props> = ({onUserCreated} : Props) => {
    const [email, setEmail]         = useState()
    const [password, setPassword]   = useState()

    const signup = (e:any) => {
        e.preventDefault()
        if(email && password){
            Accounts.createUser({
                email,
                password
            }, (err) => {
                if(err) {
                    toast.error("Erreur lors de la création de l'utilisateur")
                    return
                } 

                toast.success("Nouvel utilisateur créé !")
                Meteor.loginWithPassword(email, password)
                if(onUserCreated) onUserCreated()
            })
        }
    }

    return(
        <form onSubmit={signup} className="flex flex-col gap-2">
            <Input type="email" onChange={setEmail} value={email} label="Email" />
            <Input type="password" onChange={setPassword} value={password} label="Mot de passe" />
            <Button>Créer mon compte</Button>
        </form>
    )
}

export default SignupForm