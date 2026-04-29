"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

export function VacationPopup() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent className="sm:max-w-md text-center bg-primary  text-amber-50">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-amber-100 tracking-wide">
            Période de congés
          </DialogTitle>
          <div className="mx-auto mt-1 h-px w-16 bg-amber-600" />
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-2">
          <DialogDescription className="text-base text-amber-100 leading-relaxed space-y-1">
            <span className="block text-amber-400 font-medium mb-3">
              J&apos;aurai les papattes en éventail :
            </span>
            <span className="block  rounded-md px-4 py-2 font-semibold text-amber-50">
              29 mai → 6 juin inclus
            </span>
            <span className="block  rounded-md px-4 py-2 font-semibold text-amber-50">
              20 juin → 24 juin inclus
            </span>
            <span className="block mt-3 text-amber-300 text-sm">
              Aucune visite possible à ces dates
            </span>
          </DialogDescription>
        </div>
        <DialogFooter className="sm:justify-center pt-2">
          <DialogClose asChild>
            <Button className="bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold px-8 py-2 rounded-full shadow-md transition-colors">
              J&apos;ai compris !
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
