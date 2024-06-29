import {useEffect, useState} from "react";

const Navigation = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    const navBackground = scrollY < 200 ? 'bg-transparent' : 'bg-black';
    return (
        <nav className={`fixed top-0 p-4 w-screen space-x-4 flex justify-between items-center transition-all duration-500 ${navBackground}`}>
            <img src={'src/assets/logo.svg'} alt={'FitImpulz'} className={'w-20 h-auto'} />
        </nav>
    )
}

export default Navigation