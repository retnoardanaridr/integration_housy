import React, { useContext, useState} from "react";
import { useQuery } from 'react-query';
import { API } from '../config/api';
import people from '../assets/name.png';
import msg from '../assets/message.png';
import key from '../assets/pss.png';
import status from '../assets/ve.png';
import gender from '../assets/gender.png';
import number from '../assets/call.png';
import maps from '../assets/addrs.png';
import ChangePassword from "../component/modalPassword";
import { UserContext } from "../contexts/userContext";


export default function MyProfile() {
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  
  let { data: profile } = useQuery('profileCache', async () => {
    const response = await API.get('/user', {
      headers: {
        Authorization: `Bearer ${state.user.token}`
      }
    });
    return response.data.data;
  })

  let { data: updated} = useQuery('updateCache', async () => {
    const response = await API.patch('user', {
      headers: {
        Authorization: `Bearer ${state.user.token}`
      }
    });
    return response.data.data;
  })


  return (
    <>
      <div className="bg-grey-d flex justify-center py-5 w-full h-screen">
        <div className="flex justify-between w-[800px] h-[500px] bg-white border rounded-lg shadow-md md:flex-row">
          <div>
            <h5 className="mb-5 pt-3 pl-4 text-2xl font-bold">Personal Info</h5>
            <div className="flex items-center pl-4 mb-4">
              <img className="w-[25px] h-[25px]" src={people} alt="" />
              <div className="pl-3">
                <p className="text-md font-medium">{profile?.fullname}</p>
                <p className="text-sm font-normal">Full name</p>
              </div>
            </div>
            <div className="flex items-center pl-4 mb-4">
              <img className="w-[25px] h-[25px]" src={msg} alt="" />
              <div className="ml-3">
                <p className="text-md font-medium">{profile?.email}</p>
                <p className="text-sm font-normal">Email</p>
              </div>
            </div>
            <div className="flex items-center pl-4 mb-4">
              <img className="w-[25px] h-[25px]" src={key} alt="" />
              <div className="ml-3">
                <button onClick={() => setShowModal(true)} className="text-md text-blue-900 hover:text-blue-400 font-medium">Change Password</button>
                <p className ="text-sm font-normal">Password</p>
              </div>
            </div>
            <div className="flex items-center pl-4 mb-4">
              <img className="w-[25px] h-[25px]" src={status} alt="" />
              <div className="ml-3">
                <p className="text-md font-medium">{state.user.listas}</p>
                <p className="text-sm font-normal">Status</p>
              </div>
            </div>
            <div className="flex items-center pl-4 mb-4">
              <img className="w-[25px] h-[25px]" src={gender} alt="" />
              <div className="ml-3">
                <p className="text-md font-medium">{profile?.gender}</p>
                <p className="text-sm font-normal">Gender</p>
              </div>
            </div>
            <div className="flex items-center pl-4 mb-4">
              <img className="w-[25px] h-[25px]" src={number} alt="" />
              <div className="ml-3">
                <p className="text-md font-medium">{profile?.phone}</p>
                <p className="text-sm font-normal">Mobile Phone</p>
              </div>
            </div>
            <div className="flex items-center pl-4 mb-4">
              <img className="w-[25px] h-[25px]" src={maps} alt="" />
              <div className="ml-3">
                <p className="text-md font-medium">{profile?.address}</p>
                <p className="text-sm font-normal">Address</p>
              </div>
            </div>
          </div>
          <div className="p-3">
            <img
              className="w-64 rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-lg"
              src={profile?.image}
              alt="myProfile"
            />
            <button className="focus:outline-none w-full text-white font-bold bg-purple-b rounded-lg text-sm mt-2 px-5 py-2.5">
              Change Photo Profile
            </button>
          </div>
          { showModal &&
            <ChangePassword 
            show={showModal}
            setShow={setShowModal}
            />
          }
        </div>
      </div>
    </>
  );
}
