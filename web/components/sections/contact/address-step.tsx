import { useState, useEffect, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { ContactFormValues } from "@/lib/validations/contact";
import { MapPin, Hash, Map } from "lucide-react";
import { cn } from "@/lib/utils";

interface GeoCommune {
  nom: string;
  code: string;
  codesPostaux?: string[];
}

export function AddressStep() {
  const { control, setValue, watch } = useFormContext<ContactFormValues>();
  
  const [citySuggestions, setCitySuggestions] = useState<GeoCommune[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const watchCodePostal = watch("codePostal");
  const watchVille = watch("ville");

  // Handle click outside to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 1. Fetch cities when a 5-digit postal code is entered
  useEffect(() => {
    if (watchCodePostal && watchCodePostal.length === 5) {
      fetch(`https://geo.api.gouv.fr/communes?codePostal=${watchCodePostal}&fields=nom,code,codesPostaux`)
        .then((res) => res.json())
        .then((data: GeoCommune[]) => {
          if (data && data.length > 0) {
            // If only one city matches, auto-fill it
            if (data.length === 1) {
              setValue("ville", data[0].nom, { shouldValidate: true });
            } else {
              // Store matching cities in suggestions to let user choose
              setCitySuggestions(data);
              setShowSuggestions(true);
            }
          }
        })
        .catch((err) => console.error("Error fetching cities by postal code", err));
    }
  }, [watchCodePostal, setValue]);

  // 2. Fetch suggestions as user types the city name
  const handleCityChange = async (val: string) => {
    setValue("ville", val, { shouldValidate: true });
    
    if (val.length >= 3) {
      try {
        const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(val)}&limit=5&fields=nom,code,codesPostaux`);
        const data: GeoCommune[] = await res.json();
        setCitySuggestions(data);
        setShowSuggestions(true);
      } catch (err) {
        console.error("Error fetching city suggestions", err);
      }
    } else {
      setCitySuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (city: GeoCommune) => {
    setValue("ville", city.nom, { shouldValidate: true });
    if (city.codesPostaux && city.codesPostaux.length > 0) {
      // Prefer the first postal code, or if the current postal code is already in the list, keep it
      const currentCP = watchCodePostal;
      if (city.codesPostaux.includes(currentCP)) {
        setValue("codePostal", currentCP, { shouldValidate: true });
      } else {
        setValue("codePostal", city.codesPostaux[0], { shouldValidate: true });
      }
    }
    setShowSuggestions(false);
  };

  return (
    <div className="space-y-6">
      {/* 1. Ville & Code Postal (Required) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
        {/* Ville input with autocomplete dropdown */}
        <div className="md:col-span-2 relative" ref={dropdownRef}>
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
                    onChange={(e) => handleCityChange(e.target.value)}
                    onFocus={() => {
                      if (citySuggestions.length > 0) setShowSuggestions(true);
                    }}
                    placeholder="Ex: Oberhausbergen"
                    autoComplete="off"
                  />
                </InputGroup>
                {fieldState.error && (
                  <FieldError errors={[{ message: fieldState.error.message }]} />
                )}
              </Field>
            )}
          />

          {/* Autocomplete Dropdown List */}
          {showSuggestions && citySuggestions.length > 0 && (
            <div className="absolute left-0 right-0 z-50 mt-1 bg-white border border-secondary/20 rounded-md shadow-lg max-h-60 overflow-y-auto">
              <ul className="py-1">
                {citySuggestions.map((city, idx) => {
                  const postalCodeDisplay = city.codesPostaux && city.codesPostaux.length > 0
                    ? city.codesPostaux.join(", ")
                    : "";
                  return (
                    <li key={idx}>
                      <button
                        type="button"
                        onClick={() => handleSelectSuggestion(city)}
                        className="w-full text-left px-4 py-2 text-sm text-secondary hover:bg-primary/10 transition-colors focus:bg-primary/10 outline-none font-medium flex justify-between items-center cursor-pointer"
                      >
                        <span>{city.nom}</span>
                        <span className="text-xs text-secondary/60 font-sans">{postalCodeDisplay}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {/* Code Postal input */}
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
                    autoComplete="off"
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
