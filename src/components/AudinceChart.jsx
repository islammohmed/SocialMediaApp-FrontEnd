import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ age: "+60", male: 30, female: 40 },
	{ age: "57", male: 20, female: 25 },
	{ age: "44", male: 50, female: 30 },
	{ age: "35", male: 40, female: 60 },
	{ age: "25", male: 35, female: 50 },
	{ age: "20", male: 25, female: 40 },
	{ age: "15", male: 15, female: 20 },
];

export default function AudienceChart() {
	return (
		<div className="bg-[#4b3b7c] md:p-6 p-2 rounded-3xl">
			<h2 className="text-[26px] font-[400] mb-4 text-yellow-300 text-stroke-1 font-jaro">
				Audience Age & Gender
			</h2>
			<div className="flex justify-between mb-2">
				<span className="text-[#ffd700]">♂ Male</span>
				<span className="text-[#e6e6fa]">♀ Female</span>
			</div>
			<ResponsiveContainer width="100%" height={400}>
				<BarChart
					layout="vertical"
					data={data}
					margin={{ top: 20, bottom: 5 }}
				>
					<CartesianGrid
						strokeDasharray="3 3"
						horizontal={false}
						stroke="#ffffff33"
					/>
					<XAxis type="number" axisLine={false} tick={false} />
					<YAxis
						dataKey="age"
						type="category"
						axisLine={false}
						tickLine={false}
						tick={{ fill: "#ffffff" }}
					/>

					<Bar
						className="bg-red-100"
						dataKey="male"
						fill="#ffd700"
						barSize={20}
					/>
					<Bar dataKey="female" fill="#e6e6fa" barSize={20} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
