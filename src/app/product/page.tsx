"use client";
import { fetchProduct } from "@/api/product";
import React, { useEffect, useState } from "react";
import { FixedSizeList as VirtualList } from "react-window";
import List from "./components/list";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
};

export default function Page() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const itemsPerPage = 100;

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchProduct(itemsPerPage);
      setData(fetchedData.products);
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return (
      <p className="pt-6 laptop:pt-14 mx-auto max-w-7xl px-4 sm_tablet:px-6 laptop:px-8 pb-16">
        Loading...
      </p>
    );
  }

  return (
    <section className="pt-6 laptop:pt-14 mx-auto max-w-7xl px-4 sm_tablet:px-6 laptop:px-8 pb-16">
      <h1 className="text-center text-lg uppercase font-semibold leading-6 text-secondary">
        Product List
      </h1>

      <div className="mt-8">
        {data?.length > 0 ? (
          <>
            <div className="grid grid-cols-7 gap-y-6 gap-x-4 pb-2">
              <div className="col-span-2">
                <p className="font-semibold truncate uppercase">Title</p>
              </div>
              <div>
                <p className="font-semibold truncate uppercase">Brand</p>
              </div>
              <div className="col-span-2">
                <p className="font-semibold truncate uppercase">Description</p>
              </div>
              <div>
                <p className="font-semibold truncate uppercase">Ratings</p>
              </div>
              <div>
                <p className="font-semibold truncate uppercase">Price</p>
              </div>
            </div>
            <VirtualList
              useIsScrolling
              height={525}
              itemCount={data.length}
              itemSize={35}
              width={1216}
              itemData={data}
            >
              {List}
            </VirtualList>
          </>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </section>
  );
}
