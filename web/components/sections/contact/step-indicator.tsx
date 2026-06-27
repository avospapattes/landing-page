import { cn } from "@/lib/utils";
import { User, MapPin, PawPrint, Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { id: 1, label: "Vos infos", icon: User },
    { id: 2, label: "Adresse", icon: MapPin },
    { id: 3, label: "Prestation", icon: PawPrint },
  ];

  return (
    <div className="w-full max-w-lg mx-auto mb-6 px-4">
      <div className="relative flex justify-between items-center">
        {/* Progress Line Background & Active Filler */}
        <div className="absolute top-1/3 left-6 right-6 h-1 bg-white/20 -translate-y-1/2 rounded-full pointer-events-none">
          <div
            className="h-full bg-orange-400 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Step Circles */}
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center gap-2 group"
            >
              <div
                className={cn(
                  "w-12 h-12 flex items-center justify-center rounded-full border-3 transition-all duration-500 ease-out bg-white text-foreground shadow-sm",
                  isCompleted &&
                    "bg-orange-400 border-orange-400 text-white scale-110",
                  isActive &&
                    "border-orange-400 ring-4 ring-orange-400/20 text-orange-400 font-bold scale-105",
                  !isActive &&
                    !isCompleted &&
                    "border-white/20 bg-background text-white/50",
                )}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6 stroke-[3]" />
                ) : (
                  <StepIcon className="w-5 h-5" />
                )}
              </div>
              <span
                className={cn(
                  "text-xs md:text-sm font-semibold tracking-wide transition-colors duration-300",
                  isActive && "text-orange-400 font-bold",
                  isCompleted && "text-orange-400/80",
                  !isActive && !isCompleted && "text-white/40",
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
