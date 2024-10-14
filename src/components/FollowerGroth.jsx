import { TrendingUp } from "lucide-react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ month: "Jan", followers: 10087 },
	{ month: "Feb", followers: 20000 },
	{ month: "Mar", followers: 35000 },
	{ month: "Apr", followers: 32000 },
	{ month: "May", followers: 40000 },
	{ month: "Jun", followers: 65000 },
	{ month: "Jul", followers: 55000 },
	{ month: "Aug", followers: 70000 },
	{ month: "Sep", followers: 85000 },
	{ month: "Oct", followers: 95000 },
	{ month: "Nov", followers: 110000 },
	{ month: "Dec", followers: 119586 },
];

export default function FollowGroth() {
	const highestPoint = Math.max(...data.map((item) => item.followers));
	const lowestPoint = Math.min(...data.map((item) => item.followers));
	const average = Math.round(
		data.reduce((sum, item) => sum + item.followers, 0) / data.length
	);
	const growthPercentage = (
		((highestPoint - lowestPoint) / lowestPoint) *
		100
	).toFixed(2);

	return (
		<div className="md:p-6 p-2 bg-[#4a3b7f] rounded-3xl text-white">
			<h2 className="text-[26px] font-[400] mb-4 text-yellow-300 text-stroke-1 font-jaro">
				Follower Growth
			</h2>
			<div className="flex md:flex-row  flex-col-reverse gap-5 justify-between">
				<div className="mb-6 md:w-[70%] w-full h-[300px]">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={data}>
							<CartesianGrid strokeDasharray="3 3" stroke="#8884d8" />
							<XAxis dataKey="month" stroke="#fff" />
							<YAxis stroke="#fff" />
							<Tooltip
								contentStyle={{ backgroundColor: "#4a3b7f", border: "none" }}
								labelStyle={{ color: "#fff" }}
								itemStyle={{ color: "#fff" }}
							/>
							<Line
								type="monotone"
								dataKey="followers"
								stroke="#ffd700"
								strokeWidth={3}
								dot={false}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
				<div className="flex md:flex-col flex-row flex-wrap md:gap-3 gap-6 md:w-1/4 w-full">
					<div>
						<p className="text-[14px] leading-[15.19px] font-400">
							Highest Toughpoint
						</p>
						<p className="text-[36px] leading-[39.06px] font-[400]">
							{highestPoint.toLocaleString()}
						</p>
						<p className="bg-green-400 max-w-fit rounded-full mt-1 p-1">
							December
						</p>
					</div>
					<div>
						<p className="text-[14px] leading-[15.19px] font-400">
							Lowest Toughpoint
						</p>
						<p className="text-[36px] leading-[39.06px] font-[400]">
							{lowestPoint.toLocaleString()}
						</p>
						<p className="bg-red-400 max-w-fit rounded-full p-1 mt-1">
							January
						</p>
					</div>
					<div>
						<p className="text-[14px] leading-[15.19px] font-400">Average</p>
						<p className="text-[36px] leading-[39.06px] font-[400]">
							{average.toLocaleString()}
						</p>
						<p className="flex text-green-500 gap-2">
              <TrendingUp className="text-green-500" />
              25.65%
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
