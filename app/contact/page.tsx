"use client";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroupTextarea } from "@/components/ui/input-group";
import { ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z
  .object({
    nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
    email: z
      .string()
      .email("Adresse email invalide")
      .min(1, "L'email est requis"),
    telephone: z
      .string()
      .min(10, "Le numéro doit contenir au moins 10 chiffres"),
    animaux: z.string().min(1, "Veuillez sélectionner un animal"),
    autreAnimal: z.string().optional(),

    serviceType: z.string().min(1, "Requis"),
    frequence: z.string().min(1, "Requis"),

    transportToilettage: z.boolean(),
    transportVeto: z.boolean(),

    dateDebut: z.string().min(1, "Date de début requise"),
    dateFin: z.string().min(1, "Date de fin requise"),
    message: z.string().optional(),
  })
  .refine((data) => new Date(data.dateFin) > new Date(data.dateDebut), {
    message: "La date de fin doit être après la date de début",
    path: ["dateFin"],
  })
  .refine(
    (data) => {
      if (data.animaux === "Autre")
        return !!data.autreAnimal && data.autreAnimal.length > 1;
      return true;
    },
    {
      message: "Veuillez préciser l'espèce",
      path: ["autreAnimal"],
    },
  );

type FormValues = z.infer<typeof formSchema>;

export default function PetSittingForm() {
  const now = new Date().toISOString().slice(0, 16);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      animaux: "",
      autreAnimal: "",
      serviceType: "30min",
      frequence: "1",
      transportToilettage: false,
      transportVeto: false,
      dateDebut: "",
      dateFin: "",
      message: "",
    } as FormValues,
  });

  const animalType = form.watch("animaux");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const SERVICE_ID =
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "your_service_id";
    const TEMPLATE_ID =
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "your_template_id";
    const PUBLIC_KEY =
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || "your_public_key";

    if (SERVICE_ID === "your_service_id") {
      toast.error("Configuration EmailJS manquante.");
      return;
    }

    const formatDate = (dateStr: string) => {
      return new Date(dateStr).toLocaleString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    const serviceLabels: Record<string, string> = {
      "30min": "Visite de 30 minutes",
      "45min": "Visite de 45 minutes",
      "1h": "Visite de 1 heure",
    };

    const emailParams = {
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      telephone: data.telephone,
      animaux: data.animaux === "Autre" ? data.autreAnimal : data.animaux,
      serviceType: serviceLabels[data.serviceType] || data.serviceType,
      frequence: data.frequence,
      transportToilettage: data.transportToilettage ? "Oui" : "Non",
      transportVeto: data.transportVeto ? "Oui" : "Non",
      date_debut: formatDate(data.dateDebut),
      date_fin: formatDate(data.dateFin),
      message: data.message || "Pas de message supplémentaire.",
    };

    const sendEmailPromise = emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailParams,
      PUBLIC_KEY,
    );

    toast.promise(sendEmailPromise, {
      loading: "Envoi de votre demande...",
      success: () => {
        form.reset();
        return "Demande envoyée ! Nathalie vous répondra bientôt.";
      },
      error: () => "Une erreur est survenue lors de l'envoi.",
    });
  };

  return (
    <div className="w-fulloverflow-x-hidden flex flex-col justify-center items-center bg-foreground p-4 md:p-8">
      <div className="mb-8 md:mb-12 max-w-4xl text-center">
        <h1 className="mb-4 px-2 font-extrabold text-white text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
          Contactez-moi
        </h1>
        <p className="px-4 text-white/80 text-base md:text-xl">
          Complétez le formulaire pour une réponse rapide
        </p>
      </div>

      <Card className="bg-white neo-shadow shadow-xl mx-auto border-0 rounded-xl w-full max-w-2xl">
        <CardHeader className="p-5 md:p-8">
          <CardTitle className="font-bold text-xl md:text-2xl md:text-left text-center">
            Demande de garde
          </CardTitle>
        </CardHeader>

        <CardContent className="p-5 md:p-8 pt-0 md:pt-0">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 md:space-y-6"
          >
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <Controller
                name="nom"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Nom</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Doe"
                      className={fieldState.error ? "border-destructive" : ""}
                    />
                    {fieldState.error && (
                      <FieldError
                        errors={[{ message: fieldState.error.message }]}
                      />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="prenom"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Prénom</FieldLabel>
                    <Input
                      {...field}
                      placeholder="John"
                      className={fieldState.error ? "border-destructive" : ""}
                    />
                    {fieldState.error && (
                      <FieldError
                        errors={[{ message: fieldState.error.message }]}
                      />
                    )}
                  </Field>
                )}
              />
            </div>

            <div className="items-start gap-4 grid grid-cols-1 md:grid-cols-2">
              <Controller
                name="animaux"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Animal</FieldLabel>
                    <select
                      {...field}
                      className="flex bg-white px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary w-full h-10 text-sm appearance-none"
                    >
                      <option value="">Choisir...</option>
                      <option value="Chien">Chien</option>
                      <option value="Chat">Chat</option>
                      <option value="Autre">Autre</option>
                    </select>
                    {fieldState.error && (
                      <FieldError
                        errors={[{ message: fieldState.error.message }]}
                      />
                    )}
                  </Field>
                )}
              />
              {animalType === "Autre" && (
                <Controller
                  name="autreAnimal"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel>Précisez l'espèce</FieldLabel>
                      <Input
                        {...field}
                        placeholder="Ex: Lapin..."
                        className={fieldState.error ? "border-destructive" : ""}
                      />
                      {fieldState.error && (
                        <FieldError
                          errors={[{ message: fieldState.error.message }]}
                        />
                      )}
                    </Field>
                  )}
                />
              )}
            </div>

            <div className="space-y-4 bg-slate-50 p-4 md:p-6 border rounded-xl">
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <Controller
                  name="serviceType"
                  control={form.control}
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>Durée visite</FieldLabel>
                      <select
                        {...field}
                        className="bg-white px-3 border rounded-md w-full h-10 text-sm"
                      >
                        <option value="30min">Visite 30 min</option>
                        <option value="45min">Visite 45 min</option>
                        <option value="1h">Visite 1 heure</option>
                      </select>
                    </Field>
                  )}
                />
                <Controller
                  name="frequence"
                  control={form.control}
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>Passages / jour</FieldLabel>
                      <select
                        {...field}
                        className="bg-white px-3 border rounded-md w-full h-10 text-sm"
                      >
                        <option value="1">1 fois par jour</option>
                        <option value="2">2 fois par jour</option>
                        <option value="3">3 fois par jour</option>
                      </select>
                    </Field>
                  )}
                />
              </div>

              <div className="flex md:flex-row flex-col gap-4 pt-2">
                <label className="flex items-center gap-3 text-sm cursor-pointer select-none">
                  <Controller
                    name="transportToilettage"
                    control={form.control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="w-5 h-5"
                      />
                    )}
                  />
                  <span>Transport Toilettage</span>
                </label>
                <label className="flex items-center gap-3 text-sm cursor-pointer select-none">
                  <Controller
                    name="transportVeto"
                    control={form.control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="w-5 h-5"
                      />
                    )}
                  />
                  <span>Transport Vétérinaire</span>
                </label>
              </div>
            </div>

            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      {...field}
                      type="email"
                      placeholder="john@example.com"
                    />
                    {fieldState.error && (
                      <FieldError
                        errors={[{ message: fieldState.error.message }]}
                      />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="telephone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Téléphone</FieldLabel>
                    <Input {...field} placeholder="06 12 34 56 78" />
                    {fieldState.error && (
                      <FieldError
                        errors={[{ message: fieldState.error.message }]}
                      />
                    )}
                  </Field>
                )}
              />
            </div>

            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <Controller
                name="dateDebut"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Du (début)</FieldLabel>
                    <Input
                      {...field}
                      type="datetime-local"
                      min={now}
                      className="w-full text-sm"
                    />
                    {fieldState.error && (
                      <FieldError
                        errors={[{ message: fieldState.error.message }]}
                      />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="dateFin"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Au (fin)</FieldLabel>
                    <Input
                      {...field}
                      type="datetime-local"
                      min={form.watch("dateDebut") || now}
                      className="w-full text-sm"
                    />
                    {fieldState.error && (
                      <FieldError
                        errors={[{ message: fieldState.error.message }]}
                      />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="message"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Précisions (Facultatif)</FieldLabel>
                  <InputGroupTextarea
                    {...field}
                    placeholder="Besoins spécifiques, habitudes..."
                    className="border rounded-md min-h-[120px] text-sm"
                  />
                </Field>
              )}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="shadow-lg py-7 w-full font-bold text-lg active:scale-[0.98] transition-all"
            >
              {form.formState.isSubmitting ? "Envoi..." : "Envoyer ma demande"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
