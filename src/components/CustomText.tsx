import { Text, TextProps } from "react-native";
import { ReactNode } from "react";

export type TextVariant = "h1" | "body";

interface CustomTextProps extends TextProps {
  variant?: TextVariant;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<TextVariant, string> = {
  h1: "text-4xl font-bold text-white",
  body: "text-base text-zinc-300",
};

export default function CustomText({
  variant = "body",
  className = "",
  style,
  children,
  ...props
}: CustomTextProps) {
  return (
    <Text
      className={`text-center ${VARIANT_CLASSES[variant]} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Text>
  );
}
