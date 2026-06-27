import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ContactFormValues } from "@/lib/validations/contact";

export function ClientDetailsStep() {
  const { control } = useFormContext<ContactFormValues>();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Controller
          name="nom"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Nom *</FieldLabel>
              <Input
                {...field}
                placeholder="Ex: Dupont"
                className={fieldState.error ? "border-destructive focus:ring-destructive/20" : ""}
              />
              {fieldState.error && (
                <FieldError errors={[{ message: fieldState.error.message }]} />
              )}
            </Field>
          )}
        />
        <Controller
          name="prenom"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Prénom *</FieldLabel>
              <Input
                {...field}
                placeholder="Ex: Jean"
                className={fieldState.error ? "border-destructive focus:ring-destructive/20" : ""}
              />
              {fieldState.error && (
                <FieldError errors={[{ message: fieldState.error.message }]} />
              )}
            </Field>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Email *</FieldLabel>
              <Input
                {...field}
                type="email"
                placeholder="Ex: jean.dupont@email.com"
                className={fieldState.error ? "border-destructive focus:ring-destructive/20" : ""}
              />
              {fieldState.error && (
                <FieldError errors={[{ message: fieldState.error.message }]} />
              )}
            </Field>
          )}
        />
        <Controller
          name="telephone"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Téléphone *</FieldLabel>
              <Input
                {...field}
                placeholder="Ex: 06 12 34 56 78"
                className={fieldState.error ? "border-destructive focus:ring-destructive/20" : ""}
              />
              {fieldState.error && (
                <FieldError errors={[{ message: fieldState.error.message }]} />
              )}
            </Field>
          )}
        />
      </div>
    </div>
  );
}
