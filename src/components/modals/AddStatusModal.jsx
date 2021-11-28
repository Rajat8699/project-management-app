import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import moment from "moment";
import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { addStatus } from "../../redux/actions/home";
import CustomModal from "../common/Modal";
import CustomText from "../common/Text";

const AddStatusModal = (props) => {
	const { isOpen, onClose, id, task } = props;
	console.log(moment(task).format("DD-MM-YYYY"), "ttttttttttttttttttttttttttt");
	const dispatch = useDispatch();
	const date = moment().utc().format();
	const [data, setData] = useState({
		work_date: date,
		work_hour: "",
		status: "",
		id: id,
	});

	const inputChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addStatus(data));
	};

	return (
		<CustomModal isOpen={isOpen} onClose={onClose} title="Add Status">
			<form onSubmit={handleSubmit}>
				<VStack alignItems="flex-start" w="full" spacing={5}>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Name</CustomText>
						<Input name="name" value={task?.title} disabled />
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Description</CustomText>
						<Textarea name="description" value={task?.description} disabled />
					</VStack>
					{/* <VStack w="full" alignItems="flex-start">
						<CustomText>Start date</CustomText>
						<Input
							name="startDate"
							type="date"
							value={moment(task?.start_time).format("DD-MM-YYYY")}
							disabled
						/>
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>End date</CustomText>
						<Input
							name="endDate"
							type="date"
							value={moment(task?.end_time).format("DD-MM-YYYY")}
							disabled
						/>
					</VStack> */}
					<VStack w="full" alignItems="flex-start">
						<CustomText>Status</CustomText>
						<Select
							placeholder="Select option"
							defaultValue={task?.status}
							name="status"
							onChange={inputChange}
						>
							<option value="todo">Pending</option>
							<option value="inprogress">In Progress</option>
							<option value="complete">Complete</option>
						</Select>
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Hours spent</CustomText>
						<Input
							name="work_hour"
							type="number"
							maxValue={24}
							onChange={inputChange}
						/>
					</VStack>
					<Button colorScheme="blue" size="sm" type="submit">
						Add Status
					</Button>
				</VStack>
			</form>
		</CustomModal>
	);
};

export default memo(AddStatusModal);
