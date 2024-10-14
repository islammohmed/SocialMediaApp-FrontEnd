"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import HeadText from "./HeadText";

export default function AudinceMoodTracker({ posts, moodData }) {
	return (
		<div className="bg-[#B1AAE5] p-6 rounded-3xl max-w-3xl mx-auto">
			<HeadText>Audience Mood Tracker</HeadText>
			<div className="flex flex-col md:flex-row justify-between">
				<div className="bg-purple-100 rounded-xl p-4 md:w-3/5">
					<h2 className="text-[16px] font-[400] font-Itim mb-3 text-purple-800">
						Top Positive, Negative, Neutral Posts:
					</h2>
					{posts.map((post, index) => (
						<div
							key={index}
							className={`mb-3 p-3 rounded-lg ${
								post.type === "positive"
									? "bg-yellow-100"
									: post.type === "negative"
									? "bg-purple-200"
									: "bg-gray-200"
							}`}
						>
							<p className="text-[12px] font-[400] font-Itim leading-[14.4px] max-w-full whitespace-nowrap text-ellipsis overflow-hidden">
								"{post.text}"
							</p>
							<p className="text-[10px] font-Itim font-[400] leading-[7.2px] text-[#6E6E6E] mt-1">
								{post.likes} Likes | {post.shares} Shares | {post.replies}{" "}
								Replies
							</p>
							<p className="text-[10px] font-Itim font-[400] leading-[7.2px] text-[#6E6E6E] mt-1">
								{post.date}
							</p>
						</div>
					))}
				</div>
				<div className="md:w-[35%]">
					<ResponsiveContainer width="100%" height={300}>
						<PieChart>
							<Pie
								data={moodData}
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={80}
								paddingAngle={5}
								dataKey="value"
							>
								{moodData.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={entry.color} />
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
					<div className="flex flex-col items-center justify-center ">
						{moodData.map((entry, index) => (
							<div
								key={index}
								className="flex items-center justify-center gap-2"
							>
								<div
									className="w-[15px] h-[4px] "
									style={{ backgroundColor: entry.color }}
								></div>
								<span
									className="text-sm font-[600] drop-shadow-customShadow "
									style={{ color: entry.color }}
								>
									{entry.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
