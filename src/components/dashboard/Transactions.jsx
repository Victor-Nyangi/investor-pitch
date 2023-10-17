import moment from 'moment'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import MultiLine from '../charts/MultiLine'

const Transactions = ({ transactions }) => {
  return (
    <>
<div className='my-6 mx-10'>
          <MultiLine />
</div>



    </>
  )
}

export default memo(Transactions)