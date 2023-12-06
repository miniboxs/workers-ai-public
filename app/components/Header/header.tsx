'use client'

import styles from "./header.module.css";
import Link from "next/link";
import routes from "@/app/routes";
import { usePathname } from 'next/navigation'

export default () => {
    const pathname = usePathname()

    return (
        <>
            <main className={styles.main}>
                <ul className={styles.ul}>
                    {routes.map((item, index) => (
                        <li key={index}>
                            <Link
                                className={`${styles.link} ${pathname === item.path ? styles.active : ''}`}
                                href={item.link !== "" ? item.link : item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
};