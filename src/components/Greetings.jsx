import useAuth from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import React from 'react'

const Greetings = ({className}) => {
  const currentHour = new Date().getHours();
    const {user} = useAuth()
    let greeting;
    if (currentHour >= 1 && currentHour < 12) {
        greeting = "Good morning,"
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good afternoon,"
    } else {
        greeting = "Good evening,"
    }
  return (
    <div>
      <p className={cn("text-2xl font-medium", className)}>
        {greeting} {user?.staff.first_name}
      </p>
    </div>
  );
}

export default Greetings