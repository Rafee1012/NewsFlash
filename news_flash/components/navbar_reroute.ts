'use client';

import { authClient } from '@/lib/auth-client';

export default async function checkAuth(): Promise<boolean> {
    const session = await authClient.getSession();

    return !!session?.data;
}