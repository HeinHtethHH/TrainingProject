import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post"
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";

function App() {
  // const DB_NAME = "PostDB";
  const END_POINT = "http://localhost:9000/posts"
  let [posts, setPosts] = useState([]);

  const addnewPost = async (post) => {
    await fetch(END_POINT, {
      method: "POST",
      body: JSON.stringify(post)
    });
    setPosts([post, ...posts]);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await (await fetch(END_POINT)).json();
        // const data = await res.json();
        setPosts(posts);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData(); // call the async function
  }, []); // run once when component mounts

  // useEffect(() => {
  //   localStorage.setItem(DB_NAME, JSON.stringify(posts));
  // }, [posts]);

  const postDeleteHandler = async (id) => {
    await fetch(END_POINT + "/" + id, {
      method: "DELETE"
    });
    // console.log("User id is ", id);
    setPosts(posts.filter(post => post.id !== id));
  }

  const updatePostHadnler = async (updatePost) => {
    await fetch(END_POINT + "/" + updatePost.id, {
      method: "PATCH",
      body: JSON.stringify(updatePost),
      header: {
        "content-type": "application/json"
      }
    });
    setPosts(posts.map(po => po.id === updatePost.id ? updatePost : po))

  }

  return (
    <div className="container">
      <h1 className="text-center test-info">Posts</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Post posts={posts} removePost={postDeleteHandler} />} />
          <Route path="/add" element={<AddPost AddPost={addnewPost} />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/post/edit/:id" element={<EditPost updatePost={updatePostHadnler} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
