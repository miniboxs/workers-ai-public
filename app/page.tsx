'use client';

import styles from './page.module.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const Title = dynamic(() => import("@/app/components/Title/title"));
const Form = dynamic(() => import("@/app/components/Form/form"));
const ImgComp = dynamic(() => import("@/app/components/ImgComp/imgComp"));
const CopyRight = dynamic(() => import("@/app/components/CopyRight/copyright"))

export default function Home() {
  const [url, setUrl] = useState<string>('https://public.aisb.top/e06e8a0ef1a018d7b6944df936f2a3c1/JI5PaEB.jpg')
  const handleCreate = (url: string) => {
    setUrl(url)
  }
  return (
    <>
      <main className={styles.main}>
        <div className={styles.box}>
          <Title title="Workers AI Prompt Generator" content="Enter Input, Hit Generate button, & Copy the prompt" />
          <div className={styles.flex}>
            <Form handleCreate={handleCreate} />
            <ImgComp url={url} />
          </div>
        </div>
        <CopyRight />
      </main>
    </>
  )
}
