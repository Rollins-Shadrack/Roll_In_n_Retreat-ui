import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const Profile = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">OverView</TabsTrigger>
          <TabsTrigger value="bio">Team Assignment</TabsTrigger>
          <TabsTrigger value="bio">Preference & Social</TabsTrigger>
          <TabsTrigger value="bio">Banking Details</TabsTrigger>
          <TabsTrigger value="bio">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">Make changes to your account here</TabsContent>
        <TabsContent value="bio">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default Profile