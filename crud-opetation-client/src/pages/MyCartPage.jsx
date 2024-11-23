import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { baseURL } from "../utilitis/Url";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import ProductCard from "../components/Cards/ProductCard";

const MyCartPage = () => {
  const { user } = useAuth() || {};
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`https://giga-gadgets-server-crud.vercel.app/products/email/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data)
      })
  }, [user])

  return (
    <section>
      <div className="gadgetContainer pt-10">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {
            products?.map((p, index) => <ProductCard products={products} setProducts={setProducts} mycard={true} p={p} key={index} />)
          }
        </div>
      </div>
    </section>
  );
};

export default MyCartPage;
