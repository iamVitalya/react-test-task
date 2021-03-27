import {useEffect} from 'react';
import useFetch from '../../../../../../hooks/useFetch';
import ENDPOINTS from '../../../../../modules/api/endpoints';
import { POSTS } from '../../../../../modules/api/endpoints';

const PostsCard = ({userId}) => {
  ENDPOINTS[POSTS].uri += `?userId=${userId}`;
  const {response, performFetch} = useFetch(POSTS);
  const {loading, data} = response;

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  const PostCard = ({title, body}) => {
    return(
      <div className="blog-card" style={{width: '100%'}}>
        <div className="blog-card__body">
          <div className="blog-card__info">
            <h3 className="blog-card__title mb-05">{title}</h3>
            <p>{body}</p>
          </div>
        </div>
      </div>
    )
  };

  return(
    <>
      {
        loading || !data 
        ?
        <>Loading..</>
        :
        data.map(item => <PostCard key={item.id} title={item.title} body={item.body}/>)
      }
    </>
    
  )
}

export default PostsCard