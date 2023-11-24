import {useState,useEffect} from "react";
import { Button, Table, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useParams } from 'react-router-dom';
import Swal2 from 'sweetalert2';


export default function Inventory() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [dataSource, setDataSource] = useState([]);
    const {id} = useParams();
    const [product, setProduct] = useState('');
    const [isActive, setIsActive]=useState(true);
    const [prodata,setProData]=useState("");


 useEffect(() => {
    //setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/products/all`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.push({
        productName: productName,
        productDescription: productDescription,
        productPrice: productPrice,
        isActive: isActive
      });
      setDataSource(data);
   //   setLoading(false);
    });

  }, []);




  const columns = [
    {
      key: "1",
      title: "ProductId",
      dataIndex: "_id",
    },
    {
      key: "2",
      title: "productName",
      dataIndex: "productName",
      value:{productName},
      onChange:{setProductName},
    },
    {
      key: "3",
      title: "productDescription",
      dataIndex: "productDescription",
    },
    {
      key: "4",
      title: "productPrice",
      dataIndex: "productPrice",
    },
    {
      key: "5",
      title: "Active",
      dataIndex: "isActive",
      key: 'isActive',
      width: '20%',
      render : (Active) => String(Active),
    },
   
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              // onClick={() => { Removefunction(item.id) }} 
              onClick={() => {
                onEditProduct(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                console.log(record);
                onDeleteProduct(record._id);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
            <button
              onClick={() => {
                console.log(record._id);
                archieveProduct(record._id);
              }}
              style={{ color: "red", marginLeft: 12 }}
            >Archive</button>
            <button
              onClick={() => {
                console.log(record._id);
                activateProduct(record._id);
              }}
              style={{ color: "red", marginLeft: 12 }}
            >Activate</button>
          </>
        );
      },
    },
  ];


    const archieveProduct = (id) => {
      fetch(`${process.env.REACT_APP_API_URL}/products/archive/${id}`,{
        method: "PUT",
        headers: {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        },
      })
      .then(response => response.json())
      .then(data => {
         if(data==true){
          console.log(data);
          Swal2.fire({
            title: 'Successfully archive a product',
            icon: 'success',
            text: 'You deactivate a product!'
          })

        }else{
          Swal2.fire({
            title: 'Product already archive',
            icon: 'error',
            text: 'Denied!'
          })
        }
      })
    }

    const activateProduct = (id) => {
      fetch(`${process.env.REACT_APP_API_URL}/products/activate/${id}`,{
        method: "PUT",
        headers: {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        },
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          alert('Activate successfully.')     
          window.location.reload();
      })
    }


    
  const onAddProduct = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newProduct = {
      id: randomNumber,
      productName: "ProductName " + randomNumber,
      productDescription: "ProductDescription " + randomNumber,
      productPrice: "productPrice " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newProduct];
    });
  };


  const onDeleteProduct = (id) => {
        console.log(id);
        if (window.confirm('Do you want to remove?')) {
          /*fetch("http://localhost:8000/employee/" + id, {*/

            fetch(`${process.env.REACT_APP_API_URL}/products/deleteProduct/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            })          
            .then((res) => {
                  console.log(id)
                  alert('Removed successfully.')
                  window.location.reload();
            }).catch((err) => {
                console.log(err.message)
              })
        }
    }


/*  const onEditProduct = (record) => {
    setIsEditing(true);
    setEditingProduct({ ...record });
  };*/

 const onEditProduct=async(e)=>{
        console.log(`updateRole`)
     // e.preventDefault();
      setIsEditing(true);
        const prodata={productName,productDescription,productPrice,isActive};
    
        await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
            method: "PUT",
                headers: {
                    'Content-Type': 'application/json',  
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                },
            //body: JSON.stringify({
                body:JSON.stringify
                (prodata)    
        })
        .then(response => response.json())
        .then(data=> {
            if(data)
            console.log();
            setProData(data)
            setEditingProduct({ ...data });
            alert('Saved successfully.')
            window.location.reload()
        }) 
    }



  const resetEditing = () => {
    setIsEditing(false);
    setEditingProduct(null);
  };

  return (
    <div className="Inventory">
      <header className="Inventory-header">
        <Button onClick={onAddProduct}>Add a new Product</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Product"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}

          onOk={() => {
            setDataSource((pre) => {
              return pre.map((product) => {
                if (product._id === editingProduct._id) {
                  return editingProduct;
                } else {
                  return product;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingProduct?.productName}
            onChange={(e) => {
              setEditingProduct((pre) => {
                return { ...pre, productName: e.target.value };
              });
            }}
          />
          <Input
            value={editingProduct?.productDescription}
            onChange={(e) => {
              setEditingProduct((pre) => {
                return { ...pre, productDescription: e.target.value };
              });
            }}
          />
          <Input
            value={editingProduct?.productPrice}
            onChange={(e) => {
              setEditingProduct((pre) => {
                return { ...pre, productPrice: e.target.value };
              });
            }}
          />
          <Input
            value={editingProduct?.isActive}
            onChange={(e) => {
              setEditingProduct((pre) => {
                return { ...pre, isActive: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

