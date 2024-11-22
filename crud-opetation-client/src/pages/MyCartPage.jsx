import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { baseURL } from "../utilitis/Url";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const MyCartPage = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/products/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setItem(data)
      })
  }, [user])

  return (
    <div className="gadgetContainer pt-10">
      {
        item?.map(p => (
          <div key={p._id} className="mb-5 border">
            <h1>{p.name}</h1>
            <p>{p.email}</p>
          </div>
        ))
      }
    </div>
  );
};

export default MyCartPage;
