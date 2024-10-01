 async function gettingcategories(setcategory:any) {
    let data = await fetch('https://dummyjson.com/products/category-list');
    let inpjson = await data.json();
    let productcategories=JSON.parse(inpjson)
    setcategory(productcategories)
    
}
async function gettingdata(setContent:any) {
    let data2 = await fetch('https://dummyjson.com/products?limit=10&skip=10');
    let inpjson2 = await data2.json();
    let productcontent = JSON.parse(inpjson2)
    setContent(productcontent)
    
}
export function importcategories(setcategory:any,setContent:any){
    gettingcategories(setcategory)
    gettingdata(setContent)
    return 'one';
}