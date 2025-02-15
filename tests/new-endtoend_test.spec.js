import{test} from "@playwright/test"
import { ProductsPage } from "../page-objects/ProductPage";
test.only("New user end-to-end test journey", async ({page})=>{
    //productpage.visit()
    const productsPage = new ProductsPage(page)
    await productsPage.visit()
    await page.pause()
    

}) ;