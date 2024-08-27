import React from "react";

const footer = () => {
  const year = new Date().getFullYear();

  return <footer className="bg-dark text-white text-center">{`Copyright © Your Website ${year}`}</footer>;
};

export default footer;