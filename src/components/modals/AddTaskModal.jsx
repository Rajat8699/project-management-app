import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";
import CustomModal from "../common/Modal";
import CustomText from "../common/Text";

const AddTaskModal = (props) => {
	const { isOpen, onClose } = props;
	return (
		<CustomModal isOpen={isOpen} onClose={onClose} title="Add Task">
			<form>
				<VStack alignItems="flex-start" w="full" spacing={5}>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Name</CustomText>
						<Input name="name" />
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Description</CustomText>
						<Textarea name="description" />
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
						<CustomText>Assign to</CustomText>
						<Select placeholder="Select option">
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</Select>
					</VStack>
					<Button colorScheme="blue">Add task</Button>
				</VStack>
			</form>
		</CustomModal>
	);
};

export default AddTaskModal;
