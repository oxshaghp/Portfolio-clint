import Experince from "@/components/Experince";
import Footer from "@/components/Footer";
import HeroNav from "@/components/HeroNav";
import Idea from "@/components/Idea";
import Loock from "@/components/Loock";
import NavBar from "@/components/NavBar";
import Result from "@/components/Result";
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
    <Loock/>
    <Result/>
    <Idea/>
    <Footer/>
    </>
  );
}
