import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { baseURL } from "../utilitis/Url";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import ProductCard from "../components/Cards/ProductCard";

const MyCartPage = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/products/email/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setItem(data)
      })
  }, [user])

  return (
    <section>
      <div className="gadgetContainer pt-10">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {
            item?.map((p, index) => <ProductCard mycard={true} p={p} key={index} />)
          }
        </div>
      </div>
    </section>
  );
};

export default MyCartPage;
