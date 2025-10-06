import Application from "@/components/Application";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Application />
    </>
  );
}
