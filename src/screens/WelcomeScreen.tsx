import { ImageBackground, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import CustomText from "../components/CustomText";
import Logo from "../components/Logo";

const backgroundImage = require("../../assets/images/fondo.jpeg");

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ImageBackground
      source={backgroundImage}
      className="flex-1"
      resizeMode="cover"
    >
      <View className="absolute inset-0 bg-black/65" />
      <SafeAreaView className="flex-1 px-6">
        <View className="flex-1 justify-between py-8">
          <View className="pt-4 items-end">
            <CustomText variant="body" className="text-zinc-200/80">
              {isDark ? "Modo oscuro activo" : "Bienvenida"}
            </CustomText>
          </View>

          <View className="items-center justify-center space-y-6">
            <Logo />
            <CustomText variant="h1">Mis Recetas</CustomText>
            <CustomText className="max-w-[260px] text-zinc-200/90">
              Guarda, organiza y comparte tus mejores recetas en un solo lugar.
            </CustomText>
          </View>

          <View className="space-y-4 pb-4">
            <Button title="Iniciar sesión" variant="primary" />
            <Button title="Crear cuenta" variant="outline" />
            <Button title="Continuar sin cuenta" variant="text" />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
