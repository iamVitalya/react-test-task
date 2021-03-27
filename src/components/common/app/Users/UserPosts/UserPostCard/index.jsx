import {useEffect} from 'react';
import useFetch from '../../../../../../hooks/useFetch';
import {USERS} from '../../../../../modules/api/endpoints';
import ENDPOINTS from '../../../../../modules/api/endpoints';
import Loader from '../../UsersBlock/UserCard/Loader';
import { Link } from 'react-router-dom'

const UserPostCard = ({userId}) => {
  ENDPOINTS[USERS].uri = userId;
  const {response, performFetch} = useFetch(USERS);
  const {loading, data} = response;
  
  useEffect(() => {
    performFetch();
  }, [performFetch]);

  return(
    <>
      {
        loading || !data 
        ?
        <Loader />
        :
        <div className="user-card" style={{margin: 0}}>
          <div className="user-card__body">
            <div className="user-card-img">
              <img className="user-card__image"
                width="256"
                height="256"
                src={data.img_src}
                alt="avatar" 
              />
            </div>
            <div className="user-card__info">
              <h3 className="user-card__title mb-05">{data.name}</h3>
              <h4 className="user-card__title text-muted">@: {data.email}</h4>
              <h4 className="user-card__title text-muted mt-02">tel: {data.phone}</h4>
            </div>
          </div>
          <div className="user-card__bottom mt-2">
            <Link to={`/users/${data.id}`} className="w-100">
              <div className="button button--outline button--add w-100">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  stroke="#000000" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="21" x2="4" y2="14"></line>
                  <line x1="4" y1="10" x2="4" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="3"></line>
                  <line x1="20" y1="21" x2="20" y2="16"></line>
                  <line x1="20" y1="12" x2="20" y2="3"></line>
                  <line x1="1" y1="14" x2="7" y2="14"></line>
                  <line x1="9" y1="8" x2="15" y2="8"></line>
                  <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      }
    </>
  )
}

export default UserPostCard