import Link from "next/link";
import classes from './header.module.css'
import Image from "next/image";
import logoImg from '@/assets/logo.png'


export default function Header()
{
    return (
        
        <div className={classes.header}>
            <div>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="Harmonica player" priority />HarmoniTabs
                </Link>
            </div>
            <nav className={classes.nav} >
                <ul>
                    <li>
                        <Link href="/tabs">All tabs</Link>
                    </li>
                    <li>
                        <Link href="/artists">Tabs by Artists</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}