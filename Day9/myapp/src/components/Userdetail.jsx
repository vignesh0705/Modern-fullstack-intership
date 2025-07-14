import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Userdetail = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (response.ok) {
          const data = await response.json();
          setTitle(data.title);
        }
      } catch (error) {
        console.error("Error fetching title:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTitle();
  }, [id]);

  return (
    <div className="user-detail-container">
      {loading ? <p className="loading">Loading...</p> :
       <p className="user-title-text">{title}</p>}
    </div>
  );
};

export default Userdetail;