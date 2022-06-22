const Limit = 100;
const Today = new Date("2022-06-23");

export default class Nft {
    
    constructor(name, description, category, price, date, file){
        this.setName(name);
        this.setDescription(description);
        this.setCategory(category);
        this.setPrice(price);
        this.setDate(date);
        this.setFile(file);
    }

    setName(name){
        if(name == null || name.length == 0 ){
            throw new Error(`Insert a name for your Nft`);
        }else{
            this.name = name;
        }
    }

    setCategory(category){
        if(category != null && category.length != 0){
            this.category = category;
        }else{
            throw new Error(`Choose a category`);
        }
    }

    setDescription(description){
        if(description == null || description.length == 0 ){
            throw new Error(`Write your description`);
        }else{
            this.description = description;
        }
    }


    setDate (date){
        if(date > Today){
            this.date = date;
        }else{
            throw new Error(`Choose a valid date`);
        }
   }

    setPrice(price){
        if (price != null && price.length > 0 && price <= Limit){
            this.price = price;
        }else{
            if(price == null || price.length == 0){
                throw new Error(`Insert a price`);
            }else{
                throw new Error(`The price exceeds the limit`);
            }
            
        }
    }

    setFile(file){
        if(file == null || file.length == 0 ){
            throw new Error(`Insert a file`);
        }else{
            this.file = file;
        }
    }

    getCategory(){
        return this.category;
    }
}