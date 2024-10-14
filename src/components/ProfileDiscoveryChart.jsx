import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";
import { ChevronDown, TrendingUp } from "lucide-react";
import HeadText from "./HeadText";

const data = [
	{ month: "jan", value: 200 },
	{ month: "Feb", value: 20 },
	{ month: "Mar", value: 100 },
	{ month: "Apr", value: 160 },
	{ month: "May", value: 60 },
	{ month: "Jun", value: 80 },
];

export default function ProfileDiscoveryChart() {
	return (
		<div className="w-full max-w-3xl bg-[#4a3b7f] p-6 rounded-3xl">
			<div className="flex justify-between items-center mb-4">
				<HeadText>Profile Discovery</HeadText>
				<div className="relative">
					<select className="appearance-none bg-[rgb(93,77,146)] text-yellow-300 px-4 py-2 pr-8 rounded-lg focus:outline-none font-Itim">
						<option>Last six months</option>
					</select>
					<ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-300" />
				</div>
			</div>
			<div className="text-right mb-2 flex justify-end flex-col items-end">
				<div className="text-green-400  font-semibold max-w-fit flex items-center justify-end flex-row-reverse gap-2">
					<p>14.7%</p>
					<TrendingUp />
				</div>
				<span className="text-gray-300 ml-2">from last 6 months</span>
			</div>
			<ResponsiveContainer width="100%" height={200}>
				<BarChart
					data={data}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid
						strokeDasharray="3 3"
						vertical={false}
						stroke="#6c5da3"
					/>
					<XAxis
						dataKey="month"
						axisLine={false}
						tickLine={false}
						tick={{ fill: "#d1c7e8" }}
					/>
					<YAxis axisLine={false} tickLine={false} tick={{ fill: "#d1c7e8" }} />
					<Bar
						dataKey="value"
						fill="url(#colorGradient)"
						radius={[10, 10, 0, 0]}
					/>
					<defs>
						<linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#fde047" />
							<stop offset="100%" stopColor="#ca8a04" />
						</linearGradient>
					</defs>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
