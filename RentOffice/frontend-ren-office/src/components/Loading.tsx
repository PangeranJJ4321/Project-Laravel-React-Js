import { PuffLoader } from "react-spinners";

interface LoadingProps {
    title?: string;
}

const Loading: React.FC<LoadingProps> = ({title}) => {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <PuffLoader color="#00ff00" size={40} />
            </div>
            <p className="font-bold text-center" >{title}...</p>
        </>
    );
}

export default Loading;