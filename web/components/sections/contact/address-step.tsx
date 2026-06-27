import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ContactFormValues } from "@/lib/validations/contact";

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
                <Input
                  {...field}
                  placeholder="Ex: Oberhausbergen"
                  className={fieldState.error ? "border-destructive focus:ring-destructive/20 h-11" : "h-11"}
                />
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
                <Input
                  {...field}
                  maxLength={5}
                  placeholder="Ex: 67205"
                  className={fieldState.error ? "border-destructive focus:ring-destructive/20 h-11" : "h-11"}
                />
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
                <Input {...field} placeholder="Ex: 12B" className="h-11" />
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
                <Input {...field} placeholder="Ex: Rue des Mouettes" className="h-11" />
              </Field>
            )}
          />
        </div>
      </div>

    </div>
  );
}
