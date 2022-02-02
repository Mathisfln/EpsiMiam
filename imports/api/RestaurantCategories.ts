import {Mongo} from 'meteor/mongo';

export const RestaurantCategories = new Mongo.Collection('restaurant-categories');

export default RestaurantCategories;