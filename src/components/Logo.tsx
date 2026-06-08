import { Image, View } from "react-native";

export default function Logo() {
  const apronImage = require("../../assets/icons/delantal.png");

  return (
    <View className="items-center justify-center">
      <Image source={apronImage} className="h-80 w-80" resizeMode="contain" />
    </View>
  );
}
