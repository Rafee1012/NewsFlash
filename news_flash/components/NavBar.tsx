import Link from "next/link";

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link href='/' className="logo">
                    <p>NewsFlash</p>
                </Link>

                <ul>
                    <Link href='/' key='home'>Home</Link>
                    <Link href="/accounts" key='accounts'>Account</Link>
                    <Link href="/" key='subscriptions'>Subscriptions</Link>
                    <Link href="/" key='favourites'>Favourites</Link>
                    <Link href="/" key='biases'>Biases</Link>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;