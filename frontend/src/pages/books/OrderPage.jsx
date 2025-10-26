import React from "react";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/ordersApi";
import { useAuth } from "../../context/AuthContext";

const OrderPage = () => {
  const { currentUser } = useAuth();
  const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (isError) return <div className="text-center text-red-600 py-10">Error getting orders data</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>

      {orders.length === 0 ? (
        <div>No orders found!</div>
      ) : (
        <div className="flex flex-col gap-6">
          {orders.map((order, index) => (
            <div
              key={order._id}
              className="rounded-lg border p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Left side: Order summary */}
                <div className="flex flex-col gap-2">
                  <p className="p-1 bg-blue-600 text-white w-10 text-center rounded">#{index + 1}</p>
                  <h3 className="text-lg font-semibold">Order ID: {order._id}</h3>
                  <p className="text-gray-600">Name: {order.name}</p>
                  <p className="text-gray-600">Email: {order.email}</p>
                  <p className="text-gray-600">Phone: {order.phone}</p>
                </div>

                {/* Right side: Price + Address */}
                <div className="flex flex-col gap-2 text-gray-700 sm:text-right">
                  <p className="font-medium">
                    Total Price:{" "}
                    <span className="text-blue-600 font-semibold">${order.totalPrice}</span>
                  </p>
                  <p className="text-gray-600">
                    {order.address.city}, {order.address.state}
                  </p>
                  <p className="text-gray-600">
                    {order.address.country} - {order.address.zipcode}
                  </p>
                </div>
              </div>

              {/* Products Section */}
              <div className="mt-3 border-t pt-3">
                <h4 className="font-semibold mb-1">Products:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {order.productIds.map((id) => (
                    <li key={id}>{id}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
