import Catagory from "./Catagory"
const cat=[
    {
        title:"Shirt",
        imgurl:"https://3.imimg.com/data3/OI/OJ/MY-8728688/coat-1000x1000.jpg"
    },
    {
        title:"Pants",
        imgurl:"https://3.imimg.com/data3/OI/OJ/MY-8728688/coat-1000x1000.jpg"
    },
    {
        title:"Coat",
        imgurl:"https://3.imimg.com/data3/OI/OJ/MY-8728688/coat-1000x1000.jpg"
    },
    {
        title:"Shoes",
        imgurl:"https://3.imimg.com/data3/OI/OJ/MY-8728688/coat-1000x1000.jpg"
    },
    {
        title:"T-shirt",
        imgurl:"https://3.imimg.com/data3/OI/OJ/MY-8728688/coat-1000x1000.jpg"
    }
]
const Catagories =()=>{
    return(
            <div className="catagories">
                {cat.map(({title,imgurl})=>(
                    <Catagory title={title} imgurl={imgurl}/>
                ))}
            </div>

    )
}
export default Catagories