
import { useState } from "react";
import Modal from "./Modal";

export default function ProjectHover({ src, title, description }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(modal => !modal);
  }

  return (
    <div className="float-left m-12 relative">
      <div className="relative group">
        <a onClick={handleToggle} className="block relative">
          <img
            src={`/portolio/${src}`}
            alt={title}
            className="w-60 h-64 transition duration-300 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-65 text-white transition-opacity duration-500 ease opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-5 text-center">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p>{description}</p>
          </div>
        </a>
      </div>
    </div>
  );
}