import React, { useMemo, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Statistics from '../../components/dashboard/Statistics'
import Transactions from '../../components/dashboard/Transactions'
import ExpenseCategories from '../../components/dashboard/ExpenseCategories'
import { getCategories, reset } from '../../redux/categories/categorySlice';
import { getFewIncomes } from '../../redux/income/incomeSlice';
import { getFewTransactions } from '../../redux/transactions/transactionSlice';
import Spinner from '../../components/Spinner';
import MonthAnalytics from '../../components/dashboard/MonthAnalytics';
import Reports from '../../components/dashboard/Reports';
import Timer from '../../components/Timer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SectionHeader from '../../components/SectionHeader';
import { getUsers } from '../../redux/users/userSlice';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Button,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react";
import TremorBarChart from '../../components/charts/TremorBarChart';
import TremorPieChart from '../../components/charts/TremorPieChart';
import MoneySummary from '../../components/charts/MoneySummary';

const Admin = () => {
  const [selectedUsers, setselectedUsers] = useState([]);

  const isuserSelected = (user) =>
    selectedUsers.includes(user.name) || selectedUsers.length === 0;
  const dispatch = useDispatch();


  const { users, categories, isLoading, isError, message } = useSelector((state) => state.users);
  const { transactions } = useSelector((state) => state.transactions);


  const categories_data = useMemo(() => categories, [categories]);
  const transaction_data = useMemo(() => transactions, [transactions]);


  return (
    <>

      <MonthAnalytics />
      <Timer />
      <div className='my-6'>
        <TremorPieChart />
      </div>
      <ExpenseCategories categories={categories_data} />
      <Statistics />
      <div className="px-4 py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:mx-auto md:px-24 lg:px-8 lg:py-6">
        <MoneySummary />
      </div>
      <Transactions transactions={transaction_data} />

      <section className="px-4 py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:mx-auto md:px-24 lg:px-8 lg:py-6">
        <ToastContainer />
        <ToastContainer />

        <SectionHeader title={'Users'} />

        <div className="mx-6 overflow-hidden overflow-x-auto border border-gray-100 rounded">
          <Card>
            <MultiSelect
              onValueChange={setselectedUsers}
              placeholder="Select users..."
              className="max-w-xs"
            >
              {users.map((user) => (
                <MultiSelectItem key={user.name} value={user.name}>
                  {user.name}
                </MultiSelectItem>
              ))}
            </MultiSelect>
            <Table className="mt-6">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Id</TableHeaderCell>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell className="text-left">Email</TableHeaderCell>
                  <TableHeaderCell className="text-right">Profession</TableHeaderCell>
                  <TableHeaderCell className="text-right">Salary ($)</TableHeaderCell>
                  <TableHeaderCell className="text-right">Date</TableHeaderCell>
                  <TableHeaderCell className="text-right">Actions</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  .filter((user) => isuserSelected(user))
                  .map((user, index) => (
                    <TableRow key={user._id}>
                      <TableCell>  {index + 1}</TableCell>
                      <TableCell className="text-left">{user?.name}</TableCell>
                      <TableCell className="text-left">{user?.email}</TableCell>
                      <TableCell className="text-right">{user?.profession}</TableCell>
                      <TableCell className="text-right">{user?.salary}</TableCell>
                      <TableCell className="text-right">{moment(user?.updated_date).format("MMMM DD YYYY")}</TableCell>
                      <TableCell className="text-right">
                        <Link
                          className="my-6 text-xs"
                          to={`/dashboard/admin/users/view/${user._id}`}
                        >
                          <Button size="xs" variant="secondary" color="gray">
                            View
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      <div className="my-4">
        <TremorBarChart />
      </div>
      <Reports />
      </section >
    </>
  )
}

export default Admin