"use client";

import { useState, useRef, useEffect } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft, Bone, PawPrint } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import {
  contactFormSchema,
  contactFormBaseSchema,
  ContactFormValues,
} from "@/lib/validations/contact";
import { sendContactEmail } from "@/lib/services/email";

// Step components
import { StepIndicator } from "@/components/sections/contact/step-indicator";
import { ClientDetailsStep } from "@/components/sections/contact/client-details-step";
import { AddressStep } from "@/components/sections/contact/address-step";
import { DetailsStep } from "@/components/sections/contact/details-step";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  // Keep a stable ref of the step state to avoid closures issues in the useForm resolver
  const stepRef = useRef(step);
  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  const methods = useForm<ContactFormValues>({
    resolver: async (values, context, options) => {
      let currentSchema;
      const currentStep = stepRef.current;

      if (currentStep === 1) {
        currentSchema = contactFormBaseSchema.pick({
          nom: true,
          prenom: true,
          email: true,
          telephone: true,
        });
      } else if (currentStep === 2) {
        currentSchema = contactFormBaseSchema.pick({
          nom: true,
          prenom: true,
          email: true,
          telephone: true,
          ville: true,
          codePostal: true,
          adresse: true,
          numeroRue: true,
          nomRue: true,
        });
      } else {
        currentSchema = contactFormSchema;
      }

      const result = await zodResolver(currentSchema)(values, context, options as any);
      return result as any;
    },
    mode: "onTouched",
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      ville: "",
      codePostal: "",
      adresse: "",
      numeroRue: "",
      nomRue: "",
      animauxList: [{ type: "", quantite: 1, autrePrecisez: "" }],
      serviceType: "30min",
      frequence: "1",
      transportToilettage: false,
      transportVeto: false,
      dateDebut: "",
      dateFin: "",
      message: "",
    },
  });

  const nextStep = async () => {
    let fieldsToValidate: Array<keyof ContactFormValues> = [];

    if (step === 1) {
      fieldsToValidate = ["nom", "prenom", "email", "telephone"];
    } else if (step === 2) {
      fieldsToValidate = [
        "ville",
        "codePostal",
        "adresse",
        "numeroRue",
        "nomRue",
      ];
    }

    const isStepValid = await methods.trigger(fieldsToValidate);
    if (isStepValid) {
      setDirection("forward");
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setHasAttemptedSubmit(false);
    setDirection("backward");
    setStep((prev) => prev - 1);
  };

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    const sendEmailPromise = sendContactEmail(data);

    toast.promise(sendEmailPromise, {
      loading: "Envoi de votre demande de garde...",
      success: () => {
        methods.reset();
        setDirection("backward");
        setStep(1);
        return "Votre demande a été transmise avec succès ! Nathalie vous répondra sous peu.";
      },
      error: "Une erreur est survenue lors de la transmission de l'email.",
    });
  };

  return (
    <FormProvider {...methods}>
      <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden flex flex-col justify-center items-center py-16 px-4 md:px-8 w-full">
        {/* Playful Floating shapes */}
        <PawPrint className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 text-orange-500/20 -rotate-12 pointer-events-none" />
        <Bone className="absolute bottom-20 -right-5 w-32 h-32 md:w-40 md:h-40 text-primary/10 rotate-45 pointer-events-none" />

        <div className="mb-4 max-w-4xl text-center z-10">
          <h1 className="mb-3 px-2 font-extrabold text-secondary text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-stroke-title">
            Demande de réservation
          </h1>
          <p className="text-secondary/80 max-w-md mx-auto text-sm md:text-base px-4">
            Remplissez ce formulaire en quelques étapes pour planifier la garde
            de vos fidèles compagnons.
          </p>
        </div>

        {/* Stepper progress component */}
        <StepIndicator currentStep={step} />

        <Card className="relative overflow-hidden bg-white neo-shadow shadow-xl mx-auto border-4 border-primary rounded-2xl w-full max-w-2xl z-10 transition-all duration-300">
          <CardHeader className="px-6 md:px-10 pt-8 pb-2">
            <CardTitle className="font-extrabold text-2xl md:text-3xl text-primary text-center md:text-left">
              {step === 1 && "Vos informations"}
              {step === 2 && "Adresse d'intervention"}
              {step === 3 && "Détails de la prestation"}
            </CardTitle>
          </CardHeader>

          <CardContent className="px-6 md:px-10 pb-6 md:pb-8">
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-6 md:space-y-8"
            >
              {/* Dynamic transitions based on step transition direction */}
              <div
                key={step}
                className={cn(
                  "animate-in duration-500 ease-out",
                  direction === "forward"
                    ? "slide-in-from-right-8 fade-in-40"
                    : "slide-in-from-left-8 fade-in-40",
                )}
              >
                {step === 1 && <ClientDetailsStep />}
                {step === 2 && <AddressStep />}
                {step === 3 && <DetailsStep hasAttemptedSubmit={hasAttemptedSubmit} />}
              </div>

              {/* Action Buttons Footer */}
              <div className="flex justify-between items-center gap-4 pt-6 border-t border-primary/20">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="h-12 px-5 font-bold text-base cursor-pointer"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4 stroke-[2.5]" /> Retour
                  </Button>
                )}

                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto h-12 px-6 font-bold text-base cursor-pointer"
                  >
                    Suivant <ArrowRight className="ml-2 w-4 h-4 stroke-[2.5]" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    onClick={() => setHasAttemptedSubmit(true)}
                    disabled={methods.formState.isSubmitting}
                    className="ml-auto h-12 px-6 font-bold text-base cursor-pointer disabled:bg-muted disabled:text-muted-foreground"
                  >
                    {methods.formState.isSubmitting
                      ? "Envoi..."
                      : "Envoyer ma demande"}
                    <ArrowRight className="ml-2 w-4 h-4 stroke-[2.5]" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </FormProvider>
  );
}