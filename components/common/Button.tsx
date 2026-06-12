import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "text";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  children?: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-primary border border-transparent text-white",
  outline: "border border-zinc-500 bg-transparent text-zinc-100",
  text: "bg-transparent text-emerald-200",
};

const TEXT_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "text-white",
  outline: "text-zinc-100",
  text: "text-emerald-200",
};

export default function Button({
  title,
  variant = "primary",
  disabled,
  className = "",
  style,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      className={`rounded-full px-5 py-4 items-center justify-center ${VARIANT_CLASSES[variant]} ${disabled ? "opacity-50" : ""} ${className}`.trim()}
      style={style}
      {...props}
    >
      <Text
        className={`text-base font-semibold ${TEXT_VARIANT_CLASSES[variant]}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
