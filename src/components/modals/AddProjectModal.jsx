import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useToast } from "@chakra-ui/toast";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	createProject,
	emptyHomeReducer,
	getAllProjects,
} from "../../redux/actions/home";
import CustomModal from "../common/Modal";
import CustomText from "../common/Text";
import microValidator from "micro-validator";
import { pxToEm } from "../../utils/commonMethods";

const AddProjectModal = (props) => {
	const { isOpen, onClose } = props;
	const dispatch = useDispatch();
	const { data: projectData } = useSelector((state) => state?.home?.Project);
	const [data, setData] = useState({ name: "", description: "" });
	const [error, setError] = useState({ name: "", description: "" });

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
			dispatch(emptyHomeReducer());
			onClose();
		}
	}, [dispatch, projectData?.status, projectData?.success]);

	const validate = (data) => {
		const errors = microValidator.validate(
			{
				name: {
					required: {
						errorMsg: `Name is required`,
					},
				},
				description: {
					required: {
						errorMsg: `Description is required`,
					},
				},
			},
			data
		);
		setError({ ...error, name: errors.name, description: errors.description });
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		e.preventDefault();
		const err_resp = validate(data) || {};
		if (Object.keys(err_resp).length === 0) {
			dispatch(createProject(data));
		}
	};

	return (
		<CustomModal isOpen={isOpen} onClose={onClose} title="Add Project">
			<form onSubmit={(e) => handleSubmit(e)}>
				<VStack alignItems="flex-start" w="full" spacing={5}>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Name</CustomText>
						<Input
							name="name"
							onChange={(e) => inputChange(e)}
							isInvalid={error?.name?.length ? true : false}
						/>
						{error?.name?.length > 0 && (
							<CustomText mt={pxToEm(8)} color="red.400" variant="sm">
								{/* <WarningFill /> */}
								&nbsp;{error?.name}
							</CustomText>
						)}
					</VStack>
					<VStack w="full" alignItems="flex-start">
						<CustomText>Description</CustomText>
						<Textarea
							name="description"
							onChange={(e) => inputChange(e)}
							isInvalid={error?.description?.length ? true : false}
						/>
						{error?.description?.length > 0 && (
							<CustomText mt={pxToEm(8)} color="red.400" variant="sm">
								{/* <WarningFill /> */}
								&nbsp;{error?.description}
							</CustomText>
						)}
					</VStack>
					<Button colorScheme="blue" type="submit" size="sm">
						Add
					</Button>
				</VStack>
			</form>
		</CustomModal>
	);
};

export default memo(AddProjectModal);
