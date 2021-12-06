import React, { useState, useEffect } from "react";
import BumpButton from "../../components/Buttons/BumpButton.jsx";

import NotLoggedInNavbar from "../../components/NavbarForNonLoggedInUsers";
import "twin.macro";

export default function Basic() {
  return (
    <>
      <NotLoggedInNavbar />
      <p>Basic starter page</p>
    </>
  );
}
