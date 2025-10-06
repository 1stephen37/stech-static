'use client'
import React from 'react';
import Hero from '@/components/pages/home/Hero';
import Brands from '@/components/pages/home/Brands';
import SectionSale from "@/components/pages/home/SectionSale";
import SectionCategories from '@/components/pages/home/SectionCategories';
import News from '@/components/pages/home/News';
import Reviews from "@/components/pages/home/Reviews";

export default function Page() {

    return (
        <section className="container relative">
            <Hero/>
            <Brands/>
            <SectionSale/>
            <SectionCategories/>
            <News/>
            <Reviews/>
        </section>
    );
}