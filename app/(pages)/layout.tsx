import React from 'react';
import Header from '@/components/layouts/pages/Header';

export default function Layout({children}: { children: React.ReactElement }) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
}