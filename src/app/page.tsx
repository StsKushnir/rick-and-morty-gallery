"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Character } from "../types/Character";
import Modal from "@/components/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import * as charactersActions from "@/features/charactersSlice";
import { Pagination } from "@/components/Pagination/pagination";
import { Filters } from "@/components/Filters/filters";

export default function Home() {
  const [currPage, setCurrPage] = useState(3);
  const people = useAppSelector((state) => state.characters.characters);
  const charactersStatus = useAppSelector((state) => state.characters.status);
  const characterStatus = useAppSelector((state) => state.filter.status);
  const charactersSearch = useAppSelector((state) => state.filter.search);
  const charactersGender = useAppSelector((state) => state.filter.gender);
  const charactersSpecies = useAppSelector((state) => state.filter.species);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      charactersActions.getCharactersAsync({
        currPage,
        characterStatus,
        charactersSearch,
        charactersGender,
        charactersSpecies,
      })
    );
  }, [
    currPage,
    charactersSearch,
    charactersGender,
    charactersSpecies,
    characterStatus,
  ]);

  const [selectedPerson, setSelectedPerson] = useState<null | Character>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  const handlePerson = (person: Character) => {
    setIsModalOpen(true);
    setSelectedPerson(person);
  };

  return (
    <>
      <header className="p-4 border-b-[1px] border-[#E2E6E9] bg-[#e9dbb4] border-shadow">
        <Image
          src="/icons/logo-icon.png"
          alt="Rick and Morty Logo"
          width={150}
          height={150}
        />
      </header>
      <main className=" flex min-h-screen flex-col items-center justify-between p-6 bg-[#e9dbb4]">
        <h1 className="text-2xl font-bold leading-loose mb-6">
          Rick and Morty Gallery
        </h1>
        <Filters />
        {charactersStatus === "failed" ? (
          <>
            <p className="text-red-500">Something went wrong</p>
            <Image
              src='/icons/rick-sanchez-wrong.svg'
              alt='rick-sanchez-wrong'
              width={250}
              height={250}
              className=""
            />
          </>
        ) : (
          <ul className="flex flex-wrap justify-center gap-4 mt-10">
            {people.map((person) => (
              <li
                key={person.id}
                className="w-[200px] h-[230px] flex flex-col items-center"
                onClick={() => handlePerson(person)}
              >
                <a href="#" className="flex flex-col items-center text-center ">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={150}
                    height={150}
                    className="rounded-full hover:scale-110 transition-all duration-300 ease-in-out border-[4px] border-[#E2E6E9] hover:border-[#f7a15a]"
                  />
                  <p className="mt-4">{person.name}</p>
                </a>
              </li>
            ))}
            {selectedPerson && (
              <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                person={selectedPerson}
              />
            )}
          </ul>
        )}

        <Pagination currentPage={currPage} onPageChange={setCurrPage} />

        <button
          className="fixed bottom-[5%] right-[5%] border-[4px] border-[#E2E6E9] hover:border-[#f7a15a] rounded-full hover:scale-110 transition-all duration-300 ease-in-out"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/icons/up-icon.webp"
            alt="up"
            width={50}
            height={50}
            className="rounded-full hover:scale-110 transition-all duration-300 ease-in-out"
            unoptimized
          />
        </button>
      </main>
    </>
  );
}
