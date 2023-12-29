import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "antd";
import { useState } from "react";
import { addItem, removeItem } from "../redux/slice/CartSlice";
import { useDispatch } from "react-redux";
import { makeUserOut } from "../redux/slice/UserSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const items = useSelector((store) => store.cart);
  const isLogedIn = useSelector((store) => store.user.isLogedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddItem = (item) => {
    console.log("first");
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  const handleLogOut = () => {
    dispatch(makeUserOut());
    localStorage.setItem("login", false);
    navigate("/signin");
  };

  return (
    <>
      <div className="nav-bar flex ">
        <div className="flex">
          <img
            src={window.location.origin + "/Images/restaurant_24px.svg"}
            alt="logo"
            className="filter-green m-2 p-2 fill-white-500 bg-red"
          />
          <h2 className="p-2 m-2 text-[30px]">Food Restaurent</h2>
        </div>
        <div className="flex mt-5">
          <div>
            <button
              className="p-5 m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={showModal}
            >
              {items.quantity}
            </button>
            <Modal
              title="Order Summary"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <button
                  key="submit"
                  type="primary"
                  onClick={handleOk}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Save And Checkout
                </button>,
                <button key="back" onClick={handleCancel}>
                  Cancel
                </button>,
              ]}
            >
              {items.items.map((item) => {
                return (
                  <div className="flex justify-around text-[20px]">
                    <div className="m-2 p-2">{item.name}</div>

                    <div className="m-2 p-2"> {item.quan}</div>
                    <div>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                        onClick={() => handleAddItem(item)}
                      >
                        +
                      </button>
                      <button
                        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="flex text-[20px]">
                <div className="m-2 p-2">Total</div>
                <div className="m-2 p-2"> :</div>
                <div className="m-2 p-2">{items.total}</div>
              </div>
            </Modal>
          </div>
          <div>
            {isLogedIn ? (
              <button
                className="p-5 m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleLogOut()}
              >
                Log Out
              </button>
            ) : (
              <button className="p-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5">
                <Link to="/signin"> Log In</Link>
              </button>
            )}
          </div>
        </div>
      </div>

      {<Outlet />}
    </>
  );
}

export default Header;
