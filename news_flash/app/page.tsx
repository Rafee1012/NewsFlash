import EventCard from '@/components/EventCard';
import ExploreBtn from '@/components/ExploreBtn';

const events = [
    {
        image: '/images/event1.png',
        title: 'Event1',
        slug: 'event1',
        location: 'location1',
        date: 'date1',
        time: 'time1',
        source: 'source1'
    },
    {
        image: '/images/event2.png',
        title: 'Event2',
        slug: 'event2',
        location: 'location2',
        date: 'date2',
        time: 'time2',
        source: 'source1'
    }
]

const Page = () => {
    return (
        <section>
            <h1 className="text-center">Welcome to<br /> NewsFlash</h1>
            <p className="text-center mt-5">All your news, all in one place.</p>

            <ExploreBtn />

            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {events.map((event) => (
                        <div>
                            <EventCard {... event}/>
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Page;