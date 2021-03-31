/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { usePosts } from "../utilites/posts";
import { useParams } from "react-router-dom";

function SinglePostPage() {
  const [post, setPost] = useState({});
  let params = useParams();
  const { posts } = usePosts();

  useEffect(() => {
    async function getPostById() {
      let response = await fetch(
        "http://localhost:8000/posts/" + params.postId
      );
      let data = await response.json();
      setPost(data.data);
    }

    getPostById();
  }, []);

  return (
    <div>
      <div className="postapp-header">
        <h1
          css={css`
            color: rgb(254, 255, 67);
            font-size: 50px;
          `}
        >
          Single Post Page
        </h1>
      </div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <hr />
      <div>
        <h1>Post list</h1>
        {posts.map((post, index) => {
          return <h1 key={index}>{post.title}</h1>;
        })}
      </div>
    </div>
  );
}

export default SinglePostPage;
