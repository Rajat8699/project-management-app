import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import { useToast } from "@chakra-ui/toast";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createTask, getUsers } from "../../redux/actions/task";
import CustomModal from "../common/Modal";
import CustomText from "../common/Text";
import moment from "moment";
import { getAllProjects } from "../../redux/actions/home";
const AddTaskModal = (props) => {
	const { isOpen, onClose, id } = props;
	const dispatch = useDispatch();
	const users = useSelector((state) => state?.task?.Users?.data?.data);
	const taskCreate = useSelector((state) => state?.task?.Task?.data);

	const toast = useToast();
	useEffect(() => {
		if (taskCreate?.status === 201 && taskCreate?.success) {
			toast({
				title: "Task created successfully",
				status: "success",
				isClosable: true,
			});
			dispatch(getAllProjects());
			onClose();
		}
	}, [dispatch]);

	const [data, setData] = useState({
		projectid: id,
		name: "",
		description: "",
		start_time: "",
		end_time: "",
		assign_to: "",
		cost: "",
	});
	const inputChange = (e) => {
		console.log(e.target.name, e.target.value);
		setData({
			...data,
			[e.target.name]:
				e.target.name === "start_time"
					? moment(e.target.value).utc().format()
					: e.target.name === "end_time"
					? moment(e.target.value).utc().format()
					: e.target.value,
		});
	};

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	const handleTaskSubmit = (e) => {
		e.preventDefault();
		dispatch(createTask(data));
	};
	return (
		<CustomModal isOpen={isOpen} onClose={onClose} title="Add Task">
			<form onSubmit={handleTaskSubmit}>
				<VStack alignItems="flex-start" w="full" spacing={5}>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Name</CustomText>
						<Input name="name" onChange={inputChange} />
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Description</CustomText>
						<Textarea name="description" onChange={inputChange} />
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Start date</CustomText>
						<Input name="start_time" type="date" onChange={inputChange} />
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>End date</CustomText>
						<Input name="end_time" type="date" onChange={inputChange} />
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Assign to</CustomText>
						<Select
							placeholder="Select option"
							name="assign_to"
							onChange={inputChange}
						>
							{(users || []).map((user) => {
								return (
									<option value={user?._id} key={user?._id}>
										{user?.name}
									</option>
								);
							})}
						</Select>
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Hourly Cost</CustomText>
						<InputGroup>
							<InputLeftAddon children="$" />
							<Input name="cost" onChange={inputChange} type="number" />
						</InputGroup>
					</VStack>
					<Button colorScheme="blue" type="submit" size="sm">
						Add task
					</Button>
				</VStack>
			</form>
		</CustomModal>
	);
};

export default AddTaskModal;
