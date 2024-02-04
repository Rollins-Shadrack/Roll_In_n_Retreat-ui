import React from 'react'
import {Star} from 'lucide-react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const Loader = ({ className , size}) => {
  const sizeVariants = cva({
    variants: {
      size: {
        default: "w-8 h-8",
        sm: "w-14 h-14",
        lg: "w-24 h-24",
      },
    },
  });
    return <div className={cn("flex justify-center items-center w-full", className)}>
        <svg className={cn('w-12 h-12 text-black animate-spin', sizeVariants({size}))} viewBox="0 0 24 24">
            <Star/>
      </svg>
  </div>;
};

export default Loader