const Limit = 1;

export default class Nft {
    
    constructor(name, description, category, price, date, file){
        this.name = name;
        this.description = description;
        this.category = category;
        this.setPrice(price);
        this.date = date;
        this.file = file;
    }

    setPrice(price){
        if (price <= Limit){
            this.price = price;
        }else{
            throw new Error(`The price exceeds the limit`);
        }
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price
    }

    getFile(){
        return this.file
    }

    getCategory(){
        return this.category;
    }
}