import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Logo from "@/components/common/Logo";
import Button from "@/components/common/Button";
import Input from "@/components/forms/Input";

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    // Email validation
    if (!email.trim()) {
      setEmailError("El correo electrónico es obligatorio");
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("El correo electrónico no es válido");
        isValid = false;
      }
    }

    // Password validation
    if (!password) {
      setPasswordError("La contraseña es obligatoria");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres");
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simular llamada a la API de autenticación
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Si la autenticación es exitosa, redirigir a la pantalla principal protegida
      router.replace("/(protected)/home");
    } catch (error) {
      Alert.alert(
        "Error",
        "Ocurrió un error al iniciar sesión. Inténtalo de nuevo.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-[#17171C]" style={{ paddingTop: insets.top }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          {/* Header */}
          <View className="flex-row items-center justify-between w-full px-6 py-4 relative">
            <TouchableOpacity
              onPress={() => router.back()}
              className="z-10 p-2 -ml-2 rounded-full active:bg-zinc-800/50"
            >
              <Feather name="chevron-left" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <View className="absolute left-0 right-0 items-center justify-center">
              <Text className="text-white text-lg font-bold">
                Iniciar sesión
              </Text>
            </View>

            {/* Elemento vacío para balancear el flexbox del header */}
            <View className="w-10" />
          </View>

          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            className="flex-1"
            bounces={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Logo */}
            <View className="items-center justify-center py-6">
              <Logo size={150} />
            </View>

            {/* Form Card */}
            <View className="flex-1 bg-white rounded-t-[40px] px-6 pt-10 pb-8 shadow-2xl justify-between">
              <View className="space-y-4">
                {/* Email Input */}
                <Input
                  label="Correo electrónico"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    if (emailError) setEmailError("");
                  }}
                  keyboardType="email-address"
                  autoComplete="email"
                  error={emailError}
                  editable={!isLoading}
                />

                {/* Password Input */}
                <Input
                  label="Contraseña"
                  placeholder="••••••••••••"
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    if (passwordError) setPasswordError("");
                  }}
                  secureTextEntry
                  autoComplete="password"
                  error={passwordError}
                  editable={!isLoading}
                />

                {/* Forgot Password Link */}
                <TouchableOpacity
                  onPress={() =>
                    Alert.alert(
                      "Recuperar contraseña",
                      "Funcionalidad próximamente disponible",
                    )
                  }
                  activeOpacity={0.7}
                  className="self-end mt-1"
                >
                  <Text className="text-zinc-500 text-sm font-semibold">
                    ¿Olvidaste tu contraseña?
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Action Buttons & Links */}
              <View className="mt-8 space-y-6">
                {isLoading ? (
                  <View className="py-4 items-center justify-center">
                    <ActivityIndicator size="large" color="#4F7942" />
                  </View>
                ) : (
                  <Button
                    title="Iniciar sesión"
                    variant="primary"
                    onPress={handleLogin}
                  />
                )}

                <View className="flex-row justify-center items-center mt-6">
                  <Text className="text-zinc-500 text-sm font-medium">
                    ¿No tienes cuenta?{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => router.push("/register")}
                    activeOpacity={0.7}
                  >
                    <Text className="text-primary text-sm font-bold">
                      Regístrate
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
