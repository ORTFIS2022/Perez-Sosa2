const Limit = 1;
const ExpirationDate = new Date("June 23, 2022");

export default class Nft {
    constructor(name, description, category, price, date, file){
        this.name = name;
        this.description = description;
        this.category = category;
        this.setPrice(price);
        this.setDate(date);
        this.file = file;
    }

    setDate (date){
        if(date > ExpirationDate){
            this.date = date;
        }else{
            throw new Error(`Choose a valid date`);
        }
    }
    setPrice(price){
        if (price <= Limit){
            this.price = price;
        }else{
            throw new Error(`The price exceeds the limit`);
        }
    }

    getCategory(){
        return this.category;
    }
}