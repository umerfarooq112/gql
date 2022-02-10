import React from "react";
import { gql, useMutation } from "@apollo/client";
const createPosts = gql`
  mutation createPosts($title: String, $description: String) {
    createPosts(input: { title: $title, description: $description }) {
      title
      description
    }
  }
`;
const CreatePost = () => {
  let title, description;
  const [createPost, { data, loading, error }] = useMutation(createPosts);
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({
      variables: { title: title.value, description: description.value },
    });
  };
  console.log(data);
  return (
    <>
      <div
        style={{
          background: "#f0f0f0",
          width: "300px",
          margin: "auto",
          cursor: "pointer",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input ref={(value) => (title = value)} id="title" />
          <input ref={(value) => (description = value)} id="description" />
          <br />
          <button type="submit">Add Video</button>
        </form>
      </div>

      {loading ? (
        <div
          style={{
            background: "#f0f0f0",
            width: "300px",
            margin: "auto",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          Loading....
        </div>
      ) : (
        <div
          style={{
            background: "#f0f0f0",
            width: "300px",
            margin: "auto",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <h2> {data?.createPosts.title}</h2>
          <h2> {data?.createPosts.description}</h2>
        </div>
      )}
    </>
  );
};

export default CreatePost;
