import {DollarCircleOutlined,ShoppingCartOutlined,ShoppingOutlined,UserOutlined,} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";


export default function Dashboard(){
	const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
  		fetch(`${process.env.REACT_APP_API_URL}/products/getAllActive`)
  		.then(response => response.json())
  		.then(data => {
  			//console.log(data.length);
        setInventory(data.length);
      });
    });

	return (

		<div className='Dashboard'>
		<Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>

			<Space direction ='horizontal' >
			

			<DashboardCard 
				icon = <ShoppingCartOutlined 
				style={{color:"green",  
				backgroundColor:"rgba(0,255,0,0.3)",
				borderRadius:20,
				fontSize:24,
				padding:10,
			  }}
			  />
				title={"Orders"} 
				value ={orders} 
				/>
			<DashboardCard 
				icon = <ShoppingOutlined 
				style={{color:"blue",  
				backgroundColor:"rgba(255,255,0,0.3)",
				borderRadius:20,
				fontSize:24,
				padding:8,
			  }}
			  /> 

				title={"Inventory"} 
				value ={inventory} 
				/>
			<DashboardCard 
				icon = <UserOutlined 
				style={{color:"red",  
				backgroundColor:"rgba(0,255,255,0.85)",
				borderRadius:20,
				fontSize:24,
				padding:8,
			  }}
				/>
				title={"Customer"} 
				value ={customers} 
				/>
			<DashboardCard 
				icon = <DollarCircleOutlined 
				style={{color:"blue",  
				backgroundColor:"rgba(0,255,0,0.15)",
				borderRadius:20,
				fontSize:24,
				padding:8,
			  }}
				/>
				title={"Revenue"} 
				value ={revenue}
				 />
			</Space>	 
			</Space>
			<Space>
        <RecentOrders />
      </Space>
		</div>

	);

};
function DashboardCard({title, value, icon}){
	return(
		<Card>
			<Space direction ='horizontal' >
				{icon}
				<Statistic title={title}
				value={1234} 
				/>

			</Space>
		</Card>
	);
}
function RecentOrders(){
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
		fetch(`${process.env.REACT_APP_API_URL}/products/getAllActive`)
		.then(response => response.json())
		.then(data => {
			//console.log(data);
      setDataSource(data.splice(0,3));
      setLoading(false);
    });
  }, []);


	return(
		<>
		<div>
		<Space size={20} direction='vertical'>
		<Typography.Text>Active Products</Typography.Text>
		<Table columns ={[
			{
			title:'Name',
			dataIndex:'productName',
			},
			{
			title:'Description',
			dataIndex:'productDescription',
			},
			{
			title:'Price',
			dataIndex:'productPrice',
			},
		]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
		></Table>
		</Space>
		</div>
		</>
	)
}

