import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import '../imports/api/server/restaurant_categories_methods'
import {generateDefaultRestaurantCategories} from '../imports/api/services/restaurant_categories_services'

Meteor.startup(() => {
    console.log('SERVER - Server started');

    generateDefaultRestaurantCategories();
    // Admin init
    const user_admin = Meteor.users.findOne();
    if(!user_admin){
        console.log('SERVER - First user generation....');
        Accounts.createUser({
            email: "admin@gmail.com",
            password: "admin"
        })
    }
});