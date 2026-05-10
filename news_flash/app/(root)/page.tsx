import React from "react";
import Hello from "../components/Hello";

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