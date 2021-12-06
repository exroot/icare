import { BeatLoader } from "react-spinners";
import tw, { css } from "twin.macro";

const SubmitButton = ({ isSubmitting, type = "submit", children }) => {
    return (
        <button
            type={type}
            css={css`
                ${tw`appearance-none block w-full bg-indigo-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700
focus:border-gray-500`}
                ${isSubmitting &&
                tw`bg-indigo-300 focus:bg-indigo-300 hover:bg-indigo-300 cursor-default`}
            `}
        >
            {isSubmitting ? <BeatLoader color={"#fff"} /> : children}
        </button>
    );
};

export default SubmitButton;
