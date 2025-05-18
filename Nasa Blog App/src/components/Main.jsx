import React from "react";

export default function Main({ data }) {
  console.log(data);
  return (
    <div className="imgContainer">
      <img
        src={"/public/mars.webp"}
        alt={data.title || "bg-image"}
        className="bgImage"
      />
    </div>
  );
}
