import React from 'react';
import Header from '@/components/layouts/pages/Header';
import Footer from '@/components/layouts/pages/Footer';

export default function Layout({children}: { children: React.ReactElement }) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}