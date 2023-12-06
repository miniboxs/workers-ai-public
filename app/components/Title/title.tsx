import styles from "./title.module.css"
import { props } from "@/app/_types"
export default (props: props) => {
    const { title, content } = props
    return (
        <>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>{content}</div>
        </>
    )
}