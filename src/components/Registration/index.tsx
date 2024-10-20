import { RegistrationStyled } from './styled';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
    UploadFile,
    message,
} from 'antd';
import { addNewSpace } from '@/pages/api/spaceApi';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface SpaceData {
    spaceName: string;
    spaceLocation: string;
    description: string;
    spacePrice: number;
    discount: number;
    amenities: string;
    cleanTime: number;
    spaceStatus: 'AVAILABLE' | 'UNAVAILABLE';
    isOpen: boolean;
}

const Registration = () => {
    // const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [form] = Form.useForm(); // useForm 훅을 사용하여 폼 인스턴스 생성

    const [formData, setFormData] = useState<SpaceData>({
        spaceName: '',
        spaceLocation: '',
        description: '',
        spacePrice: 0,
        discount: 0,
        amenities: '',
        cleanTime: 0,
        spaceStatus: 'AVAILABLE',
        isOpen: true,
    });

    const [loading, setLoading] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNumberChange = (
        value: number | null,
        name: keyof SpaceData
    ) => {
        setFormData({
            ...formData,
            [name]: value ?? 0, // null일 경우 0으로 처리
        });
    };

    const handleSwitchChange = (checked: boolean) => {
        setFormData({
            ...formData,
            isOpen: checked,
        });
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await addNewSpace(formData);
            message.success('공간 등록 성공');
            form.resetFields(); // 전송 성공 시 폼 리셋
        } catch (error) {
            message.error('공간등록 실패');
        }
    };

    // const handleSubmit = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await addNewSpace({
    //             ...formData,
    //             images: fileList.map(file => file.originFileObj)
    //         })
    //     }
    // }

    const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
    const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
        setComponentDisabled(disabled);
    };

    return (
        <RegistrationStyled>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
                onFinish={handleSubmit}
            >
                <Form.Item label="제목">
                    <Input
                        name="spaceName"
                        value={formData.spaceName}
                        onChange={handleInputChange}
                    />
                </Form.Item>
                <Form.Item label="위치">
                    <Input
                        name="spaceLocation"
                        value={formData.spaceLocation}
                        onChange={handleInputChange}
                    />
                </Form.Item>
                <Form.Item label="청소시간">
                    <Select
                        value={formData.cleanTime}
                        onChange={(value) =>
                            handleNumberChange(value, 'cleanTime')
                        }
                    >
                        <Select.Option value="30">30</Select.Option>
                        <Select.Option value="60">60</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="공간 소개">
                    <TextArea
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="custom-textarea"

                    />
                </Form.Item>
                <Form.Item label="시설 안내">
                    <TextArea
                        rows={2}
                        name="amenities"
                        value={formData.amenities}
                        onChange={handleInputChange}
                        className="custom-textarea"

                    />
                </Form.Item>
                {/* <Form.Item label="예약시 주의사항">
                    <TextArea rows={2} />
                </Form.Item> */}
                {/* <Form.Item label="RangePicker">
                    <RangePicker />
                </Form.Item> */}
                {/* <Form.Item label="기준 인원">
                    <InputNumber />
                </Form.Item> */}
                <Form.Item label="가격">
                    <InputNumber
                        value={formData.spacePrice}
                        onChange={(value) =>
                            handleNumberChange(value, 'spacePrice')
                        }
                    />
                </Form.Item>
                <Form.Item label="할인금액">
                    <InputNumber
                        value={formData.discount}
                        onChange={(value) =>
                            handleNumberChange(value, 'discount')
                        }
                    />
                </Form.Item>

                <Form.Item label="공개여부" valuePropName="checked">
                    <Switch
                        onChange={handleSwitchChange}
                        checked={formData.isOpen}
                    />
                </Form.Item>
                {/* <Form.Item label="Upload" valuePropName="fileList">
                    <Upload
                        action="/upload.do"
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleChange}
                        showUploadList={{
                            showPreviewIcon: false, // 미리보기 아이콘 완전히 비활성화
                            showRemoveIcon: true, // 삭제 아이콘만 활성화
                        }}
                    >
                        {fileList.length >= 8 ? null : (
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        )}
                    </Upload>
                </Form.Item> */}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        등록하기
                    </Button>
                </Form.Item>
            </Form>
        </RegistrationStyled>
    );
};
export default Registration;