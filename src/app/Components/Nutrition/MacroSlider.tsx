type MacroSliderProps = {
  label: string;
  unit: string;
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
  step: number;
  totalCalories: number;
};

const MacroSlider = ({
  label,
  unit,
  value,
  onChange,
  min,
  max,
  step,
  totalCalories,
}: MacroSliderProps) => {
  return (
    <div>
      <p className="font-semibold text-sm sm:text-base mb-1">
        {label}: {value}
        {unit} {label !== "Calories" && `(${totalCalories} calories)`}
      </p>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="w-full h-2 appearance-none bg-muted rounded-full
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-background
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-border
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-moz-range-thumb]:bg-background
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-border
            [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:rounded-full
            bg-gradient-to-r from-primary to-primary bg-no-repeat"
        style={{
          backgroundSize: `${((value - min) / (max - min)) * 100}% 100%`,
        }}
      />
    </div>
  );
};

export default MacroSlider;
