/* eslint-disable @next/next/no-img-element */
import { StarRating } from "@/components/assets/Icons";
import { classNames } from "@/components/helper/classNames";
import { ListChildComponentProps } from "react-window";

interface Product {
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
}

export default function List({
  index,
  style,
  data,
  isScrolling,
}: ListChildComponentProps<Product[]>) {
  const calculateDiscountedPrice = (
    originalPrice: number,
    discountPercentage: number
  ): number => {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
  };

  return (
    <div key={index} style={{ ...style }}>
      <div className="grid grid-cols-7 gap-y-6 gap-x-4">
        <div className="flex gap-x-2 col-span-2">
          <img
            src={data[index]?.thumbnail}
            alt={data[index]?.brand}
            className="h-4 w-4 asc object-cover object-center group-hover:opacity-75"
          />
          <p className="font-semibold text-xs truncate">
            {`${data[index]?.title} `}
            <span className="text-xs text-gray-500">
              ({data[index]?.stock})
            </span>
          </p>
        </div>
        <div>
          <p className="text-xs">{data[index]?.brand}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs text-gray-400 truncate">
            {data[index]?.description}
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rate) => (
              <StarRating
                key={data[index]?.rating}
                className={classNames(
                  Math.round(data[index]?.rating) > rate
                    ? "text-yellow-400"
                    : "text-gray-200",
                  "h-4 w-4 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="text-white text-xs font-bold">
            ({Math.round(data[index]?.rating)})
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <p className="text-xs font-bold text-gray-500 line-through decoration">
              ${data[index]?.price}
            </p>
            <p className="text-xl font-bold text-orange-500">
              $
              {Math.round(
                calculateDiscountedPrice(
                  data[index]?.price,
                  Math.round(data[index]?.discountPercentage)
                )
              )}
            </p>
            <p className="text-xs text-gray-200">
              -{Math.round(data[index]?.discountPercentage)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
