import { Image, View } from "react-native";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 160 }: LogoProps) {
  const apronImage = require("../../assets/icons/delantal.png");

  return (
    <View className={`items-center justify-center ${className}`.trim()}>
      <Image
        source={apronImage}
        style={{ width: size, height: size }}
        resizeMode="contain"
      />
    </View>
  );
}
