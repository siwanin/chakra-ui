import { useEffect, useState } from "react";
import { getPosts } from "../feature/counter/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";

export function usePosts() {
  // const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.status === 'pending')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  // useEffect(function () {
  //   async function getPosts() {
  //     try {
  //       let response = await fetch("http://localhost:8000/posts");
  //       let data = await response.json();
  //       setPosts(data.data);
  //     } catch (error) {
  //       setIsError(true);
  //       console.log("error !");
  //     }
  //   }
  //   getPosts();
  // }, []);

  async function handleDeletePost(postId) {
    //   console.log("postId:", postId);
    //   let response = await fetch("http://localhost:8000/posts/" + postId, {
    //     method: "DELETE",
    //   });
    //   if (response.ok) {
    //     let newPosts = posts.filter((post) => {
    //       return post.id !== postId;
    //     });
    //     setPosts(newPosts);
    //   }
  }

  return { posts, isError,isLoading, handleDeletePost };
}
