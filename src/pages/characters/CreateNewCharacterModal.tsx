import { Button, Form, Input, message, Modal, Select } from "antd";

import { useCreateCharacterMutation } from "./fake-mutation.generated";

const { Option } = Select;

interface CreateNewCharacterModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
}

const CreateNewCharacterModal = ({
  isModalVisible,
  setIsModalVisible,
}: CreateNewCharacterModalProps) => {
  const [form] = Form.useForm();
  const [createCharacter, { loading: creating }] = useCreateCharacterMutation();

  const handleCreateCharacter = async (values: any) => {
    const fallbackImage = `${import.meta.env.BASE_URL}fake-character.webp`;

    await createCharacter({
      variables: {
        input: {
          name: values.name,
          status: values.status,
          species: values.species,
          type: values.type || "",
          gender: values.gender,
          image: values.image || fallbackImage,
        },
      },
      optimisticResponse: {
        createCharacter: {
          __typename: "CreateCharacterPayload",
          success: true,
          message: "optimistic",
          character: {
            __typename: "Character",
            id: String(Date.now()),
            name: values.name,
            status: values.status,
            species: values.species,
            type: values.type || "",
            gender: values.gender,
            image: values.image || fallbackImage,
            created: new Date().toISOString(),
          },
        },
      },
    });

    message.success(`Character "${values.name}" created!`);
    setIsModalVisible(false);
    form.resetFields();
  };
  return (
    <Modal
      title="Create New Character"
      open={isModalVisible}
      onCancel={() => {
        setIsModalVisible(false);
        form.resetFields();
      }}
      footer={null}
      width={500}>
      <Form form={form} layout="vertical" onFinish={handleCreateCharacter}>
        <Form.Item
          name="name"
          label="Character Name"
          rules={[{ required: true, message: "Please enter character name!" }]}>
          <Input placeholder="Enter character name" />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: "Please select status!" }]}>
          <Select placeholder="Select status">
            <Option value="Alive">Alive</Option>
            <Option value="Dead">Dead</Option>
            <Option value="unknown">Unknown</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="species"
          label="Species"
          rules={[{ required: true, message: "Please enter species!" }]}>
          <Select placeholder="Select species">
            <Option value="Male">Human</Option>
            <Option value="Female">Alien</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}>
          <Select placeholder="Select gender">
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Genderless">Genderless</Option>
            <Option value="unknown">Unknown</Option>
          </Select>
        </Form.Item>

        <Form.Item name="type" label="Type (Optional)">
          <Input placeholder="Enter type" />
        </Form.Item>

        <Form.Item name="image" label="Image URL (Optional)">
          <Input placeholder="Enter image URL" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={creating}
            block
            style={{
              background: "#000",
              borderColor: "#000",
              color: "#fff",
            }}>
            {creating ? "Creating Character..." : "Create Character"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateNewCharacterModal;
