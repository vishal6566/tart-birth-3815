import { useState, useEffect } from "react"

function getdata({
    page
}) {
    return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?_limit=15&_page=${page}`).then(res => {
        return res.json();
    })
}


function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [page,setPage]=useState(1)
     //only on mount
    useEffect(() => {

        handleFetchData(page)

    }, [page])
    const handleFetchData = async (page=1) => {
        try {
            setLoading(true)
            const data = await getdata({page})
            setPosts(data.data)
            
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }
    const handlePageChange=(changeBy)=>{
        setPage(page+changeBy)
      
    }
   
   
    return (

        <div>
            {loading && <div>loading..</div>}
            <h3>Dashboard</h3>
         
           <div>
            {posts.map(item=>(
                <div>
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <h3>Category :{item.category}</h3>
                <h3>{item.price}</h3>
                </div>
            
           


           ) )}
           </div>
                
        
            <button disabled={page==1} onClick={()=>handlePageChange(-1)}>prev</button>
            <button>{page}</button>
            <button onClick={()=>handlePageChange(1)}>next</button>
        </div>
    )
}

export default Posts