import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from './ui/button'

const FeaturedButton = ({ name, className, icon, type}) => {
  return (
    <Button
      type={type}
      className={cn(
        "bg-brandSunset text-white font-medium rounded-lg hover:text-brandMist hover:bg-brandMidnight flex items-center space-x-1",
        className
      )}>
      {icon && React.createElement(icon, { size: "20" })} <p>{name}</p>
    </Button>
  );
}

export default FeaturedButton