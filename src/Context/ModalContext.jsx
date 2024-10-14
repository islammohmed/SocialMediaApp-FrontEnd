import { createContext, useState, useContext } from "react";

// Create the context
const ModalContext = createContext();

// Custom hook to use the ModalContext
export const useModal = () => {
	return useContext(ModalContext);
};

// ModalProvider component to provide the context to the entire app
export const ModalProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	// Function to open the modal with specific content
	const openModal = (content) => {
		setModalContent(content);
		setIsOpen(true);
	};

	// Function to close the modal
	const closeModal = () => {
		setIsOpen(false);
		setModalContent(null);
	};

	return (
		<ModalContext.Provider
			value={{ isOpen, modalContent, openModal, closeModal }}
		>
			{children}
		</ModalContext.Provider>
	);
};
