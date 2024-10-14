import { Link } from "react-router-dom";

const NavigationLink = ({ title, link }) => {
	return (
		<Link
			to={link}
			className="text-[16px] leading-[19.36px] font-[400] px-[10px] py-[5px] rounded-full bg-[#D9D9D9] hover:bg-[#B1AAE5] hover:text-[#6558CA] duration-200"
			aria-label={title}
		>
			{title}
		</Link>
	);
};

export default NavigationLink;
