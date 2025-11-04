import { Redirect, Slot } from 'expo-router';
import React from 'react';

import 'nativewind';

export default function TabLayout() {
    const isAuthenticated = true;
    if (!isAuthenticated)
        return <Redirect href="/sign-in" />

    return <Slot />

}
