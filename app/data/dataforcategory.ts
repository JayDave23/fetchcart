import { MouseEventHandler } from "react";
async function fetchrequestedcategory(inp:any){
    let newdata = await fetch(`https://dummyjson.com/products/category/${inp}?limit=10&skip=10`)
    let requestedcategory = await newdata.json();
    return requestedcategory
}


export default function dataforcategory(element:any, setContent:any):MouseEventHandler{
    let data:any = [];
    fetchrequestedcategory(element).then(requestedcategory =>{
        data = requestedcategory.products;
        setContent(data);
    })

    return data;
}