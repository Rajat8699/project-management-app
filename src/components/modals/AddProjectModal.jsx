import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";
import CustomModal from "../common/Modal";
import CustomText from "../common/Text";

const AddProjectModal = (props) => {
	const { isOpen, onClose } = props;
	return (
		<CustomModal isOpen={isOpen} onClose={onClose} title="Add Project">
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
					<Button colorScheme="blue">Add</Button>
				</VStack>
			</form>
		</CustomModal>
	);
};

export default AddProjectModal;
