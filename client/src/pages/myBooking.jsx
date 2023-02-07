import React from "react";
import { useParams } from "react-router-dom"
import { Card, Table } from 'flowbite-react'
import logo from '../assets/Icon.png';
import bill from '../assets/bill 1.png';
import { useQuery } from "react-query";
import { API } from "../config/api";

export default function BookingPage() {
    
    let { data: order } = useQuery('/orderCache', async () => {
        const response = await API.get('/order')
        console.log(response)
        return response.data.data;
    })
    

  return (
    <>
        <div className="bg-grey-d flex justify-center py-5 w-full h-screen">
            <div className="w-[1035px]">
                <Card>
                    <div className="flex p-2">
                        <img className="w-20" src={logo} alt="stempel" />
                        <h5 className="ml-auto font-bold">Booking</h5>
                    </div>
                    <div className="flex">
                        <div>
                            <h4>{order?.housy.name}</h4>
                            <p>Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren, Tangerang Selatan</p>
                            <button>Waiting Payment</button>
                        </div>
                        <div>
                            <div>
                                <h6>Check-In</h6>
                                <h6>Check-Out</h6>
                            </div>
                        </div>
                        <div>
                            <h6>Amenities</h6>
                            <h6>Type of Rent</h6>
                        </div>
                        <div>
                            <img src={bill} alt="bill" />
                        </div>
                    </div>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                No.
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Full Name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Gender
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Phone
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    1
                                </Table.Cell>
                                <Table.Cell>
                                    Nino
                                </Table.Cell>
                                <Table.Cell>
                                    Male
                                </Table.Cell>
                                <Table.Cell>
                                    08888888888213
                                </Table.Cell>
                                <Table.Cell>
                                    <span>Long time rent: 1 Year</span>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <span>Total: Rp. 3.000.000</span>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <button className="focus:outline-none text-white font-bold bg-purple-b rounded-lg text-sm px-5 py-2.5">Pay</button>
                </Card>
            </div>
        </div>
    </>
  );
}
