import { TrendingUp } from "lucide-react";

const MetricCard = ({ title, value, icon, increase }) => (
	<div className="bg-[#B1AAE5] p-4 rounded-[25px] md:w-[198px] w-[175px]">
		<div className="flex items-center gap-3 mb-2">
			<span className="rounded-[11px] flex justify-center items-center bg-[#D9D9D9] md:w-[32px] md:h-[32px] w-[25px] h-[25px]">
				{icon}
			</span>
			<span
				style={{ fontFamily: "'Jaro', sans-serif" }}
				className="md:text-[20px] text-[16px] text-stroke-1 text-[#FDDB02] md:leading-[30px] leading-[20px] font-[400]"
			>
				{title}
			</span>
		</div>
		<div className="flex justify-between items-end">
			<div className="flex flex-col">
				<p className="text-[10px] leading-[11.72px] font-[600] text-[#EFEFEF]/70">
					Total Likes
				</p>
				<div className="md:text-[40px] text-[30px] md:leading-[46.88px] leading-[35.16px] font-[600]">
					{value}
				</div>
			</div>
			<div className="text-xs text-green-600 flex items-center">
				<TrendingUp />
				{increase}
			</div>
		</div>
	</div>
);

export default MetricCard;
