
export const ProductList = (content:any)=>{
    let prodinfo:any=[]
    content.forEach((element:any) => {
        prodinfo.push(<div><h1>{element.title}</h1><br /></div>);
    })
    // <h2>{element.description}</h2>
    return <div>
        <h1>Product List</h1>
        <div>
            {prodinfo}

        </div>
    </div>
}