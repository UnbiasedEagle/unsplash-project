import React,{useEffect,useState} from 'react';
import axios from 'axios'
import Image from './Image'
import Spinner from './Spinner';
import Pagination from './Pagination';

const Collection1 = () => {

    const [loading,setLoading]=useState(false)

    const [collection1,setCollection1]=useState([])

    const [currentPage,setCurrentPage]=useState(1)

    const [postsPerPage]=useState(4)



    useEffect(()=>{
        async function fetchPhoto(){
            setLoading(true)
            const request=await axios.get(`https://api.unsplash.com/collections/1580860/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            setCollection1(request.data)
            setLoading(false)
        }   
        fetchPhoto()
    },[])

    const indexOfLastPost=currentPage*postsPerPage
    const indexOfFirstPost=indexOfLastPost-postsPerPage
    const currentCollection=collection1.slice(indexOfFirstPost,indexOfLastPost)

     const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    if(loading){
        return <Spinner></Spinner>
    }

    return (  
        <React.Fragment>
            <div className='row  mt-4'>
            {
                currentCollection.map(image=>{
                    return<Image key={image.id} loading={loading} image={image}></Image>
                })
            }
        </div> 
        <Pagination postsPerPage={postsPerPage} paginate={paginate} totalPosts={collection1.length}></Pagination>
        </React.Fragment>         
        
     
     
    );
}

export default Collection1;