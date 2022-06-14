import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./MainPage.css";
import ContactTableHeaders from "../ContactTableHeaders";
import { fetchUsers } from "../../redux/actions/usersActions";

export const MainPage = () => {
	const dispatch = useDispatch();
	const {users} = useSelector(store=>store);
	useEffect(()=>{
		dispatch(fetchUsers());
	},[])
	// console.log(fetchUsers())
   return (
		<div className="mainPage">
			{users.isLoaded ? 
			<table>
			<ContactTableHeaders/>		
			</table>
			: <>nothing</>
			}
		</div>
	);
}


export default MainPage;