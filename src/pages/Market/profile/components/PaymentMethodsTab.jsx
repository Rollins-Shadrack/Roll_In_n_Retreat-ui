import React from "react";
import { Switch } from "@/components/ui/switch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MoreHorizontal, CreditCard, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PaymentCardForm from "./PaymentCardForm";

const defaultPaymentCards = [
  {
    id: 323,
    cardNumber: "**** **** **** 1234",
    expirationDate: "12/22",
    cardholderName: "John Doe",
    cvv: "123",
    isEnabled: true,
    isPrimary: true,
  },
  {
    id: 434,
    cardNumber: "**** **** **** 5678",
    expirationDate: "12/22",
    cardholderName: "John Doe",
    cvv: "123",
    isEnabled: false,
    isPrimary: false,
  },
  {
    id: 3232,
    cardNumber: "**** **** **** 9012",
    expirationDate: "12/22",
    cardholderName: "John Doe",
    cvv: "123",
    isEnabled: true,
    isPrimary: false,
  },
];

const PaymentMethods = () => {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const [pendingChange, setPendingChange] = React.useState(null);
  const [paymentCards, setPaymentCards] = React.useState(defaultPaymentCards);

  const handleSwitchChange = (idx, newEnabledState) => {
    setPendingChange({ idx, newEnabledState });
    setShowAlertDialog(true);
  };

  const handleConfirmChange = () => {
    if (pendingChange) {
      const newPaymentMethods = paymentCards.map((card, idx) =>
        idx === pendingChange.idx ? { ...card, isEnabled: pendingChange.newEnabledState } : card
      );
      setPaymentCards(newPaymentMethods);
    }
    setShowAlertDialog(false);
    setPendingChange(null);
  };

  const handleCancelChange = () => {
    setShowAlertDialog(false);
    setPendingChange(null);
  };

  const handlePrimaryChange = (idx) => {
    setPendingChange({ idx, newEnabledState: true, isPrimaryChange: true });
    setShowAlertDialog(true);
  };

  const handlePrimary = () => {
    if (pendingChange) {
      const newPaymentMethods = paymentCards.map((card, idx) => {
        if (idx === pendingChange.idx) {
          return { ...card, isPrimary: true, isEnabled: true };
        } else {
          return { ...card, isPrimary: false };
        }
      });

      setPaymentCards(newPaymentMethods);
      setShowAlertDialog(false);
      setPendingChange(null);
    }
  };

  return (
    <div className="grid grid-cols-1 max-w-4xl  mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {paymentCards.map((card, idx) => (
        <div key={idx} className={`card relative h-fit flex flex-col justify-between px-6 py-5 border-2 shadow-md rounded-3xl bg-gradient-to-r `}>
          <div className="flex justify-between">
            <div className="">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={pendingChange?.idx === idx ? pendingChange.newEnabledState : card.isEnabled}
                  onCheckedChange={(value) => handleSwitchChange(idx, value)}
                />
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit">
                <DropdownMenuGroup>
                  {!card.isPrimary && (
                    <DropdownMenuItem onClick={() => handlePrimaryChange(idx)}>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Make Primary</span>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem>
                    <Trash2 className="mr-2 h-4 w-4" />
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <span onClick={(e) => e.stopPropagation()}>Delete</span>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the selected card
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p className="text-base  font-medium">{card.cardNumber}</p>

          <div className="flex justify-between gap-5">
            <div className="flex-1 flex flex-col justify-end text-xs">
              <p className="text-xs font-medium">EXP {card.expirationDate}</p>
              <p className="text-xs font-medium">{card.cardholderName}</p>
              <p className="text-xs">{card.cvv}</p>
            </div>

            <div className="self-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 58 36" height="36" width="58">
                <circle fillOpacity="0.62" fill="#FFF" r="18" cy="18" cx="18"></circle>
                <circle fill="#000" r="18" cy="18" cx="40" opacity="0.36"></circle>
              </svg>
            </div>
          </div>

          {card.isPrimary && <Badge className="absolute -top-3 left-1 bg-blue-900"> Primary</Badge>}

          <AlertDialog open={showAlertDialog} onOpenChange={handleCancelChange}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {pendingChange?.isPrimaryChange ? "Make Card Primary" : pendingChange?.newEnabledState ? "Enable Card" : "Disable Card"}
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                {pendingChange?.isPrimaryChange
                  ? "Are you sure you want to make this card primary?"
                  : pendingChange?.newEnabledState
                  ? "Are you sure you want to enable this card?"
                  : paymentCards[pendingChange?.idx]?.isPrimary
                  ? "You can't disable this card. Set another card as primary first."
                  : "Are you sure you want to disable this card?"}
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={handleCancelChange}>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  disabled={pendingChange?.isPrimaryChange && paymentCards[pendingChange?.idx]?.isPrimary}
                  onClick={pendingChange?.isPrimaryChange ? handlePrimary : handleConfirmChange}>
                  {pendingChange?.isPrimaryChange ? "Confirm" : "Confirm Change"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ))}
      <div className={`card relative h-fit flex px-6 py-12 border-2 shadow-md rounded-3xl bg-gradient-to-r items-center justify-center`}>
        <PaymentCardForm />
      </div>
    </div>
  );
};

export default PaymentMethods;
