"use client";

import { usePetContext } from "@/lib/hooks";
import Image from "next/image";
import PetButton from "./pet-button";

const PetDetails = () => {
  const { selectedPet,handleCheckoutPet } = usePetContext();

  return (
    <section className="flex flex-col w-full h-full">
      {!selectedPet ? (
        <EmptyView />
      ) : (
        <>
          <div className="flex items-center bg-white px-8 py-5 border-b border-black/[0.08] ">
            <div className="flex gap-x-4">
            <Image
              src={selectedPet?.imageUrl}
              width={75}
              height={75}
              className="w-[75px] h-[75px] rounded-full object-cover"
              alt=""
            />
            <h2 className="text-3xl font-semibold leading-7 mt-5">
              {selectedPet?.name}
            </h2>
            </div>
            <div className="ml-auto space-x-2">
              <PetButton actoinType="edit">Edit</PetButton>

              <PetButton
                onClick={ async ()=> await handleCheckoutPet(selectedPet?.id) }
                actoinType="checkout"
              >
                Checkout
              </PetButton>
            </div>
          </div>
          

          <div className="flex justify-around py-10 px-5 text-center">
            <div>
              <h3 className="text-[13px] font-medium uppercase text-zinc-700">
                Owner name
              </h3>
              <p className="mt-1 text-lg text-zinc-800">
                {selectedPet?.ownerName}
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-medium uppercase text-zinc-700">
                Age{" "}
              </h3>
              <p className="mt-1 text-lg text-zinc-800">{selectedPet?.age}</p>
            </div>
          </div>

          <section
            className="flex-1 bg-white
       px-7 py-5 rounded-md mb-9 mx-8 border-b border-black/[0.08]"
          >
            {selectedPet?.notes}
          </section>
        </>
      )}
    </section>
  );
};

export default PetDetails;

function EmptyView() {
  return (
    <p className="flex justify-center items-center  h-full text-2xl font-medium">
      No pet selected
    </p>
  );
}
