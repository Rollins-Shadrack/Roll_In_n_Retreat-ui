import React from 'react'
import { Loader } from 'lucide-react'
import { cn } from '@/lib/utils'

const AninamatedLoader = ({ className }) => {
  return (
    <div className={cn("absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]", className)}>
      <Loader className="animate-spin w-12 h-12"  />
    </div>
  )
}

export default AninamatedLoader;
