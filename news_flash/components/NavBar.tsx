"use client";

import { useRouter } from "next/navigation";
import checkAuth from "@/components/navbar_reroute";
import Link from "next/link";

export default function NavBar() {
    // use router when navigation depends on js logic
    const router = useRouter();

    const goProtected = async (path: string) => {
        const ok = await checkAuth();

        if (!ok) {
            alert("Please sign in");
            router.push("/");
            return;
        }

        router.push(path);
    };

    return (
        <header>
            <nav>
                <Link href='/' className="logo">
                    <p>NewsFlash</p>
                </Link>
                <a href="/">Home</a>

                <button onClick={() => goProtected("/subscriptions")}>
                    Subscriptions
                </button>

                <button onClick={() => goProtected("/favourites")}>
                    Favourites
                </button>

                <button onClick={() => goProtected("/biases")}>
                    Biases
                </button>
            </nav>
        </header>
    );
}