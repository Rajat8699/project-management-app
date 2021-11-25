import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../../components/common/Card";
import CustomTable from "../../components/common/Table";
import { getUsers } from "../../redux/actions/home";

const Homepage = () => {
	const dispatch = useDispatch();
	const usersData = useSelector((state) => state?.home?.Users?.data);
	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	const projectColumns = [
		{ Header: "Project Name", accessor: "project_name" },
		{ Header: "Tasks", accessor: "tasks" },
		{ Header: "Status", accessor: "status" },
		{ Header: "Actions", accessor: "actions" },
	];

	const projectRows = [
		{
			project_name: "Project 1",
			tasks: "5",
			status: "In Progress",
			actions: (
				<ButtonGroup variant="solid" spacing={3} size="sm">
					<Button colorScheme="purple">Add task</Button>
					<Button colorScheme="green">View tasks</Button>
				</ButtonGroup>
			),
		},
	];

	const taskColumns = [
		{ Header: "Task", accessor: "task" },
		{ Header: "Description", accessor: "Description" },
		{ Header: "From date", accessor: "from_date" },
		{ Header: "To date", accessor: "to_date" },
		{ Header: "Actions", accessor: "actions" },
	];

	const taskRows = [
		{
			task: "Task 1",
			Description: "Task 1 Description",
			from_date: "2020-01-01",
			to_date: "2020-01-01",
			actions: (
				<Button colorScheme="purple" size="sm">
					Add status
				</Button>
			),
		},
	];

	return (
		<Box w="full" my="30px">
			<Center>
				<Heading>My Projects</Heading>
			</Center>
			<Flex alignItems="flex-end" justifyContent="flex-end" w="full">
				<Button colorScheme="blue">Add Project</Button>
			</Flex>
			<Card my="30px">
				<Flex w="full" my="50px" overflow="auto">
					<CustomTable columns={projectColumns} data={projectRows} />
				</Flex>
			</Card>
			<Center mt="50px">
				<Heading>Tasks assigned to me</Heading>
			</Center>
			<Flex alignItems="flex-end" justifyContent="flex-end" w="full">
				<Button colorScheme="blue">Add Status</Button>
			</Flex>
			<Card my="30px">
				<Flex w="full" my="30px" overflow="auto">
					<CustomTable columns={taskColumns} data={taskRows} />
				</Flex>
			</Card>
		</Box>
	);
};

export default Homepage;
