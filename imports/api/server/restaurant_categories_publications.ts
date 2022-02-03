import { Meteor } from 'meteor/meteor'
import RestaurantCategories from "../RestaurantCategories";

Meteor.publish('restaurant_categories', () => {
    return RestaurantCategories.find()
  });
  