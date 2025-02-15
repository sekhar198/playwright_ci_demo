//Create a class for each page in javascript
export class ProductsPage{
    constructor(page){

        this.page = page
    }         //This is method for constructor
    
    
    visit = async() =>{             //This is a funtion
        await this.page.goto("/")
    }

}