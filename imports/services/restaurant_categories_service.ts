import RestaurantCategories from '../api/RestaurantCategories'
import default_categories from '../default_data/restaurant_categories'

export const generateDefaultRestaurantCategories = () => {
    const existing_category = RestaurantCategories.findOne()
    if(existing_category) return

    console.log("SERVER - Generating default categories")
    default_categories.forEach(cat => {
        RestaurantCategories.insert({...cat, created_at: new Date()})
    })
}
