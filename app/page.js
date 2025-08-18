import Experince from "@/components/Experince";
import HeroNav from "@/components/HeroNav";
import NavBar from "@/components/NavBar";
import Serves from "@/components/Serves";
import WhyHire from "@/components/WhyHire";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <NavBar/>
    <HeroNav/>
    <Serves/>
    <Experince/>
    <WhyHire/>
    </>
  );
}
