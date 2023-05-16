import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/productContext";
import ImageSlider from "../../components/ImageSlider";
import PageNavigation from "../../components/PageNavigation";
import FormatPrice from "../../helper/FormatPrice";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import SecurityIcon from "@mui/icons-material/Security";
import StoreIcon from "@mui/icons-material/Store";
import Stars from "../../components/Stars";
import AddToCart from "../../components/AddToCart";

const API = "https://65.2.175.146:4000/api/v1";
const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();
  const {
    category,
    colors,
    company,
    description,
    featured,
    images,
    name,
    price,
    reviews,
    stars,
    stock,
  } = singleProduct;
  console.log(singleProduct);
  useEffect(() => {
    getSingleProduct(`${API}/product/${id}`);
  }, []);

  return (
    <div className=" w-[100vw] py-6 bg-gray-200 text-black">
      <PageNavigation title={name} />
      <div className="product-container bg-gray-50  rounded-2xl w-[80%] mx-auto flex flex-wrap justify-around py-20">
        <div className="image-container  basis-[40%] flex justify-center py-10">
          <ImageSlider images={images} />
        </div>
        <div className="product-details basis-[40%] space-y-3">
          <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
            {name}
          </h2>
          <Stars stars={stars} reviews={reviews} />
          <div className="Product-price font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
            MRP :
            <del className="mx-1">
              <FormatPrice
                price={
                  price + (Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000)
                }
              />
            </del>
          </div>
          <p className="text-heading pr-2 text-base font-bold md:pr-0 text-lg lg:pr-2 2xl:pr-0 ">
            Deal of the Day:{" "}
            <span>
              <FormatPrice price={price} />
            </span>
          </p>
          <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
            <p className="text-lg font-medium">Description </p>
            {description}
          </p>

          <div className="service-details flex justify-between ">
            <div className="basis-[20%] rounded-md p-1 m-2 bg-gray-800 text-white flex flex-col items-center gap-2 px-1">
              <div className="bg-green-400 w-[50%] rounded-full p-2 text-center">
                <LocalShippingIcon />
              </div>
              <p className="text-sm text-center">Free Delivery</p>
            </div>
            <div className="basis-[20%] rounded-md p-1 m-2 bg-gray-800 text-white flex flex-col items-center gap-2 px-1">
              <div className="bg-pink-300 w-[50%] rounded-full p-2 text-center">
                <PublishedWithChangesIcon />
              </div>
              <p className="text-sm text-center">
                {" "}
                {Math.floor(Math.random() * (15 - 3 + 1)) + 3} Days Replacement
              </p>
            </div>
            <div className="basis-[20%] rounded-md p-1 m-2 bg-gray-800 text-white flex flex-col items-center gap-2 px-1">
              <div className="bg-yellow-400 w-[50%] rounded-full p-2 text-center">
                <SecurityIcon />
              </div>
              <p className="text-sm text-center">
                {Math.floor(Math.random() * (2 - 1 + 1)) + 1} Warranty
              </p>
            </div>
            <div className="basis-[20%] rounded-md p-1 m-2 bg-gray-800 text-white flex flex-col items-center gap-2 px-1">
              <div className="bg-red-400 w-[50%] rounded-full p-2 text-center">
                <StoreIcon />
              </div>
              <p className="text-sm text-center">Connect to Store</p>
            </div>
          </div>
          <div className="product-avaliblity">
            <p
              className={`${
                stock > 0 ? "bg-green-600 " : "bg-red-600 "
              } text-lg font-semibold w-[40%]  text-center rounded-md text-white mx-auto`}
            >
              {stock > 0 ? "Available" : "Not Available"}
            </p>
          </div>
          <hr className="w-[90%] mx-auto my-3" />
          {stock > 0 && <AddToCart product={singleProduct} />}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
