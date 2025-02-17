
interface Author {
    id: string,
    name: string,
    photo: string,
} 

interface Tutorial {
    id: number,
    name: string,
}
interface Ingredient {
    id: number,
    name: string,
    photo: string,
}

interface RecipeIngredient {
    id: number,
    ingredient: Ingredient,
}

export interface Category {
    id: number,
    name: string,
    slug: string,
    icon: string,
    recipe_count: number,
    recipes?: Recipe[],
}

interface Photos {
    id: number,
    photo: string,
}

export interface Recipe {
    id: string,
    name: string,
    slug: string,
    url_file: string,
    url_video: string,
    author: Author,
    category: Category,
    thumbnail: string,
    tutorials?: Tutorial[],
    recipe_ingredients: RecipeIngredient[],
    about: string,
    photos: Photos[],
}

export const baseURL = "http://127.0.0.1:8000/storage";
