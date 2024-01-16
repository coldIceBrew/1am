import { Loader2 } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="min-h-full flex justify-center items-center">
      <Loader2 className="animate-spin h-16 w-16 text-gray-500"></Loader2>
    </div>
  );
}
