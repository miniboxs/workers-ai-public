import style from "./imgList.module.css"
import { props } from "@/app/_types"
import {
    DownloadOutlined,
    RotateLeftOutlined,
    RotateRightOutlined,
    SwapOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
} from '@ant-design/icons';
import { Image, Space, message } from 'antd';
import { useState } from "react";

export default (props: props) => {
    const { imgList } = props;
    const [selectIndex, setSelectIndex] = useState(-1)

    const onDownload = ({ id, src }: { [key: string]: any }) => {
        fetch(src)
            .then((response) => response.blob())
            .then((blob) => {
                const url = URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.download = `${id}.png`;
                document.body.appendChild(link);
                link.click();
                URL.revokeObjectURL(url);
                link.remove();
            });
    };

    const reas = (
        <div className={style.main}>
            {imgList.map((item: { [key: string]: any }, index: number) => (
                <div className={style.imgBox} onMouseEnter={() => setSelectIndex(index)} onMouseLeave={() => setSelectIndex(-1)}>
                    <div className={style.promp}
                        style={selectIndex == index ? { zIndex: '999' } : { zIndex: '-999' }}
                    >
                        {item.prompt}
                    </div>
                    <Image
                        className={style.img}
                        height={340}
                        width={320}
                        src={item.src}
                        preview={{
                            toolbarRender: (
                                _,
                                {
                                    transform: { scale },
                                    actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                                },
                            ) => (
                                <Space size={12} className="toolbar-wrapper">
                                    <DownloadOutlined onClick={() => onDownload(item)} />
                                    <SwapOutlined rotate={90} onClick={onFlipY} />
                                    <SwapOutlined onClick={onFlipX} />
                                    <RotateLeftOutlined onClick={onRotateLeft} />
                                    <RotateRightOutlined onClick={onRotateRight} />
                                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                                </Space>
                            ),
                        }}
                    />
                </div>
            ))}
        </div>
    )
    return (
        <>
            {reas}
        </>
    )
}