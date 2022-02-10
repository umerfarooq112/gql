import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useGetAllPosts } from "./hooks/useGetAllPosts";

function App() {
  const { error, data, loading } = useGetAllPosts();
  console.log(data);
  if (loading) return <h2>Loading</h2>;
  if (error) return <h2>error</h2>;

  return (
    <div className="App">
      {data.getAllPosts.map((item) => (
        <Link to={`/singlepost/${item.id}`}>
          <div
            style={{
              background: "#f0f0f0",
              width: "300px",
              margin: "auto",
              cursor: "pointer",
            }}
          >
            <h2> {item.title}</h2>
            <h2> {item.description}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default App;
