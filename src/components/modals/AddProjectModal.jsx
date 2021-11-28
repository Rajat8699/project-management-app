import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useToast } from "@chakra-ui/toast";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject, getAllProjects } from "../../redux/actions/home";
import CustomModal from "../common/Modal";
import CustomText from "../common/Text";

const AddProjectModal = (props) => {
	const { isOpen, onClose } = props;
	const dispatch = useDispatch();
	const { data: projectData } = useSelector((state) => state?.home?.Project);
	const [data, setData] = useState({ name: "", description: "" });
	const toast = useToast();
	const inputChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (projectData?.status === 201 && projectData?.success) {
			toast({
				title: "Project created successfully",
				status: "success",
				isClosable: true,
			});

			dispatch(getAllProjects());
			onClose();
		}
	}, [dispatch, projectData?.status, projectData?.success]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createProject(data));
	};

	return (
		<CustomModal isOpen={isOpen} onClose={onClose} title="Add Project">
			<form onSubmit={(e) => handleSubmit(e)}>
				<VStack alignItems="flex-start" w="full" spacing={5}>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Name</CustomText>
						<Input name="name" onChange={(e) => inputChange(e)} />
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Description</CustomText>
						<Textarea name="description" onChange={(e) => inputChange(e)} />
					</VStack>
					<Button colorScheme="blue" type="submit" size="sm">
						Add
					</Button>
				</VStack>
			</form>
		</CustomModal>
	);
};

export default AddProjectModal;
