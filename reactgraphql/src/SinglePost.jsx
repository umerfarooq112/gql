import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useFindPostById } from "./hooks/useGetSinglePost";

const 

function SinglePost() {
  let { id } = useParams();
  console.log(id);
  const { error, data, loading } = useFindPostById(id);
  const { title, description } = loading ? "" : data.findPost;

  const handleDelete = (id) => {
    console.log(id);
  };

  if (loading)
    return (
      <div
        style={{
          background: "#f0f0f0",
          width: "300px",
          margin: "auto",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        Loading...
      </div>
    );
  if (error) return <div>error...</div>;
  return (
    <div
      style={{
        background: "#f0f0f0",
        width: "300px",
        margin: "auto",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      <h2> {title}</h2>
      <h2> {description}</h2>
      <button
        style={{ background: "red", padding: "10px", color: "white" }}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default SinglePost;
