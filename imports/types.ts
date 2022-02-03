// General types
export type Address = {
    city: string,
    street: string,
    street_number: string,
    postal_code: string
}

export type RestaurantCategory = {
    _id: string,
    name: string,
    created_at: string
}

export type RestaurantCategoryInput = {
    name: string
}


// Restaurant related types
export type RestaurantInfoInput = {
    restaurant_name?: string,
    address?: string
}

// Users related types
export enum UserRolesEnum {
    CUSTOMER = "CUSTOMER",
    RESTAURANT = "RESTAURANT",
    DELIVERER = "DELIVERER",
}

// Product categories types
export type ProductCategory = {
    _id: string,
    name: string,
    restaurant_id: string,
    image_url: string
}

export type ProductCategoryInput = {
    name?: string,
    image_url?: string
}