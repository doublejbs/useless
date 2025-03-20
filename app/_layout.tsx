import { router, Slot } from "expo-router";
import { useEffect } from "react";

const RootLayout = () => {
  useEffect(() => {
    router.replace("/auth/login");
  }, []);

  return <Slot></Slot>;
};

export default RootLayout;
