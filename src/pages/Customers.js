import { Avatar, Rate, Space, Table, Typography,Button,Form,Input } from "antd";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [product, setProduct] = useState('');


  useEffect(() => {
    setLoading(true);

    fetch(`${process.env.REACT_APP_API_URL}/users/allusers`, {
        headers: {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(data => {
        if(data){
            console.log(data);
            setDataSource(data);
            setLoading(false);
        }

    });

  }, [isAdmin]);
/*
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Users</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Mobile Number",
            dataIndex: "mobileNo",
          },
          {
            title: "IsAdmin",
            dataIndex: "isAdmin",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
*/


  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      render: (link) => {
        return <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />;
      },
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      render: (text, record) => {
        if (editingRow === record._id) {
          return (
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      render: (text, record) => {
        if (editingRow === record._id) {
          return (
            <Form.Item name="lastName">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text, record) => {
        if (editingRow === record._id) {
          return (
            <Form.Item name="email">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Mobile No",
      dataIndex: "mobileNo",
      render: (text, record) => {
        if (editingRow === record._id) {
          return (
            <Form.Item name="mobileNo">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Admin",
      dataIndex: "isAdmin",
      width: '20%',
      render : (Admin) => String(Admin),
      render: (text, record) => {
        if (editingRow === record._id) {
          return (
            <Form.Item 
                name="isAdmin">
                <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      orderedProduct:[
        {
            products:[
              {
                  title: "productId",
                  dataIndex: "productId",
                  render: (text, record) => {
                    if (editingRow === record._id) {
                      return (
                        <Form.Item name="productId">
                          <Input />
                        </Form.Item>
                      );
                    } else {
                      return <p>{text}</p>;
                    }
                  },
              }]
    }]
      
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setEditingRow(record._id);
                form.setFieldsValue({
                  firstName: record.firstName,
                  lastName: record.lastName,
                  email:record.email,
                  mobileNo:record.mobileNo,
                  isAdmin:record.isAdmin,
                  orderedProduct:[
                      {
                        products:[
                          {
                            productId:record.productId
                        }]
                    }]          
                });
              }}
            >
              Edit
            </Button>
            <Button type="link" htmlType="submit">
              Save
            </Button>
          </>
        );
      },
    },
  ];
  const onFinish = (values) => {
    console.log(values._id);
    const updatedDataSource = [dataSource];
   // updatedDataSource.splice(editingRow, 1,values );
    setDataSource(updatedDataSource);
    //setEditingRow(null);
  };
  return (
    
    <div className="Inventory border">

      <header className="Inventory-header">
        <Form form={form} onFinish={onFinish}>
          <Table columns={columns} dataSource={dataSource} pagination={{
          pageSize: 5,
        }}></Table>
        </Form>
      </header>

    </div>
    

  );
}


