// import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Overlay from "@/components/Overlay/Overlay";
import Wrapper from "@/components/Wrapper/Wrapper";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
 <Header/>
 <Overlay/>
 <Wrapper/>


    </>
  );
}
