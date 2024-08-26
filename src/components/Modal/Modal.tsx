import React from "react";
import { Character } from "../../types/Character";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  person: Character;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, person }) => {
  if (!isOpen) return null;
  return (
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-90 z-20"
        onClick={onClose}
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div
            className="bg-[#e9dbb4] rounded-lg shadow-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 relative">
              <button
                className="px-2 py-2 bg-[#f7a15a] text-white rounded hover:bg-[#946036] absolute top-4 right-4 transition-all duration-300 ease-in-out"
                onClick={onClose}
              >
                <IoCloseSharp />
              </button>
              <Image
                src={person.image}
                alt={person.name}
                width={200}
                height={200}
                className="mb-4 border-[4px] border-[#E2E6E9]"
                priority
              />
              <ul className="gap-x-4">
                <li className="flex items-center justify-center mb-4">
                  <p className="font-semibold text-lg">{person.name}</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-semibold text-sm">Gender:</p>
                  <p className="font-medium text-sm">{person.gender}</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-semibold text-sm">Status:</p>
                  <p className="font-medium text-sm">{person.status}</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-semibold text-sm">Species:</p>
                  <p className="font-medium text-sm">{person.species}</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-semibold text-sm">Origin name:</p>
                  <p className="font-medium text-sm">{person.origin.name}</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-semibold text-sm">Location name:</p>
                  <p className="font-medium text-sm">{person.location.name}</p>
                </li>
                <li className="flex justify-between"> 
                <p className="font-semibold text-sm">Episodes:</p>
                <p className="font-medium text-sm">{person.episode.length}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Modal;
