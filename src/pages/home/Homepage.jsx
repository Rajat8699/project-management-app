import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../../components/common/Card";
import CustomTable from "../../components/common/Table";
import AddProjectModal from "../../components/modals/AddProjectModal";
import { getUsers } from "../../redux/actions/home";
import { useNavigate } from "react-router-dom";
import AddTaskModal from "../../components/modals/AddTaskModal";
import AddStatusModal from "../../components/modals/AddStatusModal";
const Homepage = () => {
	const dispatch = useDispatch();
	const usersData = useSelector((state) => state?.home?.Users?.data);
	const navigate = useNavigate();
	const [isOpen, setOpen] = useState(false);
	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	const ActionComponent = (props) => {
		const [taskModal, setTaskModal] = useState(false);
		return (
			<ButtonGroup variant="solid" spacing={3} size="sm">
				<Button colorScheme="purple" onClick={() => setTaskModal(true)}>
					Add task
				</Button>
				<AddTaskModal
					isOpen={taskModal}
					onClose={() => setTaskModal(false)}
					id={3}
				/>
				<Button
					colorScheme="green"
					onClick={() => navigate({ pathname: "/tasks", state: "hello" })}
				>
					View tasks
				</Button>
			</ButtonGroup>
		);
	};

	const AddStatus = (props) => {
		const [statusModal, setStatusModal] = useState(false);
		return (
			<>
				<Button
					colorScheme="purple"
					onClick={() => setStatusModal(true)}
					size="sm"
				>
					Add status
				</Button>
				<AddStatusModal
					id={3}
					isOpen={statusModal}
					onClose={() => setStatusModal(false)}
				/>
			</>
		);
	};

	const projectColumns = [
		{ Header: "Project Name", accessor: "project_name" },
		{ Header: "Description", accessor: "description" },
		{ Header: "Tasks", accessor: "tasks" },
		{ Header: "Status", accessor: "status" },
		{ Header: "Actions", accessor: "actions" },
	];

	const projectRows = [
		{
			project_name: "Project 1",
			description: "Description",
			tasks: "5",
			status: "In Progress",
			actions: <ActionComponent />,
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
			actions: <AddStatus />,
		},
	];

	return (
		<Box w="full" my="30px">
			<Center>
				<Heading>My Projects</Heading>
			</Center>
			<Flex alignItems="flex-end" justifyContent="flex-end" w="full">
				<Button colorScheme="blue" onClick={() => setOpen(true)} size="sm">
					Add Project
				</Button>
				<AddProjectModal isOpen={isOpen} onClose={() => setOpen(false)} />
			</Flex>
			<Card my="30px">
				<Flex w="full" my="50px" overflow="auto">
					<CustomTable columns={projectColumns} data={projectRows} />
				</Flex>
			</Card>
			<Center mt="50px">
				<Heading>Tasks assigned to me</Heading>
			</Center>
			<Card my="30px">
				<Flex w="full" my="30px" overflow="auto">
					<CustomTable columns={taskColumns} data={taskRows} />
				</Flex>
			</Card>
		</Box>
	);
};

export default Homepage;
