export interface ProductResponse {
    products: Product[];
}

export interface Product {
    id:                 number;
    title:              string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    thumbnail:          string;
    images:             string[];
}


export interface ProductCart {
    product: Product,
    cantidad: number;
}

