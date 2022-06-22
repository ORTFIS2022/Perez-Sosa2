const Limit = 1;
const Today = new Date("2022-06-23");

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
        if(date > Today){
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