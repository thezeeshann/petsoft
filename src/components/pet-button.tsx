"use client"

import React, { useState } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PetForm from "./pet-forms";

type PetButtonProps = {
  actoinType: "add" | "edit" | "checkout";
  children?: React.ReactNode;
  onClick?: () => void;
};

const PetButton = ({ actoinType, children, onClick }: PetButtonProps) => {

  const [isFormOpen,setIsFormOpen] = useState(false)

  if (actoinType === "checkout") {
    return (
      <Button variant={"secondary"} onClick={onClick}>
        {children}
      </Button>
    );
  }

  if (actoinType === "add" || actoinType === "edit") {
    return (
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogTrigger asChild>
          {actoinType === "add" ? (
            <Button size={"icon"}>
              <PlusIcon className="h-6 w-6" />
            </Button>
          ) : (
            <Button variant={"secondary"}>{children}</Button>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actoinType === "add" ? "Add a new pet" : "Edit pet"}
            </DialogTitle>
          </DialogHeader>
          <PetForm actionType={actoinType} onFormSubmission={()=>setIsFormOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }
};

export default PetButton;
