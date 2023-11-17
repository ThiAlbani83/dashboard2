import BarChart from '@/components/BarChart'
import RecentOrders from '@/components/RecentOrders'
import TopCards from '@/components/TopCards'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
      <TopCards />
      <div className='p-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <BarChart />
        <RecentOrders />
      </div>
    </div>
  )
}

export default page