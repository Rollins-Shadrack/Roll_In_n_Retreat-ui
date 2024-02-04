import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";

const ErrorMessageAlert = ({ error }) => {
  if (!error) return null;
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error?.data?.message || error?.data?.error || error?.data || error?.message || JSON.stringify(error)}</AlertDescription>
    </Alert>
  );
};

export default ErrorMessageAlert;
