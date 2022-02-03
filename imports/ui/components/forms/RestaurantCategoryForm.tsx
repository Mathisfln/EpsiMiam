import React, { useState } from 'react'
import { Meteor } from 'meteor/meteor'
import { RestaurantCategory, RestaurantCategoryInput } from '../../../types'
import Input from '../utils/Input'
import Button from '../utils/Button'

interface Props {
    restaurant_category?: any
}

const RestaurantCategoryForm : React.FC<Props> = ({restaurant_category = {}} : Props) => {
    const [editing_category, setEditingCategory] = useState<RestaurantCategoryInput>(restaurant_category)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(restaurant_category?._id){
            Meteor.call('restaurant_categories.update', {id: restaurant_category._id, value: editing_category}, (error, data) => { 
                if(error){
                    console.error(error.message);
                    return
                }
                alert("CATEGORIE MODIFIEE")
            })
        } else {
            Meteor.call('restaurant_categories.insert', editing_category, (error, data) => { 
                if(error){
                    console.error(error.message);
                    return
                }
                alert("CATEGORIE CRÉÉE")
            })
        }
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <Input 
                label="Nom de la catégorie"
                type="text"
                value={editing_category?.name}
                onChange={(v:string) => setEditingCategory({...editing_category, name: v})} />
            <Button>Valider</Button>
        </form>
    )
}

export default RestaurantCategoryForm