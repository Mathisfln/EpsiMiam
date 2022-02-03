import ProductCategories from "../api/ProductCategories";
import { ProductCategoryInput } from "../types";

export const insertProductCategory = (restaurant_id: string, category_input: ProductCategoryInput) => {
    let new_category = {
        ...category_input,
        restaurant_id
    }

    const id = ProductCategories.insert(new_category)
    return ProductCategories.findOne({_id: id})
    
}