import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { ContactFormValues } from "@/lib/validations/contact";
import { User, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

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
              <InputGroup className={cn("h-11", fieldState.error ? "border-destructive ring-destructive/20" : "")}>
                <InputGroupAddon>
                  <User className="w-5 h-5" />
                </InputGroupAddon>
                <InputGroupInput
                  {...field}
                  placeholder="Ex: Dupont"
                />
              </InputGroup>
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
              <InputGroup className={cn("h-11", fieldState.error ? "border-destructive ring-destructive/20" : "")}>
                <InputGroupAddon>
                  <User className="w-5 h-5" />
                </InputGroupAddon>
                <InputGroupInput
                  {...field}
                  placeholder="Ex: Jean"
                />
              </InputGroup>
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
              <InputGroup className={cn("h-11", fieldState.error ? "border-destructive ring-destructive/20" : "")}>
                <InputGroupAddon>
                  <Mail className="w-5 h-5" />
                </InputGroupAddon>
                <InputGroupInput
                  {...field}
                  type="email"
                  placeholder="Ex: jean.dupont@email.com"
                />
              </InputGroup>
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
              <InputGroup className={cn("h-11", fieldState.error ? "border-destructive ring-destructive/20" : "")}>
                <InputGroupAddon>
                  <Phone className="w-5 h-5" />
                </InputGroupAddon>
                <InputGroupInput
                  {...field}
                  type="tel"
                  placeholder="Ex: 06 12 34 56 78"
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
  );
}
