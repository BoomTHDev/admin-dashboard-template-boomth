import Card from '@/components/dashboard/card/Card'
import Chart from '@/components/dashboard/chart/Chart'
import Rightbar from '@/components/dashboard/rightbar/Rightbar'
import Transactions from '@/components/dashboard/transactions/Transactions'
import React from 'react'

type Props = {}

export default function DashboardPage({ }: Props) {
  return (
    <div className='flex gap-5 mt-5'>

      <div className='flex-3 flex flex-col gap-5'>

        <div className='flex gap-5 justify-between'>
          <Card />
          <Card />
          <Card />
        </div>

        <Transactions />
        <Chart />

      </div>

      <div className='flex-1'>
        <Rightbar />
      </div>

    </div>
  )
}