'use client';
import { formatAmount } from '@/lib/utils';
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
    return (
      <div className='w-full'>
        <CountUp 
            end={amount} 
            duration={2.75} 
            decimals={2} 
            separator=" " 
            decimal=","
            suffix='EUR' 
            formattingFn={(value) => formatAmount(value)} 
        />
      </div>
    )
  }
  
  export default AnimatedCounter