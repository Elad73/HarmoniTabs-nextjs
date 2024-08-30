import Link from "next/link";
import classes from './header.module.css'
import Image from "next/image";
import logoImg from '@/assets/logo.png'


export default function Header()
{
    return (
        
        <div className="w-full absolute text-white z-10">
            <nav className="container relative flex flex-wrap items center justify-between mx-auto p-8" >
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="Harmonica player" priority />HarmoniTabs
                </Link>
                <div className="space-x-8 text-xl text-[#80ed99]">
                    <Link href="/tabs">All tabs</Link>
                    <Link href="/artists">Tabs by Artists</Link>
                    <Link href="/about">About</Link>
                </div>
            </nav>
        </div>
    );
}