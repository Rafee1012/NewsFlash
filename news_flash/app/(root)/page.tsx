import Hello from "@/components/Hello";
import React from "react";

const Home = () => {
    console.log('server component')

    return (
        <main>
            <div className = "text-2xl underline">
                Welcome to my website
            </div>
            <Hello />
        </main>
    )
}

export default Home