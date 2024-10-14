import "../components/CustomizeScroll.css";
import MetricCard from "../components/MetricCard";
import HeadText from "../components/HeadText";
import ProfileInformation from "../components/ProfileInformation";
import AudinceMoodTracker from "../components/AudinceMoodTracker";
import ProfileDiscoveryChart from "../components/ProfileDiscoveryChart";
import { ChevronDown } from "lucide-react";
import { InstagramData } from "../Api/EndPoints";
import HashtagPerformanceComponent from "../components/HashtagPerformanceComponent";
const {
	profileInformation,
	overViewData,
	HashtagPerformance,
	ProfileDiscovery,
	topPosts,
	moodData,
} = InstagramData;
export default function SocialMediaAppDashboard() {
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<div className="container mx-auto md:p-4 p-0  max-w-full">
			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-4 justify-items-center">
				{InstagramData.overViewData.map((el, idx) => (
					<MetricCard
						key={idx}
						icon={el.icon}
						increase={el.increase}
						title={el.title}
						value={el.value}
					/>
				))}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
				<ProfileInformation
					bio={profileInformation.Bio}
					createdAt={profileInformation.createdAt}
					followers={profileInformation.Followers}
					following={profileInformation.Following}
					link={profileInformation.Link}
					username={user.name}
					posts={profileInformation.posts}
				/>
				<div className="">
					<AudinceMoodTracker moodData={moodData} posts={topPosts} />
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div className="bg-[#B1AAE5] p-4 rounded-lg">
					<div className="flex items-center justify-between">
						<HeadText>Hashtag Performance</HeadText>

						<form action="">
							<div className="relative">
								<select className="appearance-none bg-[#D9D9D9] text-[#a19127] t text-[14px] leading-[16.8px] font-[400] font-Itim px-4 py-2 pr-8 rounded-lg focus:outline-none">
									<option>Last three days</option>
									<option>Last three months</option>
									<option>Last six months</option>
								</select>
								<ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#a19127]" />
							</div>
						</form>
					</div>
					<HashtagPerformanceComponent Hashtags={HashtagPerformance} />
				</div>

				<ProfileDiscoveryChart />
			</div>
		</div>
	);
}
