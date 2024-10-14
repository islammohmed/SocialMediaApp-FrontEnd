import { useNavigate } from "react-router-dom";

function useNavigation({ children }) {
	const navigate = useNavigate();
	return navigate(children);
}

export default useNavigation;
