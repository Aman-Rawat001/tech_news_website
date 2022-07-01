import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStories } from "./Redux/Action";
import Search from "./Search";
import Stories from "./Stories";

const Homepage = () => {
  const dispatch = useDispatch();
  const searchterm = useSelector(
    (state) => state.rootReducer.SearchTermReducer.text
  );
  const currPage = useSelector(
    (state) => state.rootReducer.ProductReducer.page
  );
  // console.log(currPage);
  const API = `http://hn.algolia.com/api/v1/search?query=${searchterm}&page=${currPage}`;

  const fetchNews = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      dispatch(
        setStories({
          query: data.query,
          page: data.page,
          nbPages: data.nbPages,
          hits: data.hits,
        })
      );
    } catch (error) {
      console.log("fetchNewsError: ", error);
    }
  };

  useEffect(() => {
    fetchNews(API);
  }, [currPage, searchterm]);

  return (
    <div className="pt-5">
      <p className="display-4 ">Tech News On The Go</p>
      <div>
        <Search />
      </div>
      <div>
        <Stories />
      </div>
    </div>
  );
};

export default Homepage;
