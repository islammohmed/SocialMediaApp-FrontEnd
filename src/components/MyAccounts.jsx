import { PlusCircle } from "lucide-react";
import logo from "../assets/reed-profile-square 1.png";
import { useModal } from "../Context/ModalContext";
import AccountsCanConnecting from "./AccountsCanConnecting";

function MyAccounts() {
	const { openModal } = useModal();
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-[26px] font-[400] mb-4 text-yellow-300 text-stroke-1 font-jaro">
					Your Accounts
				</h2>
				<button
					onClick={() => openModal(<AccountsCanConnecting />)}
					className="flex items-center text-sm text-purple-600 hover:text-purple-800"
				>
					<PlusCircle className="h-4 w-4 mr-1" />
					Add Account
				</button>
			</div>{" "}
			{/* Accounts List */}
			<div className="space-y-4">
				{[1].map((_, index) => (
					<div
						key={index}
						className="bg-purple-200 rounded-lg md:p-6 p-2 flex items-center"
					>
						<img
							src={logo}
							alt={user.namme}
							className="h-16 w-16 rounded-full mr-4"
						/>
						<div>
							<h2 className="font-bold">@{user.name}</h2>
							<p className="text-sm text-gray-500">
								Twitter / X · 122,458 followers
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default MyAccounts;
