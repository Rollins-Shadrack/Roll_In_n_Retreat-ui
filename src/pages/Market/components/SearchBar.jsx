import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Search } from "lucide-react";

const SearchBar = () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="p-0 mt-6 max-w-fit border border-brandMidnight rounded-xl shadow-lg cursor-pointer">
            <div className="md:flex divide-x text-brandMidnight">
              <div className="flex justify-between p-6 gap-4 md:text-muted-foreground">
                <p className="flex justify-between text-base px-2">Search your accomodations or hotels</p>
                <Search className="text-2xl" />
              </div>
              <div className="flex justify-between p-6 gap-4 md:text-muted-foreground">
                <p className="flex justify-between text-base px-2">Current Location</p>
                <MapPin className="text-2xl" />
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="min-w-3/4">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
        
};

export default SearchBar;
