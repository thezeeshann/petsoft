"use client"

import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { usePetContext } from "@/lib/hooks";

type PetFormProps = {
  actionType: "add" | "edit";
  onFormSubmission : ()=>void;
};

const PetForm = ({ actionType,onFormSubmission }: PetFormProps) => {

  const { handleAddPet,selectedPet,handleEditPet } = usePetContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pet = {
      name: formData.get("name") as string,
      ownername: formData.get("ownername") as string,
      imageUrl: (formData.get("imageUrl") as string) || "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png",
      age: Number(formData.get("age")),
      notes: formData.get("notes") as string,
    };

    if(actionType === "add"){

      handleAddPet(pet)
    }else if(actionType === "edit"){
      handleEditPet(selectedPet?.id as string, pet)
    }

    onFormSubmission()

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" defaultValue={actionType === "edit" ? selectedPet?.name : ""} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="ownername">Owner Name</Label>
          <Input type="text" name="ownername" id="ownername" defaultValue={actionType === "edit" ? selectedPet?.ownerName : ""} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="image">Image Url</Label>
          <Input type="text" name="imageUrl" id="image" defaultValue={actionType === "edit" ? selectedPet?.imageUrl : ""} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="name">Age</Label>
          <Input type="number" name="age" id="age" defaultValue={actionType === "edit" ? selectedPet?.age : ""} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="notes">Note</Label>
          <Textarea rows={3} id="notes" name="notes" defaultValue={actionType === "edit" ? selectedPet?.notes : ""} />
        </div>
      </div>
      <Button type="submit" className="mt-5 self-end">
        {actionType === "add" ? "Add a new pet" : "Edit pet"}
      </Button>
    </form>
  );
};

export default PetForm;
