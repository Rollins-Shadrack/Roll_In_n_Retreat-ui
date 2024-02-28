import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FeaturedButton from "@/components/FeaturedButton";
import { Button } from "@/components/ui/button";
import { Contact } from "lucide-react";

const AssignTask = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-brandSunset text-white font-medium rounded-lg hover:text-brandMist hover:bg-brandMidnight flex items-center space-x-1">
          <Contact />
          <p className="">Assign Task</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <FeaturedButton name="Save Changes" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AssignTask;
