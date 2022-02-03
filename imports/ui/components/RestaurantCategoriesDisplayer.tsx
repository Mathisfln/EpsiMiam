import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data'
import React, { useEffect, useState } from 'react'
import RestaurantCategories from '/imports/api/RestaurantCategories'
import { RestaurantCategory } from '/imports/types'

interface Props {

}

const RestaurantCategoriesDisplayer : React.FC<Props> = (props : Props) => {
    const {categories, loading} = useTracker(() => {

        const resto_publication = Meteor.subscribe('restaurant_categories')

        return {
            categories: RestaurantCategories.find().fetch(),
            loading: !resto_publication.ready()
        }
    })
    
    return(
        <div className="flex justify-between">
            {!loading &&
                <>
                    {categories.map(cat => {
                        return(<div key={cat._id} className="category">
                            {cat.name}
                        </div>)
                    })}
                </>
            }
        </div>
    )
}

export default RestaurantCategoriesDisplayer