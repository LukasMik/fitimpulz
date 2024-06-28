import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return (
   <main className={'flex justify-center items-center h-screen'}>
     <p>Hello world</p>
   </main>
  )
}

export default HomePage;
