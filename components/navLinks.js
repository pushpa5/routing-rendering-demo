'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

export default function NavLinks({children, href}) {
    const pathName = usePathname();
    return (
        <Link href={href} className={pathName.startsWith(href) ? 'active' : ''}>
            {children}
        </Link>
    )

}