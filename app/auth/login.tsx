import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GoogleLoginButton from "@/component/auth/GoogleLoginButton";

const login = () => {
  const handleClickGoogle = () => {};

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 64,
                fontWeight: "bold",
              }}
            >
              useless
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
            }}
          >
            <GoogleLoginButton />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default login;
