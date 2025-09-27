import { offers } from "@/constants"; //import { FlatList, View } from "react-native-reanimated/lib/typescript/Animated";
import { Fragment } from "react";
import { FlatList, Image, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  console.log(offers)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={offers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={
          ({ item, index }) => {
            return (
              <View >
                <Pressable
                  className="offer-card"
                  style={{ backgroundColor: item.color }}
                >
                  {({ pressed }) => (
                    <Fragment>
                      <View className={"h-full w-1/2"}>
                        <Image source={item.image} className={"size-full"} resizeMode={"contain"} />
                      </View>

                      <View className="offer-card_info"></View>
                    </Fragment>
                  )}
                </Pressable>
              </View>)
          }
        } />
    </SafeAreaView>
  );
}
