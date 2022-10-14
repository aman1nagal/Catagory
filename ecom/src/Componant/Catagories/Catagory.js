const Catagory =({title,imgurl})=> {
    return (
        <div className="catagory-container">
            <div className="bg-img" style={{backgroundImage: `url(${imgurl})`}} /> 
                <div className="catagory-body" >
                <h1 className="h1">{title}</h1>
                <p className="p">Shop Now</p>
                </div>   
        </div>
    )
}
export default Catagory