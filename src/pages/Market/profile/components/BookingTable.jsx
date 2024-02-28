import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { salonBookings } from "@/constants/data/market/profile";

const BookingTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent bookings.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >Hotel Name</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Staff</TableHead>
          <TableHead>Date & Time</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody >
        {salonBookings.map((booking, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium whitespace-nowrap">{booking.salonName}</TableCell>
            <TableCell className="font-medium whitespace-nowrap">{booking.serviceName}</TableCell>
            <TableCell className="flex items-center justify-center flex-col">
              <Avatar>
                <AvatarImage src={booking.staffImage} alt="opensaas" className="object-cover" />
                <AvatarFallback>OpenSaaS</AvatarFallback>
              </Avatar>
              <p className="text-xs">{booking.staffName}</p>
            </TableCell>
            <TableCell className="text-xs">{booking.dateTime}</TableCell>
            <TableCell className="text-right">{booking.amountPaid}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BookingTable;
