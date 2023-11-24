import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



export default function SideMenu(){
	const navigate = useNavigate()
	return (
		<div className = 'SideMenu'>

			<Menu 
				onClick={(item)=>{
					//item.key
					navigate(item.key);
				}}
				items={[
					
				{
					label:'Dashboard',
					icon:<AppstoreOutlined />,
					key:'/',
				},
				{
					label:'Inventory',
					icon:<ShopOutlined />,
					key:'/Inventory',
				},
				{
					label:'Orders',
					icon:<ShoppingCartOutlined />,
					key:'/orders',
				},
				{
					label:'Customers',
					icon:<UserOutlined />,
					key:'/customers',
				},
				]}
			></Menu>
		</div>
	) 
}