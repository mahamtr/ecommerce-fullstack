interface Cart{
    userEmail:string,
    details: ProductSelection[]
}

interface ProductSelection {
    productId:number,
    quantity:number,
}

interface Product {
    id:number,
    name:string,
    price:number,
    description:string,
    discountPercent:number,
    blobUrls:string[],
    stockQty:number,
}

interface Category {
    id:number,
    name:string,
    description: string,
    blobUrl:string,
    products: Product[],
}

interface Order { 
    Id:number,
    userEmail: string,
    details: ProductSelection[]
    paymentAmount:number,
    Address:string,
    PostCode:number,
    
}

export {}



