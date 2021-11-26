import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";
import CustomModal from "../common/Modal";
import CustomText from "../common/Text";

const AddStatusModal = (props) => {
	const { isOpen, onClose, id } = props;
	return (
		<CustomModal isOpen={isOpen} onClose={onClose} title="Add Status">
			<form>
				<VStack alignItems="flex-start" w="full" spacing={5}>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Name</CustomText>
						<Input name="name" value="task" disabled />
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Description</CustomText>
						<Textarea name="description" value="do the task" disabled />
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Start date</CustomText>
						<Input name="startDate" type="date" />
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>End date</CustomText>
						<Input name="endDate" type="date" />
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Status</CustomText>
						<Select placeholder="Select option">
							<option value="pending">Pending</option>
							<option value="progress">In Progress</option>
							<option value="complete">Complete</option>
						</Select>
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Hours spent</CustomText>
						<Input name="endDate" type="time" />
					</VStack>
					<Button colorScheme="blue">Add Status</Button>
				</VStack>
			</form>
		</CustomModal>
	);
};

export default AddStatusModal;
