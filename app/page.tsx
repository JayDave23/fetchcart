'use client'
import {ProductList} from "./components/ProductList";
import { useEffect, useState } from "react";
import { Categories } from "./components/Categories";
import { importcategories } from "./data/importcategories";
export default function Home() {
  let [content, setContent] = useState()
  let [category,setCategory] = useState()

  useEffect(()=>{importcategories(setCategory,setContent)},) 
  return (
    
    <div>
      {/* {importcategories(setCategory,setContent)} */}
      <Categories catdata={category} setContent={setContent} />
      <ProductList data={content}/>
    </div>
  );
}
