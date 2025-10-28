'use client';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle
} from '@/components/ui/sheet';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from "react-icons/ci";
import {VisuallyHidden} from '@radix-ui/react-visually-hidden';
import {links} from "@/app/constants";
import Logo from "@/components/layouts/pages/Logo";
import React from "react";
import {motion} from "framer-motion";

export default function MobileNav() {
    const path = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px]"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4 pt-10">
                <VisuallyHidden>
                    <SheetTitle>Mobile Navigation</SheetTitle>
                </VisuallyHidden>

                <div className="mt-32 mb-40 text-center font-bold">
                    <Logo href={'/'}/>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`text-[2rem] relative hover:text-primary hover:text-gray-600 transition-all capitalize`}
                        >
                            {link.path === path && (
                                <motion.span initial={{y: '-100%'}}
                                             animate={{y: 0}}
                                             transition={{type: 'tween'}}
                                             layoutId={'underline'}
                                             className={`absolute left-0 top-full h-[2px] w-full bg-primary`}/>
                            )}
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}