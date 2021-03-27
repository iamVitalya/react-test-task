const Search = () => {
  return(
    <div className="filters w-100">
      <div className="filter-block">
        <div className="form__group w-90">
          <input type="search" className="form__input" id="search" placeholder="Введите текст для поиска" required="" />
          <label htmlFor="search" className="form__label">Поиск</label>
        </div>

        <div className="form__group">
          <button className="form__btn">
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
            Поиск
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search