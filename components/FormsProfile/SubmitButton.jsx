import tw, { css } from "twin.macro";

const SubmitButton = ({ isSubmitting, type = "submit", children }) => {
    return (
        <button
            type={type}
            css={css`
                ${tw`appearance-none block bg-gradient-to-r from-primary-light to-secondary-light text-gray-100 font-bold border border-primary-light rounded-l-full rounded-r-full py-3 px-6 leading-tight shadow-md hover:bg-gradient-to-l from-primary-light to-secondary-light focus:outline-none
focus:border-primary-light transition duration-300 ease-in`}
                ${isSubmitting && tw`cursor-default`}
                &:hover {
                    box-shadow: 0px 0px 8px 1px rgba(235, 117, 188, 1);
                }
            `}
        >
            {isSubmitting ? "Loading..." : children}
        </button>
    );
};

export default SubmitButton;
