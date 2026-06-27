import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupTextarea } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2, Calendar, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { ContactFormValues } from "@/lib/validations/contact";

export function DetailsStep({ hasAttemptedSubmit = false }: { hasAttemptedSubmit?: boolean }) {
  const { control, register, watch } = useFormContext<ContactFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "animauxList",
  });

  const dateDebut = watch("dateDebut");
  const animauxList = watch("animauxList") || [];
  const now = new Date().toISOString().slice(0, 10); // get YYYY-MM-DD for date input min

  return (
    <div className="space-y-6">
      {/* Animal Management List */}
      <div className="space-y-4 font-medium">
        <div className="flex justify-between items-center">
          <FieldLabel className="font-bold text-lg">Vos animaux *</FieldLabel>
          <Button
            type="button"
            onClick={() => append({ type: "", quantite: 1, autrePrecisez: "" })}
            className="h-9 bg-primary text-white hover:bg-primary/90 flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Ajouter
          </Button>
        </div>

        <div className="space-y-4">
          {fields.map((field, index) => {
            const animalType = animauxList[index]?.type;
            return (
              <div
                key={field.id}
                className="relative flex flex-col gap-4 p-5 border border-muted-foreground/30 rounded-xl bg-muted/20 animate-in fade-in slide-in-from-bottom-2 duration-300"
              >
                <div className="items-end gap-4 grid grid-cols-1 md:grid-cols-12">
                  <div className="col-span-1 md:col-span-8">
                    <FieldLabel className="mb-2 text-muted-foreground text-xs uppercase font-bold tracking-wide">
                      Espèce
                    </FieldLabel>
                    <select
                      {...register(`animauxList.${index}.type` as const)}
                      className="bg-white px-3 border border-input rounded-md w-full h-11 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                    >
                      <option value="">Choisir...</option>
                      <option value="Chien">Chien</option>
                      <option value="Chat">Chat</option>
                      <option value="Autre">Autre (Lapin, furet...)</option>
                    </select>
                  </div>
                  <div className="col-span-1 md:col-span-3">
                    <FieldLabel className="mb-2 text-muted-foreground text-xs uppercase font-bold tracking-wide">
                      Nombre
                    </FieldLabel>
                    <Input
                      type="number"
                      min={1}
                      {...register(`animauxList.${index}.quantite` as const, {
                        valueAsNumber: true,
                      })}
                      className="bg-white h-11"
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
                        "text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors w-11 h-11 rounded-md",
                        fields.length === 1 && "invisible"
                      )}
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {animalType === "Autre" && (
                  <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                    <Input
                      {...register(`animauxList.${index}.autrePrecisez` as const)}
                      placeholder="Précisez l'espèce (ex: Lapin nain, Cochon d'Inde)"
                      className="bg-white h-11"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details Options */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 pt-6 border-t border-muted/30">
        <Controller
          name="serviceType"
          control={control}
          render={({ field }) => (
            <Field>
              <FieldLabel className="font-bold">Durée de la visite</FieldLabel>
              <select
                {...field}
                className="bg-white px-3 border border-input rounded-md w-full h-11 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              >
                <option value="30min">Visite de 30 minutes</option>
                <option value="45min">Visite de 45 minutes</option>
                <option value="1h">Visite de 1 heure</option>
              </select>
            </Field>
          )}
        />
        <Controller
          name="frequence"
          control={control}
          render={({ field }) => (
            <Field>
              <FieldLabel className="font-bold">Nombre de passages par jour</FieldLabel>
              <select
                {...field}
                className="bg-white px-3 border border-input rounded-md w-full h-11 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              >
                <option value="1">1 fois par jour</option>
                <option value="2">2 fois par jour</option>
                <option value="3">3 fois par jour</option>
              </select>
            </Field>
          )}
        />
      </div>

      {/* Optional Transport options */}
      <div className="flex flex-col sm:flex-row gap-5 pt-2">
        <label className="flex-1 flex items-center gap-3 p-3.5 border border-input rounded-lg hover:border-primary/50 cursor-pointer hover:bg-primary/5 transition-colors">
          <Controller
            name="transportToilettage"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="w-5 h-5"
              />
            )}
          />
          <span className="font-medium text-sm text-foreground">Transport Toilettage</span>
        </label>
        <label className="flex-1 flex items-center gap-3 p-3.5 border border-input rounded-lg hover:border-primary/50 cursor-pointer hover:bg-primary/5 transition-colors">
          <Controller
            name="transportVeto"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="w-5 h-5"
              />
            )}
          />
          <span className="font-medium text-sm text-foreground">Transport Vétérinaire</span>
        </label>
      </div>

      {/* Date fields */}
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2 pt-6 border-t border-muted/30">
        <Controller
          name="dateDebut"
          control={control}
          render={({ field, fieldState }) => {
            const showError = !!fieldState.error && (fieldState.isDirty || hasAttemptedSubmit);
            return (
              <Field data-invalid={showError}>
                <FieldLabel>Date de début *</FieldLabel>
                <InputGroup className={cn("h-11", showError ? "border-destructive ring-destructive/20" : "")}>
                  <InputGroupAddon>
                    <Calendar className="w-5 h-5" />
                  </InputGroupAddon>
                  <InputGroupInput
                    {...field}
                    type="date"
                    min={now}
                    aria-invalid={showError}
                  />
                </InputGroup>
                {showError && (
                  <FieldError errors={[{ message: fieldState.error?.message || "" }]} />
                )}
              </Field>
            );
          }}
        />
        <Controller
          name="dateFin"
          control={control}
          render={({ field, fieldState }) => {
            const showError = !!fieldState.error && (fieldState.isDirty || hasAttemptedSubmit);
            return (
              <Field data-invalid={showError}>
                <FieldLabel>Date de fin *</FieldLabel>
                <InputGroup className={cn("h-11", showError ? "border-destructive ring-destructive/20" : "")}>
                  <InputGroupAddon>
                    <Calendar className="w-5 h-5" />
                  </InputGroupAddon>
                  <InputGroupInput
                    {...field}
                    type="date"
                    min={dateDebut || now}
                    aria-invalid={showError}
                  />
                </InputGroup>
                {showError && (
                  <FieldError errors={[{ message: fieldState.error?.message || "" }]} />
                )}
              </Field>
            );
          }}
        />
      </div>

      {/* Additional Precision */}
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <Field>
            <FieldLabel>Précisions complémentaires (Optionnel)</FieldLabel>
            <InputGroup className="items-start min-h-32">
              <InputGroupAddon className="pt-3">
                <MessageSquare className="w-5 h-5" />
              </InputGroupAddon>
              <InputGroupTextarea
                {...field}
                placeholder="Habitudes de votre animal, consignes particulières..."
              />
            </InputGroup>
          </Field>
        )}
      />
    </div>
  );
}
