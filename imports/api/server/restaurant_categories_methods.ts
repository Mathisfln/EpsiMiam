import {Meteor} from 'meteor/meteor';
import { RestaurantCategoryInput } from '../../types'
import RestaurantCategories from '../../api/RestaurantCategories'

Meteor.methods({
    'restaurant_categories.insert'(restaurant_category_input:RestaurantCategoryInput){
        const new_category = {
            ...restaurant_category_input,
            created_at: new Date()
        }
        const id = RestaurantCategories.insert(new_category)
        return RestaurantCategories.findOne({_id: id})
     },
     'restaurant_categories.update'({id, value}) {
        RestaurantCategories.update({_id: id}, {$set: {...value}})
     },
     'restaurant_categories.getAll'(){
         return RestaurantCategories.find().fetch()
     }
})