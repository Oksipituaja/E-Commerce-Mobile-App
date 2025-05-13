import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import config from "../gluestack-ui.config"; // pastikan path-nya benar

export default function RootLayout() {
    return (
      <GluestackUIProvider config={config}>
        <Stack />
      </GluestackUIProvider>
    );
  }
