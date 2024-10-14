import { XCircle } from "lucide-react";
import { useModal } from "../Context/ModalContext";
import { useEffect } from "react";

export default function Modal() {
	const { isOpen, modalContent, closeModal } = useModal();

	const stopBodyScrolling = (toggle) => {
		document.body.style.overflow = toggle ? "hidden" : "auto";
	};

	// Use useEffect to handle the mount and unmount lifecycle
	useEffect(() => {
		if (isOpen) {
			stopBodyScrolling(true);
		}
		return () => {
			stopBodyScrolling(false);
		};
	}, [isOpen]);

	// Updated handleClose to manage body scroll
	const closeHandler = () => {
		stopBodyScrolling(false);
		closeModal();
	};

	// Do not render anything if modal is not open
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white rounded-lg md:w-1/3 w-[80%] p-6 relative">
				<button
					className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
					onClick={closeHandler}
				>
					<XCircle className="w-6 h-6" />
				</button>
				{/* Render the passed content dynamically */}
				{modalContent}
			</div>
		</div>
	);
}
