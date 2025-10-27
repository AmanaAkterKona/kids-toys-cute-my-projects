import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RightAside from "../../components/homelayouts/RightAside";
import ToysDetailsCard from "../../components/ToysDetailsCard";
import { useLoaderData, useParams } from "react-router";

const ToysDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [toys, setToys] = useState(null);

  useEffect(() => {
  
    const foundToy = data.find((item) => item.toyId === parseInt(id));
    setToys(foundToy);
  }, [data, id]);

  if (!toys) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl text-cyan-600 font-semibold">
        Loading toy details...
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto mb-6 bg-blue-50">
      <div className="px-5 bg-blue-100">
        <Navbar />
      </div>

      <main className="w-11/12 mx-auto grid grid-cols-12">
        <aside className="col-span-3">
          <RightAside />
        </aside>

        <section className="col-span-9">
          <h2 className="font-bold mb-5 text-2xl">Toys Details</h2>
          <ToysDetailsCard toys={toys} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ToysDetails;
