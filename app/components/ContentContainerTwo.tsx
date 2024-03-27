import React from "react";
import NoteExample from "./notes/NoteExample";

export default function ContentContainerTwo() {
  return (
    <div className="grid grid-cols-4 grid-rows-3 grid-flow-col">
      <div className="col-span-1 row-span-3 col-start-1 content-center">
        <NoteExample />
      </div>
      <div className="col-span-1 row-span-3 col-start-2">
        test
      </div>
      <div className="col-span-1 row-span-3 col-start-3">
        test
      </div>
      <div className="col-start-4 row-start-1 bg-yellow-400"> Onboarding has never been easier. </div>
      <div className="col-start-4 bg-yellow-600">
        Perfect for capturing intercompany processes, Pidge helps you onboard
        faster, keeping your employees confident with role specific
        documentation just a click away.
      </div>
      <div className="col-start-4 bg-fuchsia-800">Get started for free</div>
    </div>
  );
}
