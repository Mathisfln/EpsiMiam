import {Meteor} from 'meteor/meteor';
import {RestaurantCategorieInput} from '../../types';
import RestaurantCategories from '../RestaurantCategories';

Meteor.methods({
    'restaurant_categories.insert'(restaurant_category_input:RestaurantCategorieInput){
        const new_categorie = {
            ...restaurant_category_input,
            created_at: new Date()
        }
        const id = RestaurantCategories.insert(new_categorie);
        return RestaurantCategories.findOne({_id: id})
    }
})