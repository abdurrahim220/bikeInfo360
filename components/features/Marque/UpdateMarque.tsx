import React from "react";
import Marquee from "react-fast-marquee";

const UpdateMarque = () => {
  return (
    <div className="mb-2">
      <div className="text-2xl font-semibold bg-violet-200 py-2">
        <Marquee pauseOnHover speed={100}>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ratione atque provident perferendis natus ducimus nostrum veritatis quod, ea culpa!
        </Marquee>
      </div>
    </div>
  );
};

export default UpdateMarque;
