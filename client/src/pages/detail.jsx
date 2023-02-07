import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { Carousel } from "flowbite-react";
import { UserContext } from "../contexts/userContext";
import room from "../assets/room1.png";
import room1 from "../assets/room2.png";
import room2 from "../assets/room3.png";
import room3 from "../assets/room4.png";
import BookNow from "../component/booknow";
import FormSignIn from "../component/auth/signin";


export default function PageDetail() {
  const { id } = useParams();
  const [showBooking, setShowBooking] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false)
  const [state, _] = useContext(UserContext);

  const { data: housy } = useQuery('/houseCache', async () => {
    const response = await API.get(`/house/${id}`)
    return response.data.data;
  })


  useEffect (()=> {
    if (state.isLogin === true) {
      setShowSignIn(false)
    }
  },[state.isLogin])

  return (
    <>
      <div className="bg-grey-d flex justify-center py-5 w-full h-full">
        <div className="max-w-5xl rounded-lg ">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-3">
            <Carousel slide={false}>
              <img src={housy?.thumbnail} alt="..." />
              <img src={room} alt="..." />
              <img src={room} alt="..." />
              <img src={room} alt="..." />
              <img src={room} alt="..." />
            </Carousel>
          </div>
          <div className="grid grid-cols-3 gap-2 ">
            <img src={room1} alt="" />
            <img src={room2} alt="" />
            <img src={room3} alt="" />
          </div>
          

          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {housy?.name}
              </h5>
            </div>
            <div className="flex">
              <h6 className="font-bold">
                Rp. {housy?.price}.000.000/<span>{housy?.typerent}</span>
              </h6>
              <div className="flex justify-end">
                <h6>{housy?.bedroom} Beds</h6>
                <h6>{housy?.bathroom} Baths</h6>
                <h6> Area</h6>
              </div>
            </div>
            <p className="mb-3 font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            {state.isLogin? (
              <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowBooking(true);
                }}
                className="focus:outline-none text-white font-bold bg-purple-b rounded-lg text-sm px-5 py-2.5"
              >
                Book Now
              </button>
            </div>
            ) : (
              <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowSignIn(true);
                }}
                className="focus:outline-none text-white font-bold bg-purple-b rounded-lg text-sm px-5 py-2.5"
              >
                Book Now
              </button>
            </div>
            )}
            
          </div>
        </div>
        {showBooking && <BookNow show={showBooking} setShow={setShowBooking} />}
        {showSignIn && <FormSignIn show={showSignIn} setShow={setShowSignIn} />}
      </div>
    </>
  );
}
