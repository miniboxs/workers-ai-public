'use client'

import styles from "./imgComp.module.css";
import { Spin } from 'antd';

interface propsInter {
    url?: string
}

export default (props: propsInter) => {
    const { url } = props;

    const load = (
        <div className={styles.loading}>
            <Spin tip="Loading" size="large"></Spin>
        </div>
    )

    return (
        <>
            <main className={styles.main}>
                {url ? <img src={url} alt="" /> : load}
            </main>
        </>
    )
}