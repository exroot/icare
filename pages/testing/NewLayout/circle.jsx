import { useState, useEffect } from "react";
import Head from "next/head";
import TopNavbar from "../../../components/Testing/Navbar/TopNavbar";
import BottomMenu from "../../../components/Testing/BottomMenu";
import tw, { css } from "twin.macro";

const Circles = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <Head>
        <title>Shoutmo - Circle</title>
      </Head>

      <div tw="h-screen w-screen bg-gray-900 flex flex-col min-h-0 min-w-0 overflow-hidden">
        <TopNavbar
          showSettings={showSettings}
          setShowSettings={setShowSettings}
        />
        <main tw="flex-1 flex flex-col min-h-0 min-w-0 overflow-y-auto">
          <div>
            <h1 tw="text-4xl text-center text-white">Page Four</h1>
            <div tw="mx-4">
              <SuggestInstallAppModal />
            </div>
            <div tw="text-white m-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                non odio euismod lacinia at quis risus sed vulputate. Ut
                consequat semper viverra nam libero. Nunc eget lorem dolor sed
                viverra ipsum. Commodo sed egestas egestas fringilla phasellus
                faucibus scelerisque eleifend. Tincidunt dui ut ornare lectus
                sit amet est placerat in. Ac ut consequat semper viverra nam
                libero. Mauris ultrices eros in cursus turpis massa. Ac turpis
                egestas maecenas pharetra. Posuere lorem ipsum dolor sit amet
                consectetur. Urna neque viverra justo nec. Lacus viverra vitae
                congue eu consequat ac felis donec. Phasellus egestas tellus
                rutrum tellus pellentesque eu tincidunt tortor. Faucibus
                pulvinar elementum integer enim neque volutpat ac tincidunt.
                Risus feugiat in ante metus dictum at tempor commodo
                ullamcorper.
              </p>
              <p>
                Malesuada fames ac turpis egestas sed tempus. Purus in massa
                tempor nec feugiat nisl pretium fusce. Vehicula ipsum a arcu
                cursus vitae. Nunc id cursus metus aliquam eleifend mi in nulla.
                Nec tincidunt praesent semper feugiat nibh sed pulvinar proin.
                In metus vulputate eu scelerisque felis imperdiet. Condimentum
                lacinia quis vel eros donec ac odio tempor. Morbi quis commodo
                odio aenean sed adipiscing diam. Egestas egestas fringilla
                phasellus faucibus. Ut tortor pretium viverra suspendisse
                potenti nullam ac tortor. Mauris vitae ultricies leo integer
                malesuada nunc vel risus. Sit amet facilisis magna etiam tempor
                orci. Sociis natoque penatibus et magnis dis parturient. Velit
                dignissim sodales ut eu sem integer. Purus in massa tempor nec.
                Nibh cras pulvinar mattis nunc sed. Ipsum a arcu cursus vitae
                congue. Tellus orci ac auctor augue mauris augue. Orci nulla
                pellentesque dignissim enim. Bibendum enim facilisis gravida
                neque convallis a cras semper auctor. Venenatis cras sed felis
                eget velit aliquet sagittis. Leo urna molestie at elementum eu
                facilisis sed odio. A diam maecenas sed enim ut sem viverra
                aliquet.{" "}
              </p>
              <p>
                Quis commodo odio aenean sed adipiscing diam. Tristique senectus
                et netus et. At risus viverra adipiscing at in tellus. A erat
                nam at lectus urna. Donec et odio pellentesque diam volutpat
                commodo sed egestas. Scelerisque fermentum dui faucibus in
                ornare quam viverra orci. Lectus proin nibh nisl condimentum id
                venenatis. Habitant morbi tristique senectus et netus. Purus ut
                faucibus pulvinar elementum integer enim neque volutpat ac. Duis
                at consectetur lorem donec massa sapien faucibus et. Proin
                fermentum leo vel orci porta non. Tempus egestas sed sed risus
                pretium quam. Viverra vitae congue eu consequat ac. Urna
                porttitor rhoncus dolor purus non enim praesent elementum
                facilisis. Nunc eget lorem dolor sed viverra ipsum nunc.
                Hendrerit gravida rutrum quisque non tellus. Enim tortor at
                auctor urna nunc.{" "}
              </p>
              <p>
                Vestibulum mattis ullamcorper velit sed ullamcorper. Nunc mattis
                enim ut tellus elementum sagittis vitae. Malesuada proin libero
                nunc consequat interdum varius sit amet mattis. Blandit aliquam
                etiam erat velit scelerisque in dictum non consectetur. Congue
                quisque egestas diam in arcu cursus euismod quis viverra. Sed
                viverra tellus in hac habitasse platea dictumst vestibulum
                rhoncus. Diam sit amet nisl suscipit adipiscing bibendum est
                ultricies. Tincidunt eget nullam non nisi est sit amet facilisis
                magna. Porttitor massa id neque aliquam vestibulum morbi
                blandit.
              </p>
            </div>
          </div>
        </main>
        <BottomMenu />
      </div>
    </>
  );
};

function SuggestInstallAppModal() {
  const [showModal, setShowModal] = useState(false);
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      localStorage.setItem("support_pwa", true);
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("transitionend", handler);
    };
  }, []);

  useEffect(() => {
    const checkIfSupportPWA = () => {
      const support = localStorage.getItem("support_pwa");
      if (support) {
        setSupportsPWA(true);
      }
    };
    checkIfSupportPWA();
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  const buttonStyle = css`
    ${tw`mt-3 bg-gray-100 border-b-2 text-gray-600 text-lg leading-relaxed text-indigo-600 font-semibold text-center mx-auto hover:bg-gray-300 w-full py-2`}
  `;
  const buttonDisable = css`
    ${tw`
  cursor-not-allowed
  mt-3 bg-gray-300 border-b-2 text-gray-600 text-lg leading-relaxed font-semibold text-center mx-auto w-full py-2
  `}
  `;
  return (
    <>
      <button
        tw="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open modal
      </button>

      {showModal ? (
        <>
          <div tw="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none h-screen mx-8 sm:m-6 sm:h-full overflow-y-auto">
            <div tw="relative w-auto my-6 mx-auto max-w-lg space-y-2">
              {/*content*/}
              <div tw="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-y-hidden overflow-x-hidden">
                {/*header s logo */}
                <div tw="flex items-center pt-5 pb-3 rounded-t">
                  {/* <h3 tw="text-3xl font-semibold text-center mx-auto">
                    Modal Title
                  </h3> */}

                  {/* // shoutmo logo  */}

                  <div tw="flex flex-shrink-0 text-white mx-auto">
                    <div tw="flex items-center h-20 w-20 bg-black rounded-full shadow-lg">
                      <p
                        tw="font-bold inline-block align-middle mx-auto mb-4"
                        className="threedeeshadow"
                        style={{
                          fontFamily: "basiclazer",
                          // fontSize: 96 + "px",
                          fontSize: 6 + "rem",
                        }}
                      >
                        S
                      </p>
                    </div>
                  </div>
                  {/* // shoutmo logo  */}
                </div>

                <div tw="relative pt-3 pb-6 px-6 flex-auto ">
                  <p tw="mt-4 mb-1 text-gray-600 text-xl leading-relaxed font-semibold text-center mx-auto">
                    Add SHOUTMO to your Home screen?
                  </p>
                  <p tw="mb-4 text-gray-500 text-lg leading-relaxed text-center mx-auto">
                    Get to the app easier by adding it to your home screen.
                  </p>
                </div>
                <button
                  css={supportsPWA ? buttonStyle : buttonDisable}
                  onClick={onClick}
                  disabled={!supportsPWA}
                >
                  {supportsPWA ? "Add to Home screen" : "Unable to install"}
                </button>

                <button
                  tw="bg-gray-100 border-b-2 text-gray-600 text-lg leading-relaxed font-semibold text-center mx-auto hover:bg-gray-300 w-full py-2 "
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                {/* end body*/}
              </div>
            </div>
          </div>
          <div tw="opacity-75 fixed inset-0 z-40 bg-gray-900"></div>
        </>
      ) : null}
    </>
  );
}

export default Circles;
