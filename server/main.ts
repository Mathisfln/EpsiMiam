import { Meteor } from 'meteor/meteor';


import "../imports/api/server/restaurant_categories_methods"
import "../imports/api/server/restaurant_methods"
import "../imports/api/server/product_categories_methods"
import "../imports/api/server/users_methods"
import "../imports/api/server/restaurant_categories_publications"
import { generateDefaultRestaurantCategories } from '../imports/services/restaurant_categories_service'
import { generateDefaultUser } from '/imports/services/users_service';

Meteor.startup(() => {
  console.log("SERVER - Server launched")

  // Generate default data
  generateDefaultRestaurantCategories()
  generateDefaultUser()
});
