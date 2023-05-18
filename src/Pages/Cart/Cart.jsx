import React from "react";
import { useCartContext } from "../../context/cartContext";
import CartAmountToggle from "../../components/CartAmountToggle";
import FormatPrice from "../../helper/FormatPrice";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { isAuthenticated } = useUserContext();
  const {
    cart,
    removeItem,
    setIncreseQuantity,
    setDecreseQuantity,
    total_amount,
    shipping_fee,
    total_item,
  } = useCartContext();
  if (!isAuthenticated) {
    toast.error("Login first to place order");
  }
  return (
    <div className="bg-gray-100 dark:bg-gray-900  dark:nx-bg-neutral-900">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="lg:col-span-8 bg-white dark:bg-slate-600"
          >
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-t border-b border-gray-200"
            >
              {cart.map((product, productIdx) => (
                <div key={product._id} className="px-4">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-24 w-24 rounded-md object-contain object-center sm:h-38 sm:w-38"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a
                                href="#"
                                className="font-medium text-lg text-gray-700 dark:text-white"
                              >
                                {product.name}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p
                              className="text-gray-500 dark:text-gray-200 w-10 h-10 rounded-full"
                              style={{
                                backgroundColor: `${product.pickColor}`,
                              }}
                            ></p>
                          </div>
                          <div className="mt-1 flex items-end">
                            <p className="text-xs line-through font-medium text-gray-500 dark:text-gray-100">
                              <FormatPrice
                                price={
                                  product.price +
                                  (Math.floor(Math.random() * 3000) + 100000) *
                                    product.productsQuantity
                                }
                              />
                            </p>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              &nbsp;&nbsp;
                              <FormatPrice
                                price={product.price * product.productsQuantity}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="flex mb-2">
                    <div className="flex min-w-24 dark:text-white">
                      <CartAmountToggle
                        productsQuantity={product.productsQuantity}
                        increaseQuantity={() => setIncreseQuantity(product._id)}
                        decreaseQuantity={() => setDecreseQuantity(product._id)}
                      />
                    </div>
                    <div className="ml-4 flex flex-1 sm:ml-6 dark:text-white">
                      <button className="font-medium mr-4 " type="button">
                        SAVE FOR LATTER
                      </button>
                      <button
                        className="font-medium "
                        onClick={() => removeItem(product._id)}
                        type="button"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white dark:bg-slate-600 lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" px-4 py-3 sm:p-4 border-b border-gray-200 text-lg font-medium text-gray-900 dark:text-gray-200"
            >
              Price Details
            </h2>

            <div>
              <dl className=" space-y-1  px-6 py-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800 dark:text-gray-200">
                    Price ({total_item} item)
                  </dt>
                  <dd className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    <FormatPrice price={total_amount} />
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800 dark:text-gray-200">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700 dark:text-green-400">
                    {total_item > 0 ? (
                      <FormatPrice price={shipping_fee} />
                    ) : (
                      <FormatPrice price={0} />
                    )}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4 border-y border-dashed ">
                  <dt className="text-base font-medium text-gray-900 dark:text-white">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    {total_item > 0 ? (
                      <FormatPrice price={shipping_fee + total_amount} />
                    ) : (
                      <FormatPrice price={0} />
                    )}
                  </dd>
                </div>
                {isAuthenticated &&
                  (total_item > 0 ? (
                    <NavLink to={"/order"}>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        Create Order{" "}
                        <KeyboardDoubleArrowRightIcon
                          className="ml-2"
                          size={16}
                        />
                      </button>
                    </NavLink>
                  ) : null)}
              </dl>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Cart;
