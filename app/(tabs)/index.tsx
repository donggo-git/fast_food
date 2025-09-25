import { offers } from "@/constants";
import { FlatList, Pressable, Text, View } from "react-native";
//import { FlatList, View } from "react-native-reanimated/lib/typescript/Animated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <FlatList data={offers} renderItem={
        ({ item, index }) => {
          return (
            <View>
              <Pressable className="bg-amber-600">
                <Text>{item.title}</Text>
              </Pressable>
            </View>)
        }
      } />
    </SafeAreaView>
  );
}
