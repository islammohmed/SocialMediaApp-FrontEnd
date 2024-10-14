import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { useNavigationLinks } from "../Context/LinksProvider";
import { useModal } from "../Context/ModalContext";

export default function AccountsCanConnecting() {
	const { setNavigationLinks } = useNavigationLinks();
	const { closeModal } = useModal();
	const socialAccounts = [
		{
			name: "Facebook",
			icon: Facebook,
			color: "bg-blue-600 hover:bg-blue-700",
		},
		{ name: "Twitter", icon: Twitter, color: "bg-sky-500 hover:bg-sky-600" },
		{
			name: "Instagram",
			icon: Instagram,
			color: "bg-pink-600 hover:bg-pink-700",
		},
		{
			name: "LinkedIn",
			icon: Linkedin,
			color: "bg-blue-700 hover:bg-blue-800",
		},
		{ name: "GitHub", icon: Github, color: "bg-gray-800 hover:bg-gray-900" },
	];
	{
		/**in handle connect here when it's connected with backend we will save this data in his data 
  and his data became
  {
    name:"fares mohamed",
    email:"faresmohamed@gmail.com",
    image:"https://i.pravatar.cc/150?u=a0425818b205c,
    socialMedia:{
    facebook:"https://www.facebook.com/faresmohamed",
    twitter:"https://twitter.com/faresmohamed",
    instagram:"https://www.instagram.com/faresmohamed",
    linkedin:"https://www.linkedin.com/in/faresmohamed",
    github:"https://github.com/faresmohamed",
    }
  }
   */
	}
	const handleConnect = (accountName, setNavigationLinks, id, link) => {
		// console.log({ id, title: accountName });
		setNavigationLinks((prevLinks) => {
			return [
				...prevLinks,
				{ id, title: accountName, link: `/socialmedia${link}` },
			];
		});
		closeModal();
	};

	return (
		<div className="p-6 bg-white">
			<h2 className="text-2xl font-bold mb-6 text-center">
				Connect Your Accounts
			</h2>
			<div className="space-y-4">
				{socialAccounts.map((account, idx) => (
					<button
						onClick={() => {
							handleConnect(
								account.name,
								setNavigationLinks,
								idx + 1,
								`/${account.name}`
							);
						}}
						key={account.name}
						className={`w-full ${account.color} text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out flex items-center justify-center`}
						// onClick={() => handleConnect(account.name)}
					>
						<account.icon className="w-5 h-5 mr-2" />
						Connect {account.name}
					</button>
				))}
			</div>
		</div>
	);
}
