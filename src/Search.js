import React from "react";
import { getSearchTerm, incPageNo, decPageNo } from "./Redux/Action";
import { useDispatch, useSelector } from "react-redux/es/exports";

const Search = () => {
  const pageNo = useSelector((state) => state.rootReducer.ProductReducer.page);
  const nbPages = useSelector(
    (state) => state.rootReducer.ProductReducer.nbPages
  );
  const dispatch = useDispatch();
  const inputHandler = (event) => {
    // console.log(event.target.value);
    dispatch(
      getSearchTerm({
        text: event.target.value,
      })
    );
  };

  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <form class="d-flex  mx-auto" role="search">
            <input
              onChange={inputHandler}
              className="me-2 searchBar"
              type="search"
              placeholder="Search Tech News"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>

      {/* paging */}
      <div className="paging my-3">
        <div className="prevBtn mx-5  ">
          <button onClick={() => dispatch(decPageNo())}>PREV</button>
        </div>
        <div className="pageNo">
          <p>
            {pageNo} of {nbPages}
          </p>
        </div>
        <div className="nextBtn mx-5  ">
          <button onClick={() => dispatch(incPageNo())}>NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
