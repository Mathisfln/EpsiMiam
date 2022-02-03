import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import RestaurantForm from '../components/forms/RestaurantForm'
import SignupForm from '../components/forms/SignupForm'
import Button from '../components/utils/Button'
import { UserRolesEnum } from '/imports/types'

interface Props {
    
}

enum StepsEnum {
    SIGNUP,
    PROFILE_CHOICE,
    RESTAURANT_FORM,
    FIRST_RESTAURANT_CATEGORY,
    FIRST_RESTAURANT_PRODUCT
}

const SignupPage : React.FC<Props> = (props : Props) => {
    const [step, setStep] = useState(StepsEnum.SIGNUP)
    const {user, isLoggingIn} = useTracker(() => {
        return {
            user: Meteor.user(),
            isLoggingIn: Meteor.loggingIn()
        }
    })

    const chooseProfile = (profile_type: UserRolesEnum) => {
        Meteor.call('users.set_profile_type', profile_type, (error, data) => {
            if(error){
                toast.error("Erreur lors de l'initialisation du profil")
                toast.error(error.message)
                return
            }
            toast.success("Votre role a bien été choisi")
            switch (profile_type) {
                case UserRolesEnum.RESTAURANT:
                    setStep(StepsEnum.RESTAURANT_FORM)
                    break;
            
                default:
                    break;
            }
        })
    }

    return(
        <div className="flex flex-col h-screen w-screen bg-gray-100 justify-center items-center">
            <h1 className="font-bold text-2xl mb-2">Inscription</h1>
            <div className="rounded-g bg-white p-5 flex flex-col">
                {step === StepsEnum.SIGNUP &&
                    <>
                        {(user && !isLoggingIn) ?
                            <>
                                <p className="font-bold">Vous êtes déjà connecté</p>
                                <Link to="/">
                                    <Button>Retourner à l'accueil</Button>
                                </Link>
                            </>
                            :
                            <SignupForm onUserCreated={() => setStep(StepsEnum.PROFILE_CHOICE)}/>

                        }
                    </>
                }
                {step === StepsEnum.PROFILE_CHOICE &&
                    <div className="text-center">
                        <p>Choisissez votre type de profil</p>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            <div onClick={() => chooseProfile(UserRolesEnum.RESTAURANT)} className="rounded p-5 bg-gray-200 flex items-center justify-center hover:bg-green-300 cursor-pointer">
                                <h3 className="font-bold">Restaurateur</h3>
                            </div>
                            <div className="rounded p-5 bg-gray-200 flex items-center justify-center">
                                <h3 className="font-bold text-gray-400">Consommateur</h3>
                            </div>
                            <div className="rounded p-5 bg-gray-200 flex items-center justify-center">
                                <h3 className="font-bold text-gray-400">Livreur</h3>
                            </div>
                        </div>
                    </div>
                }
                {step === StepsEnum.RESTAURANT_FORM &&
                    <RestaurantForm onUpdate={() => setStep(StepsEnum.FIRST_RESTAURANT_CATEGORY)} />
                }
                {step === StepsEnum.FIRST_RESTAURANT_CATEGORY &&
                    <h1>CREATION DE LA PREMIERE CATEGORIE</h1>
                }
            </div>
        </div>
    )
}

export default SignupPage