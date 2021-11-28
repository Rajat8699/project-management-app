import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../../components/common/Card";
import CustomTable from "../../components/common/Table";
import AddProjectModal from "../../components/modals/AddProjectModal";
import { useNavigate } from "react-router-dom";
import AddTaskModal from "../../components/modals/AddTaskModal";
import AddStatusModal from "../../components/modals/AddStatusModal";
import Header from "../../components/common/Header";
import Layout from "../../components/Layout/Layout";
import { getAllProjects } from "../../redux/actions/home";
import { getTask } from "../../redux/actions/task";
import moment from "moment";
const Homepage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isOpen, setOpen] = useState(false);
	const projects = useSelector((state) => state?.home?.projectsList);
	const tasks = useSelector((state) => state?.task?.taskList?.data?.data);
	const date = moment().utc().format();

	useEffect(() => {
		dispatch(getAllProjects());
		dispatch(getTask(date));
	}, [dispatch]);

	const AddStatus = (props) => {
		const { id, task } = props;
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
					id={id}
					task={task}
					isOpen={statusModal}
					onClose={() => setStatusModal(false)}
				/>
			</>
		);
	};

	const ActionComponent = (props) => {
		const { id } = props;
		const [taskModal, setTaskModal] = useState(false);
		return (
			<ButtonGroup variant="solid" spacing={3} size="sm">
				<Button colorScheme="purple" onClick={() => setTaskModal(true)}>
					Add task
				</Button>
				<AddTaskModal
					isOpen={taskModal}
					onClose={() => setTaskModal(false)}
					id={id}
				/>
				<Button
					colorScheme="green"
					onClick={() => navigate("/tasks", { state: { id: "hello" } })}
				>
					View tasks
				</Button>
			</ButtonGroup>
		);
	};

	const projectRows = () => {
		const projectsData = projects?.data?.data;
		if (Array?.isArray(projectsData) && projectsData.length > 0) {
			return (projectsData || []).map((project) => {
				return {
					project_name: project?.title,
					description: project?.description,
					tasks: project?.task?.length,
					actions: <ActionComponent id={project?._id} />,
				};
			});
		} else {
			return [];
		}
	};

	const taskRows = () => {
		if (Array?.isArray(tasks) && tasks.length > 0) {
			return (tasks || []).map((task) => {
				const { work } = task;
				let hours = [];
				for (let i = 0; i < work?.length; i++) {
					hours.push(work[i]?.work_hour);
				}
				return {
					task: task?.title,
					description: task?.description,
					from_date: moment(task?.start_time).format("YYYY/M/DD"),
					to_date: moment(task?.end_time).format("YYYY/M/DD"),
					status: task?.status,
					total_hours: hours?.reduce((a, b) => a + b, 0),
					actions: <AddStatus id={task?._id} task={task} />,
				};
			});
		} else {
			return [];
		}
	};

	const projectColumns = [
		{ Header: "Project Name", accessor: "project_name" },
		{ Header: "Description", accessor: "description" },
		{ Header: "Tasks", accessor: "tasks" },
		{ Header: "Actions", accessor: "actions" },
	];

	// const projectRows = [
	// 	{
	// 		project_name: "Project 1",
	// 		description: "Description",
	// 		tasks: "5",
	// 		status: "In Progress",
	// 		actions: <ActionComponent />,
	// 	},
	// ];

	const taskColumns = [
		{ Header: "Task", accessor: "task" },
		{ Header: "Description", accessor: "description" },
		{ Header: "From date", accessor: "from_date" },
		{ Header: "To date", accessor: "to_date" },
		{ Header: "Status", accessor: "status" },
		{ Header: "Total Hours Spent", accessor: "total_hours" },
		{ Header: "Actions", accessor: "actions" },
	];

	// const taskRows = [
	// 	{
	// 		task: "Task 1",
	// 		Description: "Task 1 Description",
	// 		from_date: "2020-01-01",
	// 		to_date: "2020-01-01",
	// 		actions: <AddStatus />,
	// 	},
	// ];

	return (
		<Layout>
			<Box w="full" my="30px">
				<Center>
					<Heading>My Projects</Heading>
				</Center>
				<Flex alignItems="flex-end" justifyContent="flex-end" w="full" p="20px">
					<Button colorScheme="blue" onClick={() => setOpen(true)} size="sm">
						Add Project
					</Button>
					<AddProjectModal isOpen={isOpen} onClose={() => setOpen(false)} />
				</Flex>
				<Flex w="full" my="50px" overflow="scroll">
					<CustomTable columns={projectColumns} data={projectRows()} />
				</Flex>
				<Center mt="50px">
					<Heading>Tasks assigned to me</Heading>
				</Center>
				<Flex w="full" my="30px" overflow="scroll">
					<CustomTable columns={taskColumns} data={taskRows()} />
				</Flex>
			</Box>
		</Layout>
	);
};

export default Homepage;
