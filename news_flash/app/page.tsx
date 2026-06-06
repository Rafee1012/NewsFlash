import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { signOutAction } from './actions/auth';

const Page = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return (
            <div className="flex flex-col items-center justify-center h-screen gap-8">
                <h1 className="text-6xl font-bold">NewsFlash</h1>
                <div className="flex gap-6">
                    <Link href="/signup">Sign Up</Link>
                    <Link href="/signin">Sign In</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6">
            <h1 className="text-4xl font-bold">welcome to home</h1>
            <form action={signOutAction}>
                <button type="submit">Logout</button>
            </form>
        </div>
    );
};

export default Page;