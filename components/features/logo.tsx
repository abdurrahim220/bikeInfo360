import React from "react";
import Image from "next/image";

import logo from "../assets/logo.png";

interface Props {
  h: number;
  w: number;
}

export default function Logo({ h, w }: Props) {
  return (
    <div>
      <Image src={logo} alt="logo" className={`h-${h} w-${w}`} />
    </div>
  );
}
