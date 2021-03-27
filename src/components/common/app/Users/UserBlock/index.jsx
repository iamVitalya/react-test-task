import useFetch from "../../../../../hooks/useFetch";
import ENDPOINTS, {CREATE_USER, DELETE_USER, USERS} from "../../../../modules/api/endpoints";
import {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

const UserBlock = (props) => {
  const history = useHistory();
  const [imgSrc, setImgSrc] = useState('')
  const [callout, setCallout] = useState('');
  const [calloutError, setCalloutError] = useState(false);

  const {response: responseCreate, performFetch: performFetchCreate} = useFetch(CREATE_USER);
  const {loading: loadingCreate, error: errorCreate} = responseCreate;

  ENDPOINTS[USERS].uri = props.location.pathname;
  const {response: responseUser, performFetch: performFetchUser} = useFetch(USERS);
  const {loading: loadingUser, data: dataUser, error: errorUser} = responseUser;

  ENDPOINTS[DELETE_USER].uri = props.location.pathname;
  const {response: responseDelete, performFetch: performFetchDelete} = useFetch(DELETE_USER);
  const {loading: loadingDelete, data: dataDelete, error: errorDelete} = responseUser;

  useEffect(() => {
    performFetchUser();
  }, [performFetchUser]);

  const BdCallout = ({text = callout, error = calloutError}) => {
    return(
      <div className={`user-block-success bd-callout ${error && 'bd-callout-error'}`}>
        {text}
      </div>
    )
  }

  const createUser = (e) => {
    const newUser = {
      name: e.target.name.value,
      username: e.target.username.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      img_src: e.target.img_src.value
    }

    setImgSrc(newUser.img_src);

    ENDPOINTS[CREATE_USER].body = JSON.stringify(newUser);
    ENDPOINTS[CREATE_USER].headers = { 'Content-Type': 'application/json' };

    performFetchCreate();

    if (!loadingCreate) {
      setCallout('Пользователь создан!');
    }
    else {
      setCallout(`Ошибка при создании пользователя!\nОшибка: ${errorCreate}`);
      setCalloutError(true);
    }
  };

  const removeUser = () => performFetchDelete();

  const onSubmit = (e) => {
    e.preventDefault();

    if(isEmptyObj(dataUser)) {
      createUser(e);
      setTimeout(() => {
        history.push("/");
      }, 5000)
    }
    else {
      removeUser();
      history.push("/");
    }
  }

  const isEmptyObj = (obj) => {
    for(let key in obj) {
      return false;
    }
    return true;
  }

  return(
    <div className="container mh-35">
      <h2 className="content__title">
        {
          loadingUser || isEmptyObj(dataUser)
            ?
            'Создание пользователя'
            :
            'Редактирование пользователя'
        }
      </h2>
      <div className="content__items">
        <div className="user-block">
          <div className="user-block__avatar">
            <img className="" src={isEmptyObj(dataUser) ? imgSrc : dataUser.img_src} alt="avatar" style={{width: '100%', height: '100%', borderRadius: '0.5em'}}/>
          </div>
          <div className="user-block__info">
            {callout && <BdCallout />}

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="user-block__form_group">
                <div className="user-block__form">
                  <div className="form__group">
                    <label htmlFor="name" className="form__label__user pb-05">
                      {loadingUser || isEmptyObj(dataUser) ? 'Имя' : `Имя: ${dataUser.name}`}
                    </label>
                    {
                      isEmptyObj(dataUser) &&
                      <input
                        type="text"
                        className="form__input__user"
                        id="name"
                        placeholder="Введите имя"
                        required
                      />
                    }
                  </div>

                  <div className="form__group">
                    <label htmlFor="username" className="form__label__user pb-05">
                      {loadingUser || isEmptyObj(dataUser) ? 'Логин' : `Логин: ${dataUser.username}`}
                    </label>
                    {
                      isEmptyObj(dataUser) &&
                      <input
                        type="text"
                        className="form__input__user"
                        id="username"
                        placeholder="Введите логин"
                        required
                      />
                    }
                  </div>
                </div>

                <div className="user-block__form">
                  <div className="form__group">
                    <label htmlFor="email" className="form__label__user pb-05">
                      {loadingUser || isEmptyObj(dataUser) ? 'Email' : `Email: ${dataUser.email}`}
                    </label>
                    {
                      isEmptyObj(dataUser) &&
                      <input
                        type="email"
                        className="form__input__user"
                        id="email"
                        placeholder="Введите email"
                        required
                      />
                    }
                  </div>

                  <div className="form__group">
                    <label htmlFor="phone" className="form__label__user pb-05">
                      {loadingUser || isEmptyObj(dataUser) ? 'Телефон' : `Телефон: +${dataUser.phone}`}
                    </label>
                    {
                      isEmptyObj(dataUser) &&
                      <input
                        type="tel"
                        className="form__input__user"
                        id="phone"
                        placeholder="Введите телефон"
                        required
                      />
                    }
                  </div>
                </div>
              </div>

              <div className="user-block__form_group">
                <div className="form__group w-100">
                  <label htmlFor="img_src" className="form__label__user pb-05">
                    {loadingUser || isEmptyObj(dataUser) ? 'Путь/ссылка до аватара' : ''}
                  </label>
                  {
                    isEmptyObj(dataUser) &&
                    <input
                      type="text"
                      className="form__input__user w-100"
                      id="img_src"
                      placeholder="Введите путь/ссылку"
                    />
                  }
                </div>
              </div>

              <div className="user-block__form">
                <div className="form__group">
                  <button className="button button--outline button--add w-100 mt-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white" />
                    </svg>
                    <span>
                      {
                        isEmptyObj(dataUser) ? 'Создать' : 'Удалить'
                      }
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBlock