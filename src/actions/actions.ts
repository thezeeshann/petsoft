"use server";

import prisma from "@/lib/db";
import { PetEssentials } from "@/lib/types";
import { sleep } from "@/lib/utils";
import { petIdSchema, petSchemaForm } from "@/lib/validations";
import { revalidatePath } from "next/cache";

export async function addPet(pet: PetEssentials) {
  await sleep(1000);

  const validatedPetData = petSchemaForm.safeParse(pet);
  if (!validatedPetData.success) {
    return {
      message: "Invalid data",
    };
  }

  try {
    await prisma.pet.create({
      data: validatedPetData.data,
    });
  } catch (error) {
    return {
      message: "Could not added",
    };
  }

  revalidatePath("/", "layout");
}

export async function editPet(petId: unknown, newPetData: unknown) {
  await sleep(1000);

  const validatedPetId = petIdSchema.safeParse(petId);
  const validatedPetData = petSchemaForm.safeParse(newPetData);

  if (!validatedPetId.success || !validatedPetData.success) {
    return {
      message: "Invalid data",
    };
  }

  try {
    await prisma.pet.update({
      where: {
        id: validatedPetId.data,
      },
      data: validatedPetData.data,
    });
  } catch (error) {
    return {
      message: "Could not edit pet",
    };
  }
  revalidatePath("/", "layout");
}

export async function deletePet(petId: unknown) {
  await sleep(1000);

  const validatedPetId = petIdSchema.safeParse(petId);
  
  if (!validatedPetId.success) {
    return {
      message: "Invalid data",
    };
  }

  try {
    await prisma.pet.delete({
      where: {
        id: validatedPetId.data,
      },
    });
  } catch (error) {
    return {
      message: "Could not delete pet",
    };
  }
  revalidatePath("/", "layout");
}
