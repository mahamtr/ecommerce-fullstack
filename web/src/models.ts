
interface User {
    email:string;
    usernemail_verifiedame:boolean;
    name:string;
    phoneNumber: string;
    email_verified:boolean;
    picture:string;
    user_id:string;
    username:string;
    cartDetail: CartDetail[]
}

interface Item {
    id:number,
    name:string,
    price:number,
    description:string,
    discountPercent:number,
    blobUrls:string[],
    stockQty:number,
    category: number[]
}




interface CartDetail {
    itemId:string,
    quantity: number
}



interface Category {
    id:number,
    name:string,
}

interface Order { 
    id:number,
    userId: string,
    cardDetail: CartDetail[]
    paymentAmount:number,
    Address:string,
    postCode:number,
}

interface Transctions{
    
}

export {}



