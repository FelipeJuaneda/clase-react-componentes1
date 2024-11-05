
export const ItemList = ({data}) => {
  return (
    <div>
        {data.map((items)=>{
              return(
                <div className="item" key={items.id}>
                     <h2>{items.title}</h2>
                     <img style={{width:"200px"}} src={items.image} alt={items.title}/>
                     <p>{items.description}</p>
                     <p>{items.price}</p>
                </div>
              )
       })}
    </div>
  )
}
