import React, { useState, useEffect } from "react";
import axios from "axios";
import FormatPrice from "../../helper/FormatPrice";
import { NavLink } from "react-router-dom";

const MyOrders = () => {
  const API = "http://65.2.175.146:4000/api/v1";
  const [orders, setOrders] = useState(null);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API}/myorder`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data.order);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrder();
  }, []);
  console.log(orders);
  return (
    orders && (
      <div>
        {orders.map((order) => {
          return (
            <div
              key={order._id}
              className="mx-auto my-4 max-w-6xl p-5 bg-white"
            >
              <h2 className="text-3xl font-bold">Order Details</h2>
              <div className="mt-3 text-sm">
                Check the status of recent and old orders & discover more
                products
              </div>
              <div className="mt-8 flex flex-col overflow-hidden rounded-lg border border-gray-300 md:flex-row">
                <div className="w-full border-r border-gray-300 bg-gray-100 md:max-w-xs">
                  <div className="p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                      <div className="mb-4">
                        <div className="text-sm font-semibold">Order ID</div>
                        <div className="text-sm font-medium text-gray-700">
                          {order._id}
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm font-semibold">Date</div>
                        <div className="text-sm font-medium text-gray-700">
                          {order.createdAt.substring(0, 10)}
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm font-semibold">
                          Total amount
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                          <FormatPrice price={order.totalAmount} />
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm font-semibold">
                          Order status
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                          {order.orderStatus}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="p-8">
                    <ul className="-my-7 divide-y divide-gray-200">
                      {order.orderItems.map((product) => (
                        <li
                          key={product._id}
                          className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                        >
                          <div className="flex flex-1 items-stretch">
                            <div className="flex-shrink-0">
                              <img
                                className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                src={product.image}
                                alt={product.image}
                              />
                            </div>

                            <div className="ml-5 flex flex-col justify-between">
                              <div className="flex-1">
                                <p className="text-sm font-bold text-gray-900">
                                  {product.name}
                                </p>
                                <p
                                  className="mt-1.5 text-sm font-medium text-gray-500 w-7 h-7 rounded-full"
                                  style={{
                                    backgroundColor: product.color,
                                  }}
                                ></p>
                              </div>

                              <p className="mt-4 text-sm font-medium text-gray-500">
                                x {product.quantity}
                              </p>
                            </div>
                          </div>

                          <div className="ml-auto flex flex-col items-end justify-between">
                            <p className="text-right text-sm font-bold text-gray-900">
                              <FormatPrice price={product.price} />
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <hr className="my-8 border-t border-t-gray-200" />
                    <div className="space-x-4">
                      <NavLink
                        type="button"
                        to={"/myorders"}
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        View Orders
                      </NavLink>
                      <a
                        href={`${API}/orders/${order._id}/invoice`}
                        target="_blank"
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Download Invoice
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default MyOrders;
