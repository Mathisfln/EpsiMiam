export type RestaurantCategorie = {
    _id: string,
    name: string,
    created_at: string
}

export type User = {
    email: string,
    password: string,
    created_at: string
}

export type RestaurantCategorieInput = {
    name: string
}