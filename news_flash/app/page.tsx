import EventCard from '@/components/EventCard';
import ExploreBtn from '@/components/ExploreBtn';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { signOutAction } from './actions/auth';
import NavBar from '@/components/NavBar';

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

const Page = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return (
        <div className="flex flex-col items-center justify-center h-screen gap-32">
            <h1 className="text-8xl font-bold">NewsFlash</h1>
            <div className="flex gap-8 mt-8">
            <button>
                <Link href="/signup">Sign Up</Link>
            </button>
            <button>
                <Link href="/signin">Sign In</Link>
            </button>
            </div>
        </div>
        );
    }

    return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">NewsFlash</h1>
      <div className="mt-8 text-center">
        <p className="text-lg mb-4">User ID: {session.user.id}</p>
        <form action={signOutAction}>
          <button type="submit">
            Logout
          </button>
        </form>
      </div>
    </div>
  );

  /*
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
    );
    */
}

export default Page;