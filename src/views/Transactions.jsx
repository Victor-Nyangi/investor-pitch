import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SectionHeader from "../components/SectionHeader";
import moment from 'moment';
import Pagination from "../components/Pagination";
import {
  Card,
  Title,
  Text,
  Flex,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Color,
} from "@tremor/react";
const Transactions = () => {

  const colors = {
    Expense: "rose",
    Income: "emerald",
  };



  const { transactions, isLoading, isError, message } = useSelector(
    (state) => state.transactions
  );


  return (
    <>
      <section>
        <SectionHeader title={'Transactions'} input_field={true} data_title={'transactions'} />

        <div className="mx-6 overflow-hidden overflow-x-auto ">
          {/* <table className="min-w-full text-sm divide-y divide-gray-200 border">
            <thead>
              <tr className="bg-gray-700 rounded-md text-white">
                <th className="sticky left-0 px-4 py-2 text-left">
id
                </th>
                <th className="px-4 py-2 font-medium text-left text-white">
                  Name
                </th>
                <th className="px-4 py-2 font-medium text-left text-white">
                  Type
                </th>
                <th className="px-4 py-2 font-medium text-left text-white">
                  Description
                </th>
                <th className="px-4 py-2 font-medium text-left text-white">
                  Amount
                </th>
                <th className="px-4 py-2 font-medium text-left text-white">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions &&
                transactions.map((transaction, index) => (
                  <tr key={transaction._id}>
                    <td className="px-4 py-2 font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900">
                      {transaction?.name}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                    {transaction?.type}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {transaction?.description}
                    </td>
                    <td className={`px-4 py-2 text-gray-700 transition-colors duration-200 ${transaction.type === "Income" ? "text-green-500 hover:text-green-800": "text-red-500 hover:text-red-800" }`}
          aria-label={transaction?.total}>
                      {`Ksh ${transaction?.total}`}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {moment(transaction?.updated_date).format("MMMM Do YYYY")}
                    </td>

                  </tr>
                ))}
            </tbody>
          </table> */}
          <Card>
            <Flex justifyContent="start" className="space-x-2">
              <Title>Purchases</Title>
              <Badge color="gray">8</Badge>
            </Flex>
            <Text className="mt-2">Overview of this month's purchases</Text>

            <Table className="mt-6">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Transaction ID</TableHeaderCell>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                  <TableHeaderCell>Amount</TableHeaderCell>
                  <TableHeaderCell>Date</TableHeaderCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {transactions && transactions.map((transaction, index) => (
                  <TableRow key={transaction._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>  {transaction?.name}</TableCell>
                    <TableCell>
                      <Badge color={colors[transaction?.type]} size="xs">
                        {transaction?.type}
                      </Badge>
                    </TableCell>
                    <TableCell> {transaction?.description}</TableCell>
                    <TableCell className={`px-4 py-2 text-gray-700 transition-colors duration-200 ${transaction.type === "Income" ? "text-green-500 hover:text-green-800" : "text-red-500 hover:text-red-800"}`}>{`Ksh ${transaction?.total}`}</TableCell>
                    <TableCell>
                      {moment(transaction?.updated_date).format("MMMM Do YYYY")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>


        <Pagination />
        {/* <Pagination
        currentPage={currentPage}
        totalCount={expenses.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /> */}
      </section>
    </>
  );
};


export default Transactions