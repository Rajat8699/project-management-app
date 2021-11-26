import { Button } from "@chakra-ui/button";
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import Card from "../../components/common/Card";
import CustomTable from "../../components/common/Table";
import AddStatusModal from "../../components/modals/AddStatusModal";

const TasksPage = (props) => {
	console.log(props, "propssss");

	const ActionComponent = (props) => {
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
	const taskColumns = [
		{ Header: "Task", accessor: "task" },
		{ Header: "Description", accessor: "Description" },
		{ Header: "Assigned to", accessor: "assigned_to" },
		{ Header: "From date", accessor: "from_date" },
		{ Header: "To date", accessor: "to_date" },
		{ Header: "Status", accessor: "status" },
		{ Header: "Actions", accessor: "actions" },
	];

	const taskRows = [
		{
			task: "Task 1",
			Description: "Task 1 Description",
			assigned_to: "Rajat Thakur",
			from_date: "2020-01-01",
			to_date: "2020-01-01",
			status: "In Progress",
			actions: <ActionComponent />,
		},
	];
	return (
		<Card mt="50px">
			<Box w="full" my="30px">
				<Center>
					<Heading>Tasks</Heading>
				</Center>
				<Flex alignItems="flex-end" justifyContent="flex-end" w="full">
					<Button colorScheme="blue">Add Task</Button>
				</Flex>
				<Flex w="full" my="50px" overflow="auto">
					<CustomTable columns={taskColumns} data={taskRows} />
				</Flex>
			</Box>
		</Card>
	);
};

export default TasksPage;
