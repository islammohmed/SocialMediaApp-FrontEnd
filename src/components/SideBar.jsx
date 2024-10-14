import { Home, Search, User, FileText, HelpCircle } from "lucide-react";

const SideBar = () => {

	return (
		<div className="w-16 md:mr-8 mr-3">
			<div className="space-y-4">
				<div className="bg-purple-100 p-3 flex justify-center items-center rounded-lg">
					<Home className="h-6 w-6 text-purple-600" />
				</div>
				<div className="p-3 flex justify-center items-center rounded-lg hover:bg-purple-100">
					<Search className="h-6 w-6 text-gray-400" />
				</div>
				<div className="p-3 flex justify-center items-center rounded-lg hover:bg-purple-100">
					<User className="h-6 w-6 text-gray-400" />
				</div>
				<div className="p-3 flex justify-center items-center rounded-lg hover:bg-purple-100">
					<FileText className="h-6 w-6 text-gray-400" />
				</div>
				<div className="p-3 flex justify-center items-center rounded-lg hover:bg-purple-100">
					<HelpCircle className="h-6 w-6 text-gray-400" />
				</div>
			</div>
		</div>
	);
};

export default SideBar;
