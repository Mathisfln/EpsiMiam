import {Meteor} from 'meteor/meteor';
import { insertProductCategory } from '/imports/services/product_categories_service';
import { isRestaurantUser } from '/imports/services/users_service';
import { ProductCategoryInput } from '/imports/types';

Meteor.methods({
    'product_categories.insert'(category_input: ProductCategoryInput){
          isRestaurantUser()
          insertProductCategory(Meteor.userId(), category_input)
     }
})