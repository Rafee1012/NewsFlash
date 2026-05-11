import ExploreBtn from '@/components/ExploreBtn';
import React from 'react'

const Page = () => {
    return (
        <section>
            <h1 className="text-center">Welcome <br /> NewsFlash</h1>
            <p className="text-center mt-5">All your news, all in one place.</p>

            <ExploreBtn />

            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {[1, 2, 3, 4, 5].map((event) => (
                        <li key={"event"}>Event {event}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Page;