import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { ContactFormValues } from "@/lib/validations/contact";
import { MapPin, Hash, Map } from "lucide-react";
import { cn } from "@/lib/utils";

export function AddressStep() {
  const { control } = useFormContext<ContactFormValues>();

  return (
    <div className="space-y-6">
      {/* 1. Ville & Code Postal (Required) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <Controller
            name="ville"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Ville *</FieldLabel>
                <InputGroup className={cn("h-11", fieldState.error ? "border-destructive ring-destructive/20" : "")}>
                  <InputGroupAddon>
                    <MapPin className="w-5 h-5" />
                  </InputGroupAddon>
                  <InputGroupInput
                    {...field}
                    placeholder="Ex: Oberhausbergen"
                  />
                </InputGroup>
                {fieldState.error && (
                  <FieldError errors={[{ message: fieldState.error.message }]} />
                )}
              </Field>
            )}
          />
        </div>
        <div className="md:col-span-1">
          <Controller
            name="codePostal"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Code Postal *</FieldLabel>
                <InputGroup className={cn("h-11", fieldState.error ? "border-destructive ring-destructive/20" : "")}>
                  <InputGroupAddon>
                    <Hash className="w-5 h-5" />
                  </InputGroupAddon>
                  <InputGroupInput
                    {...field}
                    maxLength={5}
                    placeholder="Ex: 67205"
                  />
                </InputGroup>
                {fieldState.error && (
                  <FieldError errors={[{ message: fieldState.error.message }]} />
                )}
              </Field>
            )}
          />
        </div>
      </div>

      {/* 2. N° de rue & Nom de rue (Optional) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pt-2 border-t border-muted/20">
        <div className="md:col-span-1">
          <Controller
            name="numeroRue"
            control={control}
            render={({ field }) => (
              <Field>
                <FieldLabel>N° de rue</FieldLabel>
                <InputGroup className="h-11">
                  <InputGroupAddon>
                    <Hash className="w-5 h-5" />
                  </InputGroupAddon>
                  <InputGroupInput {...field} placeholder="Ex: 12B" />
                </InputGroup>
              </Field>
            )}
          />
        </div>
        <div className="md:col-span-3">
          <Controller
            name="nomRue"
            control={control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Nom de rue</FieldLabel>
                <InputGroup className="h-11">
                  <InputGroupAddon>
                    <Map className="w-5 h-5" />
                  </InputGroupAddon>
                  <InputGroupInput {...field} placeholder="Ex: Rue des Mouettes" />
                </InputGroup>
              </Field>
            )}
          />
        </div>
      </div>

    </div>
  );
}
