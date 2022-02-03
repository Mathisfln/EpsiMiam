import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../utils/Button'
import Input from '../utils/Input'

interface Props {
    onUpdate?: Function
}

const RestaurantForm : React.FC<Props> = ({onUpdate} : Props) => {
    const {user, loggingIn} = useTracker(() => {
        return {
            user: Meteor.user(),
            isLoggingIn: Meteor.loggingIn()
        }
    })

    const [restaurant_infos, setRestaurantInfos] = useState(user?.restaurant_infos || {})

    const editRestaurant = (e : any) => {
        e.preventDefault()
        Meteor.call('restaurants.update', {restaurant_infos}, (error, data) => { 
            if(error){
                toast.error(error.message)
                console.error(error.message);
                return
            }
            if(onUpdate) onUpdate()
        })
    }

    const handleChange = (attr : string, value : any) => {
        setRestaurantInfos({...restaurant_infos, [attr]: value})
    }
    

    return(
        <form onSubmit={editRestaurant}>
            <Input value={restaurant_infos.restaurant_name} type="text" label="Nom du restaurant" onChange={(v:string) => handleChange("restaurant_name", v)} />
            <Input value={restaurant_infos.address} type="text" label="Adresse du restaurant" onChange={(v:string) => handleChange("address", v)} />
            <Button>Valider</Button>
        </form>
    )
}

export default RestaurantForm