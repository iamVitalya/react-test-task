import Search from "../../Search";
import UserCard from "./UserCard";
import {useEffect} from 'react';
import useFetch from '../../../../../hooks/useFetch';
import {USERS} from '../../../../modules/api/endpoints';
import Loader from "./UserCard/Loader";

const UsersBlock = () => {
  const {response, performFetch} = useFetch(USERS);
  const {loading, data} = response;

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  const ViewUsers = ({data = response.data, loading = response.loading}) => {
    return(
      <>
        {
          loading || !data
            ?
            [...Array(8)].map((item, index) => <Loader key={index} />)
            :
            data.map(item => <UserCard key={item.id}
                                       userId={item.id}
                                       name={item.name}
                                       email={item.email}
                                       phone={item.phone}
                                       img_src={item.img_src}
            />)
        }
      </>
    )
  }

  return(
    <div className="content">
      <div className="container">
        {/*<div className="content__top">*/}
        {/*  <Search />*/}
        {/*</div>*/}
        <h2 className="content__title">Просмотр пользователей</h2>
        <div className="content__items">
          {
            loading || data &&<ViewUsers />
          }
        </div>
      </div>
    </div>
  )
}

export default UsersBlock