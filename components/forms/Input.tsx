import { TextInput, TextInputProps, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  secureTextEntry,
  className = "",
  style,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPassword = secureTextEntry;
  const showSecureEntry = isPassword && !isPasswordVisible;

  return (
    <View className={`w-full mb-4 ${className}`.trim()}>
      <Text className="text-zinc-800 text-sm font-semibold mb-2">
        {label}
      </Text>
      
      <View 
        className={`flex-row items-center border border-zinc-200 bg-white rounded-2xl px-4 h-14 ${
          error ? "border-red-500" : "focus:border-primary"
        }`}
      >
        <TextInput
          className="flex-1 text-zinc-800 text-base h-full"
          placeholderTextColor="#A1A1AA"
          secureTextEntry={showSecureEntry}
          autoCapitalize={isPassword ? "none" : props.autoCapitalize}
          {...props}
        />
        
        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            activeOpacity={0.7}
            className="p-1"
          >
            <Feather
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color="#71717A"
            />
          </TouchableOpacity>
        )}
      </View>

      {error ? (
        <Text className="text-red-500 text-xs mt-1 ml-1">{error}</Text>
      ) : null}
    </View>
  );
}
