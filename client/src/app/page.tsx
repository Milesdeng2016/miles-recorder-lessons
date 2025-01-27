"use client";
import { useVad } from "../vad/use-vad";
export default function Home() {
  const { recording, processing } = useVad({
    onSpeechEnd: async ({ float32Array }) => {},
  });

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div>{recording ? "Recording" : "Not Recording"}</div>
    </div>
  );
}
