import HeadText from "./HeadText";
import profile from "../assets/reed-profile-square 1.png";
// const profileData = {
// 	username: "Jolie_Smith💕",
// 	profilePicture: profile,
// 	bio: `👩‍💻 Tech Enthusiast | Front-End Developer 🎨 | Creative mind at
// 						work 💡
// 						Passionate about building digital experiences that make life easier
// 						|
// 						#WomenInTech #CodingLife`,
// 	link: "x.com/joliesmith",
// 	followers: 1000,
// 	following: 500,
// 	posts: 600,
// 	createdAt: "2012",
// };

const ProfileInformation = ({
	username,
	profilePicture = profile,
	bio,
	link,
	followers,
	following,
	posts,
	createdAt,
}) => {
	return (
		<div className="bg-[#443C7C] px-4 py-5 rounded-lg">
			<HeadText>Profile Information</HeadText>
			<div className="flex flex-col items-start pt-2 px-2">
				{/**img and username */}
				<div className="flex items-center gap-2 ml-8 ">
					<div className="relative w-20 h-20">
						<img
							src={profilePicture}
							alt="Profile"
							className="w-20 h-20 rounded-full absolute left-0 bottom-[-25px]"
						/>
					</div>
					<h3 className="text-[#B1AAE5] mt-5 md:text-[35px] text-[20px] font-[400] leeading-[42px] font-Itim">
						{username}
					</h3>
				</div>
				<div className="bg-[#D9D9D9] p-3 w-full rounded-[20px]">
					<div className="md:ml-28 ml-24">
						<div className="text-sm leading-[16.8px] text-[#6E6E6E] flex gap-2">
							<p>{posts} Tweets</p>,<p>since {createdAt}</p>
						</div>
						<div className="text-sm leading-[16.8px] text-[#6E6E6E] flex gap-2">
							<p>
								Followers:
								{followers >= 1000 ? followers / 1000 + "k" : followers}
							</p>
							|
							<p>
								Following:
								{following >= 1000 ? following / 1000 + "k" : following}
							</p>
						</div>
					</div>
					<div className="">
						<table className=" ">
							<tbody>
								<tr className="">
									<td className="md:w-[124px] py-2 text-[24px] leading-[28.8px] font-[400] font-Itim ">
										user name:
									</td>
									<td className="py-2 px-4 text-sm font-Itim">{username}</td>
								</tr>
								<tr>
									<td className="md:w-[124px] py-2  text-[24px] leading-[28.8px] font-[400] font-Itim">
										Bio:
									</td>
									<td className="py-2 px-4 text-sm font-Itim">{bio}</td>
								</tr>
								<tr>
									<td className="md:w-[124px] py-2  text-[24px] leading-[28.8px] font-[400] font-Itim">
										Link:
									</td>
									<td className="py-2 px-4 text-sm font-Itim">
										<a
											href="https://x.com/joliesmith"
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500 hover:underline"
										>
											x.com/joliesmith
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileInformation;
