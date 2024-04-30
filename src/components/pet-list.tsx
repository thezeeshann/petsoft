"use client";

import React from "react";
import Image from "next/image";
import { usePetContext, useSearchContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const Petlist = () => {
  const { pets, handleChangeSelectedPetId, selectedPetId } = usePetContext();
  const {searchQuery} = useSearchContext()

  const filteredPets = pets.filter((pet) => pet.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <ul className="bg-white border-b border-black/[0.08]">
      {filteredPets.map((pet) => (
        <li key={pet.id}>
          <button
            onClick={() => handleChangeSelectedPetId(pet.id)}
            className={cn("flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] transition focus:bg-[#EFF1F2]",{
              " bg-[#EFF1F2] ": selectedPetId === pet.id,
            })}
          >
            <Image
              src={pet.imageUrl}
              width={45}
              height={45}
              alt="Pet Image"
              className="w-[45px] h-[45px] rounded-full object-cover"
            />
            <p className="font-semibold">{pet.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Petlist;
