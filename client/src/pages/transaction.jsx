import React from "react";
import { Table } from "flowbite-react";

export default function IncomeTransaction() {
  return (
    <>
      <div className="bg-grey-d flex justify-center py-5 w-full h-screen">
        <div className="w-11/12 h-[500px] md:flex-row px-5 py-4">
          <h3 className="font-bold text-3xl">Incoming Transaction</h3>
          <div className="w-full mt-4 ">
            <Table striped={true}>
              <Table.Head>
                <Table.HeadCell>No</Table.HeadCell>
                <Table.HeadCell>Users</Table.HeadCell>
                <Table.HeadCell>Type of Rent</Table.HeadCell>
                <Table.HeadCell>Bukti Transfer</Table.HeadCell>
                <Table.HeadCell>Status Payment</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Hima
                  </Table.Cell>
                  <Table.Cell>Month</Table.Cell>
                  <Table.Cell>bca.png</Table.Cell>
                  <Table.Cell>Approve</Table.Cell>
                  <Table.Cell>e</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    William
                  </Table.Cell>
                  <Table.Cell>Year</Table.Cell>
                  <Table.Cell>mandiri.png</Table.Cell>
                  <Table.Cell>Approve</Table.Cell>
                  <Table.Cell>
                    <div
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      e
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>3</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Archewe Johnson
                  </Table.Cell>
                  <Table.Cell>Year</Table.Cell>
                  <Table.Cell>bni.png</Table.Cell>
                  <Table.Cell>Cancel</Table.Cell>
                  <Table.Cell>
                    <div
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      e
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>4</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Mayonaise
                  </Table.Cell>
                  <Table.Cell>Month</Table.Cell>
                  <Table.Cell>bi.png</Table.Cell>
                  <Table.Cell>Pending</Table.Cell>
                  <Table.Cell>
                    <div
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      e
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>5</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Angel
                  </Table.Cell>
                  <Table.Cell>Days</Table.Cell>
                  <Table.Cell>permata.png</Table.Cell>
                  <Table.Cell>Pending</Table.Cell>
                  <Table.Cell>
                    <div
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      e
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
