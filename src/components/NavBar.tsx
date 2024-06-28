import Link from "next/link";
import LogoBlack from "@/svg/LogoBlack";

export const NavBar = () => {
    return (
        <nav className="bg-black text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    {/*<LogoBlack/>*/}
                    <img src="/logo.png" alt="FitImpulz Logo" className="h-10 mr-4"/>
                    <span className="font-semibold text-xl tracking-tight">FITIMPULZ</span>
                </div>
                <div className="flex space-x-4">
                    <Link href="/" passHref>
                        Home
                    </Link>
                    <Link href="/about-us" passHref>
                        O nas
                    </Link>
                    <Link href="/offer" passHref>
                        Nabídka
                    </Link>
                    <Link href="/lectors" passHref>
                        Nasi lektoři
                    </Link>
                    <Link href="/contact" passHref>
                        Kontakt
                    </Link>
                </div>
            </div>
        </nav>
    );
}