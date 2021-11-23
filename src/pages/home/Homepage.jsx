import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/home";

const Homepage = () => {
	const dispatch = useDispatch();
	const usersData = useSelector((state) => state?.home?.Users?.data);
	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);
	return (
		<div>
			{(usersData || []).map((user, index) => (
				<div key={index}>
					<h1>{user?.title}</h1>
					<h2>{user?.body}</h2>
				</div>
			))}
		</div>
	);
};

export default Homepage;
