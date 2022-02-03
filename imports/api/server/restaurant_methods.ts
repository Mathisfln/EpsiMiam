import {Meteor} from 'meteor/meteor';
import { RestaurantInfoInput } from 'imports/types'
import { isRestaurantUser } from '/imports/services/users_service';
import { updateRestaurantInfo } from '/imports/services/restaurant_service';

Meteor.methods({
    'restaurants.update'(restaurant_infos: RestaurantInfoInput){
        isRestaurantUser()
        updateRestaurantInfo(restaurant_infos)
     }
})