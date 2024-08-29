import Link from "next/link";
import classes from './header.module.css'


export default function Header()
{
    return (
        <div className={classes.header}>
        <Link href="/">Home</Link>
        <Link href="/tabs">All tabs</Link>
        <Link href="/artists">Tabs by Artists</Link>
        <Link href="/about">About</Link>
    </div>
    );
}