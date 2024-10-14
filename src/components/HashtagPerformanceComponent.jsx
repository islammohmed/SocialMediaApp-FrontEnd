import React from "react";

function HashtagPerformanceComponent({ Hashtags }) {
	return (
		<div className="space-y-2 bg-[#EFEFEFB2] rounded-[10px] p-2 overflow-y-auto max-h-[340px]">
			<div className="bg-white p-2 rounded-[10px]">
				{Hashtags.map((item, index) => (
					<React.Fragment key={index}>
						<div className="flex justify-between items-center">
							<div>
								<p className="font-semibold">{item.tag}</p>
								<p className="text-xs text-gray-600">{item.trend}</p>
							</div>
						</div>
						<div className="w-full h-[1px] bg-gray-200 my-1"></div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default HashtagPerformanceComponent
