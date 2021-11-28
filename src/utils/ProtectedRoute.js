import React, { useEffect, useState } from "react";
import { Navigate, Route } from "react-router";

const ProtectedRoute = ({ children }) => {
	const isAuthenticated = localStorage.getItem("isAuthenticated");

	return isAuthenticated ? (
		<Route path="/*" element={children} />
	) : (
		<Navigate to="/" />
	);
};

export default ProtectedRoute;
