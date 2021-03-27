import {USERS} from '../../../../modules/api/endpoints';
import ENDPOINTS from '../../../../modules/api/endpoints';
import UserPostCard from './UserPostCard/index';
import PostsCard from './PostsCard';

const UserPosts = (props) => {
  return(
    <div className="container">
        <h2 className="content__title">Просмотр постов пользователя</h2>

        <div className="blog-block">
          <div className="aside">
            <UserPostCard 
              userId={ENDPOINTS[USERS].uri += props.location.search.replace('?userId=', '/')}
            />
          </div>
  
          <div className="content__items">
            <PostsCard userId={props.location.search.replace('?userId=', '')}/>
          </div>
        </div>
      </div>
  )
}

export default UserPosts