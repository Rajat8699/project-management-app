import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Flex } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { useNavigate } from "react-router";
import CustomText from "./Text";

const Header = (props) => {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.clear();
		navigate("/");
	};
	return (
		<Flex
			bg="blue.300"
			w="full"
			h="50px"
			p="20px"
			alignItems="center"
			justifyContent="space-between"
		>
			<CustomText variant="sm">Task Management</CustomText>
			<Menu isLazy>
				<MenuButton>
					<Avatar size="xs">
						<AvatarBadge boxSize="1.25em" bg="green.500" />
					</Avatar>
				</MenuButton>
				<MenuList>
					<MenuItem onClick={logout}>Logout</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	);
};

export default Header;