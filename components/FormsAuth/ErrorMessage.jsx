import "twin.macro";

const ErrorMessage = ({ children }) => {
    return <span tw="text-red-500 pt-1 text-sm">{children}</span>;
};

export default ErrorMessage;
