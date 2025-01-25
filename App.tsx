import { ConfigCatProvider, PollingMode } from "configcat-react";

import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <ConfigCatProvider
      sdkKey="configcat-sdk-1/UjrdCLczTE2GU4wSLRGMwQ/SFkhR6nZv0Sf0fwM2IjD-A"
      pollingMode={PollingMode.AutoPoll}
      options={{ pollIntervalSeconds: 5 }}
    >
      <Home />
    </ConfigCatProvider>
  );
}
