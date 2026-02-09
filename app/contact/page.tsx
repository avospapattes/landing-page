"use client";
import {
  Controller,
  useForm,
  SubmitHandler,
  useWatch,
  useFieldArray,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroupTextarea } from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Plus, Trash2 } from "lucide-react";
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
    animauxList: z
      .array(
        z.object({
          type: z.string().min(1, "Requis"),
          autrePrecisez: z.string().optional(),
          quantite: z.number().min(1, "Doit être au moins 1"),
        }),
      )
      .min(1, "Ajoutez au moins un animal"),

    serviceType: z.string().min(1, "Requis"),
    frequence: z.string().min(1, "Requis"),
    transportToilettage: z.boolean(),
    transportVeto: z.boolean(),
    dateDebut: z.string().min(1, "Date de début requise"),
    dateFin: z.string().min(1, "Date de fin requise"),
    message: z.string().optional(),
  })
  .refine((data) => new Date(data.dateFin) >= new Date(data.dateDebut), {
    message: "La date de fin doit être égale ou après la date de début",
    path: ["dateFin"],
  });

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

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "animauxList",
  });
  const dateDebut = useWatch({ control: form.control, name: "dateDebut" });
  const animauxList = useWatch({ control: form.control, name: "animauxList" });

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
      return new Date(dateStr).toLocaleDateString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };
    const animauxString = data.animauxList
      .map(
        (a) =>
          `${a.quantite}x ${a.type === "Autre" ? a.autrePrecisez : a.type}`,
      )
      .join(", ");

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
      animaux: animauxString,
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
    <div className="flex flex-col justify-center items-center bg-foreground p-4 md:p-8 w-full">
      <div className="mb-8 md:mb-12 max-w-4xl text-center">
        <h1 className="mb-4 px-2 font-extrabold text-white text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-stroke-title">
          Contactez-moi
        </h1>
        <p className="px-4 text-white/80 text-base md:text-xl">
          Complétez le formulaire pour une réponse rapide
        </p>
      </div>

      <Card className="bg-white neo-shadow shadow-xl mx-auto border-0 rounded-xl w-full max-w-2xl">
        <CardHeader className="px-5 md:px-8">
          <CardTitle className="font-bold text-xl md:text-2xl md:text-left text-center">
            Demande de garde
          </CardTitle>
        </CardHeader>
        <div className="px-5 md:px-8">
          <Separator />
        </div>
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

            <div className="space-y-4 py-6 border-t font-medium">
              <div className="flex justify-between items-center">
                <FieldLabel className="font-bold text-xl">
                  Vos animaux
                </FieldLabel>
                <Button
                  type="button"
                  onClick={() =>
                    append({ type: "", quantite: 1, autrePrecisez: "" })
                  }
                  className="h-8 bg-primary text-white hover:bg-primary/90"
                >
                  <Plus className="mr-1 w-4 h-4" /> Ajouter
                </Button>
              </div>

              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="relative flex flex-col gap-3 p-4 border border-muted-foreground rounded-xl transition-colors"
                >
                  <div className="items-end gap-3 grid grid-cols-1 md:grid-cols-12">
                    <div className="col-span-1 md:col-span-8">
                      <FieldLabel className="mb-2 text-muted-foreground text-xs uppercase font-bold tracking-wide">
                        Espèce
                      </FieldLabel>
                      <select
                        {...form.register(`animauxList.${index}.type`)}
                        className="bg-white px-3 border rounded-md w-full h-10 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      >
                        <option value="">Choisir...</option>
                        <option value="Chien">Chien</option>
                        <option value="Chat">Chat</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    <div className="col-span-1 md:col-span-3">
                      <FieldLabel className="mb-2 text-muted-foreground text-xs uppercase font-bold tracking-wide">
                        Nombre
                      </FieldLabel>
                      <Input
                        type="number"
                        {...form.register(`animauxList.${index}.quantite`)}
                        className="bg-white"
                      />
                    </div>
                    <div className="flex justify-end md:justify-center col-span-1 md:col-span-1">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => remove(index)}
                        disabled={fields.length === 1}
                        className={cn(
                          "text-muted-foreground transition-colors hover:text-foreground",
                          fields.length === 1 && "invisible",
                        )}
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {animauxList[index]?.type === "Autre" && (
                    <Input
                      {...form.register(`animauxList.${index}.autrePrecisez`)}
                      placeholder="Précisez (Lapin, furet...)"
                      className="bg-white"
                    />
                  )}
                </div>
              ))}
              {form.formState.errors.animauxList && (
                <p className="text-destructive text-sm italic font-medium">
                  Ajoutez au moins un animal.
                </p>
              )}
            </div>

            <div className="space-y-6 pt-6 border-t">
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                <Controller
                  name="serviceType"
                  control={form.control}
                  render={({ field }) => (
                    <Field>
                      <FieldLabel className="font-bold">
                        Durée visite
                      </FieldLabel>
                      <select
                        {...field}
                        className="bg-white px-3 border rounded-md w-full h-11 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
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
                      <FieldLabel className="font-bold">
                        Passages / jour
                      </FieldLabel>
                      <select
                        {...field}
                        className="bg-white px-3 border rounded-md w-full h-11 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      >
                        <option value="1">1 fois par jour</option>
                        <option value="2">2 fois par jour</option>
                        <option value="3">3 fois par jour</option>
                      </select>
                    </Field>
                  )}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-2">
                <label className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary/50 cursor-pointer transition-all hover:bg-primary/5">
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
                  <span className="font-medium">Transport Toilettage</span>
                </label>
                <label className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary/50 cursor-pointer transition-all hover:bg-primary/5">
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
                  <span className="font-medium">Transport Vétérinaire</span>
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
                      type="date"
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
                      type="date"
                      min={dateDebut || now}
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
                    className="border rounded-md min-h-30 text-sm"
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
