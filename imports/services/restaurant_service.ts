import { Meteor } from "meteor/meteor";
import { RestaurantInfoInput } from "../types";

export const updateRestaurantInfo = (infos_input: RestaurantInfoInput) => {
    Meteor.users.update({_id: Meteor.userId()}, {$set: {
        restaurant_infos: {...infos_input}
    }})    
}