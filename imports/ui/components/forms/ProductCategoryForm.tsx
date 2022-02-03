import React, { useState } from 'react'
import { Meteor } from 'meteor/meteor'
import { toast } from 'react-toastify'
import Button from '../utils/Button'
import Input from '../utils/Input'
import { ProductCategory } from '/imports/types'

interface Props {
    category?: ProductCategory,
    onCategorySubmit?: Function
}

const ProductCategoryForm : React.FC<Props> = ({category, onCategorySubmit, ...props} : Props) => {
    const [editing_category, setEditingCategory] = useState(category || {})

    const handleSubmit = (e) => {
        if(category){
            Meteor.call('product_categories.update', {id: category._id, value: editing_category}, (error, data) => { 
                if(error){
                    toast.error(error.message)
                    console.error(error.message);
                    return
                }
                toast.success("Catégorie modifiée")
            })
        }else {
            Meteor.call('product_categories.insert', editing_category, (error, data) => { 
                if(error){
                    toast.error(error.message)
                    console.error(error.message);
                    return
                }
                toast.success("Catégorie créée")
            })
        }
        if(onCategorySubmit) onCategorySubmit()
    }

    return(
        <form onSubmit={handleSubmit}>
            <Input required type="text" value={editing_category.name} onChange={(v:string) => setEditingCategory({...editing_category, name: v})} label="Nom de la catégorie" />
            <Input required type="text" value={editing_category.image_url} onChange={(v:string) => setEditingCategory({...editing_category, image_url: v})} label="URL d'image de catégorie" />
            <Button>{category ? "Modifier" : "Créer"}</Button>
        </form>
    )
}

export default ProductCategoryForm