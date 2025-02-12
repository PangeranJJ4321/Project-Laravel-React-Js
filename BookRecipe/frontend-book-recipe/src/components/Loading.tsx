import { PuffLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex items-center justify-center px-5">
            <PuffLoader color="#ff4500" size={40} />
        </div>
    );
}

export default Loading;