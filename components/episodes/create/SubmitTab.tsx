import React from "react";

export default function SubmitTab({ hidden }: { hidden: boolean }) {
  return <div className={`${hidden ? "hidden" : ""}`}>SubmitTab</div>;
}
