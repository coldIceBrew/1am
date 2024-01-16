import React from "react";
import { UseFormRegister } from "react-hook-form";

export default function AudioTab({
  register,
  hidden,
}: {
  register: UseFormRegister<any>;
  hidden: boolean;
}) {
  return <div className={`${hidden ? "hidden" : ""}`}>AudioTab</div>;
}
