import "twin.macro";

const ResponseError = ({ children }) => {
    return (
        <div tw="appearance-none block w-full w-full text-white text-center bg-red-400 rounded border-l-2 border-red-600 rounded-lg py-3 px-6">
            {children}
        </div>
    );
};

export default ResponseError;
