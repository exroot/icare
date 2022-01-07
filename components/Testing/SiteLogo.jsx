import "twin.macro";

function SiteLogo() {
  return (
    <>
      <div tw="flex items-center flex-shrink-0 text-white mr-6">
        <div tw="flex items-center h-16 pb-2 w-full">
          <h1
            tw="w-full font-bold text-5xl text-center"
            // className="threedeeshadow"
            style={{
              fontFamily: "basiclazer",
              color: "#ff27e1",
            }}
          >
            iCare
          </h1>
        </div>
      </div>
    </>
  );
}

export default SiteLogo;
