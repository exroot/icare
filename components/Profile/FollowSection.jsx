import React from "react";
import Circle from "./Circle";
import "twin.macro";

const FollowSection = () => (
  <>
    <div tw="space-y-4">
      <div tw="flex flex-row">
        <p tw="text-button text-3xl font-bold">Siguiendo</p>
      </div>
      <div tw="flex flex-row flex-wrap">
        <Circle />
      </div>
    </div>
  </>
);

export default FollowSection;
