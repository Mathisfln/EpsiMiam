import RestaurantCategories from "../RestaurantCategories"
import default_restaurant_categories from "../default_data/restaurant_categories"


export const generateDefaultRestaurantCategories = () => {
    const existing_category = RestaurantCategories.findOne();
    if(existing_category) return

    console.log("SERVER - Generating default restau categories");
    default_restaurant_categories.forEach(cat => {
        RestaurantCategories.insert({...cat, created_at: new Date()})
    })
}