import { Link } from 'react-router-dom'

const UserCard = ({userId, name, email, phone, img_src}) => {
  return(
    <div className="user-card">
      <div className="user-card__body">
        <div className="user-card-img">
          <img className="user-card__image"
            width="256"
            height="256"
            src={img_src}
            alt="avatar" 
          />
        </div>
        <div className="user-card__info">
          <h3 className="user-card__title mb-05">{name}</h3>
          <h4 className="user-card__title text-muted">@: {email}</h4>
          <h4 className="user-card__title text-muted mt-02">tel: {phone}</h4>
        </div>
      </div>
      <div className="user-card__bottom mt-2">
        <Link to={`/posts?userId=${userId}`}>
          <div className="button button--outline button--add button-flex">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Просмотр</span>
          </div>
        </Link>
        
        <Link to={`/users/${userId}`}>
          <div className="button button--outline button--add">
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
  )
}

export default UserCard