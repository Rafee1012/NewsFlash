'use client'; // ensures component is rendered client-side (pre-rendered server-side)

const Hello = () => {
    console.log('client component')

    return (
        <div className = "text-1xl underline">
            Hello
        </div>
    )
}

export default Hello