import Link from "next/link";

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link href='/' className="logo">
                    <p>NewsFlash</p>
                </Link>

                <ul>
                    <li key='home'><Link href='/'>Home</Link></li>
                    <li key='accounts'><Link href="/accounts">Account</Link></li>
                    <li key='subscriptions'><Link href="/">Subscriptions</Link></li>
                    <li key='favourites'><Link href="/">Favourites</Link></li>
                    <li key='biases'><Link href="/">Biases</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;