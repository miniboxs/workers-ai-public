'use client';

import { props } from "@/app/_types"
import { Button, Form, Input, Col, Row, Select, message, FloatButton } from 'antd';
import type { FormInstance } from 'antd/es/form';
import styles from "./form.module.css"
import { selectList } from "@/app/_types"
import { useRef, useState } from "react";
// import ImgList from "@/app/components/ImgList/imgList"

type FieldType = {
    image?: string;
    background?: string;
    style?: string;
    artist?: string;
    colors?: string;
    light?: string;
    tim?: string;
    md?: string;
};

const controller = new AbortController();
const signal = controller.signal;

export default (props: props) => {
    const { handleCreate } = props
    const [imgList, setImgList] = useState([])
    const [loading, setLoading] = useState(false);
    const formRef = useRef<FormInstance>(null)
    const { Option } = Select;
    const { TextArea } = Input;

    const onFinish = async (values: FieldType) => {
        setLoading(true);
        handleCreate('')
        setImgList([]);
        const text = `${values.tim !== undefined && values.tim !== '' ? values.tim + ' ' : ''}` +
            `${values.style !== undefined && values.style !== '' ? values.style + ' of ' : ''}` +
            `${values.image !== undefined && values.image !== '' ? 'a ' + values.image : ''}` +
            `${values.background !== undefined && values.background !== '' ? ' with background ' + values.background : ''}` +
            `${values.artist !== undefined && values.artist !== '' ? 'by ' + values.artist + ',' : ''}` +
            `${values.md !== undefined && values.md !== '' ? values.md + ',' : ''}` +
            `${values.light !== undefined && values.light !== '' ? values.light + ',' : ''}` +
            `${values.colors !== undefined && values.colors !== '' ? values.colors : ''}`;

        const params = {
            headers: {
                "Authorization": "bb314ed36050a277eecd251066c11c84"
            },
            method: "POST",
            body: JSON.stringify({ prompt: text, model: "@cf/stabilityai/stable-diffusion-xl-base-1.0" })
        }

        const res = await fetch(`/api/ai`, { ...params, signal })

        if (!res.ok) {
            setLoading(false)
            setImgList([])
            // This will activate the closest `error.js` Error Boundary
            return message.error(res.text())
        }

        const blob = await res.blob()
        setTimeout(() => {
            const imageUrl = URL.createObjectURL(blob);
            handleCreate(imageUrl)
            setLoading(false)
            message.success("generate successfully!")
        }, 500);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onReset = () => {
        formRef.current?.resetFields();
        controller.abort();
        handleCreate('https://public.aisb.top/e06e8a0ef1a018d7b6944df936f2a3c1/JI5PaEB.jpg')
        setImgList([])
    };

    const selectComp = (
        <Row gutter={16} justify="space-between">
            {selectList.map((item, index) => (
                <Col span={12} key={item.id}>
                    <Form.Item name={item.name} label={item.title}>
                        <Select
                            placeholder="Select a option"
                            allowClear
                            defaultActiveFirstOption={true}
                            value=""
                        >
                            {item.list.map((its, idx) => (
                                <Option value={its.value} key={idx}>{its.key}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
            ))}
        </Row>
    )

    const formComp = (
        <Form
            name="basic"
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            // style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            size="large"
            ref={formRef}
        >
            <Row>
                <Col span={24}>
                    <Form.Item<FieldType>
                        label="Description"
                        name="image"
                        rules={[{ required: true, message: 'Please input your desc!' }]}
                    >
                        <TextArea placeholder="Enter a brief description" rows={2} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Keywords"
                        name="background"
                    >
                        <Input placeholder="(option) Key words" />
                    </Form.Item>
                </Col>
            </Row>
            {selectComp}
            <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                <Button type="primary" loading={loading} htmlType="submit">
                    Generate
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    )



    return (
        <>
            <div className={styles.form}>
                {formComp}
                {/* <ImgList imgList={imgList} /> */}
                {/* <FloatButton.BackTop visibilityHeight={0} /> */}
            </div>
        </>
    )
}