import React, { useEffect, useState } from "react";
import { removeStory } from "./Redux/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";

const Stories = () => {
  const dispatch = useDispatch();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const newsStories = useSelector(
    (state) => state.rootReducer.ProductReducer.hits
  );

  console.log("stories:", stories);

  useEffect(() => {
    setStories(newsStories);
    if (stories === undefined) {
      setLoading(false);
    }
  }, [newsStories]);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  // remove post/story---
  const removePost = (id) => {
    dispatch(removeStory(id));
  };

  return (
    <>
      {/* <h5>stories</h5> */}
      <div className="storiesContainer">
        <div>
          {stories.map((val, idx) => {
            return (
              <div className="stories my-3">
                <h4>{val.title}</h4>
                <div className="mt-3">
                  <p>
                    By <span className="textBold">{val.author}</span> |
                    <span className="textBold"> {val.num_comments}</span>{" "}
                    comments
                  </p>
                </div>
                <div className="readMoreRemove">
                  <div>
                    <a href={val.url} target="_blank">
                      <p className="blue">Read More</p>
                    </a>
                  </div>
                  <div>
                    <p className="red" onClick={() => removePost(val.objectID)}>
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Stories;
