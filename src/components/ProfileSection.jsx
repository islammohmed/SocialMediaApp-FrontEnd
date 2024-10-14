import logo from "../assets/reed-profile-square 1.png";

function ProfileSection({ userName, createdAt, profileImage = logo }) {
	return (
		<div className="w-full rounded-[20px] bg-[#B1AAE5] flex items-center p-2 max-w-[512px]">
			<div className="flex items-center">
				<img
					src={logo}
					alt={userName}
					className="h-16 w-16 rounded-full mr-4"
				/>
				<div>
					<h2 className="text-2xl font-bold">{userName}</h2>
					<p className="text-sm text-gray-500">
						Account Created on {createdAt}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ProfileSection;
