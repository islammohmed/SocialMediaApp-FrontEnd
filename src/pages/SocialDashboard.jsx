import FollowGroth from "../components/FollowerGroth";
import AudinceChart from "../components/AudinceChart";
import MyAccounts from "../components/MyAccounts";
import ProfileSection from "../components/ProfileSection";
import { TotalOverView } from "../Api/EndPoints";
import MetricCard from "./../components/MetricCard";
const { profileData, totalData } = TotalOverView;
export default function SocialDashboard() {
	return (
		<div className="min-h-screen bg-gray-100 md:p-6">
			<div className="gap-6 flex flex-col ">
				{/* Combined Profile and Metrics Section */}
				<div className="flex w-full gap-4 md:flex-row flex-col">
					<div className="md:w-2/4 w-full rounded-lg md:p-6 flex flex-col gap-2">
						{/* Profile Section */}
						<ProfileSection
							userName={profileData.userName}
							createdAt={profileData.createdAt}
							profileImage={profileData.profileImage}
						/>

						{/* Metrics Section */}
						<div className="grid grid-cols-2 gap-4">
							{totalData.map((metric, index) => (
								<MetricCard
									key={index}
									icon={metric.icon}
									increase={metric.increase}
									title={metric.title}
									value={metric.value}
								/>
							))}
						</div>
					</div>

					{/* Follower Growth Section */}
					<div className="md:w-2/4 w-full">
						<FollowGroth />
					</div>
				</div>

				{/* Audience Age & Gender Section */}
				<div className="flex w-full gap-4 md:flex-row flex-col">
					<div className="md:w-2/4 w-full">
						<AudinceChart />
					</div>

					{/* Your Accounts Section */}
					<div className="md:w-2/4 w-full bg-purple-100 rounded-lg p-6">
						<MyAccounts />
					</div>
				</div>
			</div>
		</div>
	);
}
