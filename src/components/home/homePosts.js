import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getPosts} from '../../store/actions';

import { Spinner, Button } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import Moment from 'react-moment';
import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router-dom';


const HomePosts = () => {
    const homePost = useSelector(state=> state.posts);
    const dispatch = useDispatch();
    const [loading, setLoading] =useState(false);

    useEffect(()=>{
        dispatch(getPosts({},1, "desc", 6))
    }, [dispatch])

    const loadMorePost= () => {
        const page = homePost.page +1;
        setLoading(true)
        dispatch(getPosts(homePost, page, "desc", 6)).then(()=>{
            setLoading(false)
        })
    }

    return(
        <>
         <Masonry
          breakpointCols={{default:3, 800:2, 400:1}}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
         >
          {
              homePost.posts? 
                    homePost.posts.map((item)=>(
                        <div key={item.id}>
                           <img style={{width: '100%', height:'200px'}}
                               src={item.image} alt={item.image}
                           />
                           <div className="author">
                               <span>{item.author}</span>
                               <Moment format=" DD MMMM">
                                   {item.createdAt}
                               </Moment>
                           </div>
                           <div className="content">
                               <div className="title">{item.title}</div>
                               <div className="excerpt">{item.excerpt}</div>
                               <LinkContainer
                                  to={`/article/${item.id}`}
                                  className="mt-3"
                               >
                                   <Button variant="light">Read More</Button>
                               </LinkContainer>
                           </div>
                        </div>
                    ))
              :null
          }

         </Masonry>
         {loading ?
           <div style={{textAlign:'center'}}>
              <Spinner animation="border" role="status">
                  <span className="sr-only"></span>
              </Spinner>

           </div>
         :null}
         {!homePost.end & !loading ?
          <Button 
            variant="outline-dark"
            onClick={()=>loadMorePost()}>
              Load more posts
          </Button>
          :null}
        </>
    )
}

export default HomePosts;