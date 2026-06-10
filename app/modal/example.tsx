import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function ExampleModal() {
  return (
    <View className="flex-1 justify-center items-center bg-background/90">
      <View className="bg-surface p-6 rounded-lg">
        <Text className="text-text text-lg font-bold mb-4">Modal Example</Text>
        <Pressable
          onPress={() => router.back()}
          className="bg-primary p-3 rounded"
        >
          <Text className="text-surface text-center">Close</Text>
        </Pressable>
      </View>
    </View>
  );
}
