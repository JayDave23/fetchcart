import dataforcategory from "../data/dataforcategory";
export const Categories = (catdata:any,setContent:any)=>{
    let categoryarray:any = []
    catdata.forEach((element:any , index:any)=>{
        categoryarray.push(<button id={index} onClick={() => dataforcategory(element, setContent)}>{element}</button>);
    })
    return <div>
        {categoryarray}
    </div>
}