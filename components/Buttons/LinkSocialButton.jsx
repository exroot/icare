import React, { useState, useEffect } from "react";
import QRModal from "../../pages/links/AddLinkModal";
import "twin.macro";

import {
  FaAngleDown,
  FaTwitter,
  FaTwitch,
  FaCheckCircle,
  FaRegCircle,
  FaYoutube,
  FaSoundcloud,
  FaSquare,
} from "react-icons/fa";

const iconSize = 24;

export default function LinkSocialButton(props) {
  const [connected, setConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const buttonAction = () => {
    // console.log("show cards from feed", props.icon);
    setConnected(true);
    setShowModal(true);
  };

  function ShowIconForNetwork(props) {
    // console.log("ShowIconForNetwork", props);
    // returns icon based on what was passed in

    let icon = props.icon.toLowerCase();

    if (icon == "twitch") {
      return <FaTwitch tw="" size={24} />;
    } else if (icon == "youtube") {
      return <FaYoutube tw="" size={24} />;
    } else if (icon == "twitter") {
      return <FaTwitter tw="" size={24} />;
    } else if (icon == "soundcloud") {
      return <FaSoundcloud tw="ml-1" size={24} />;
    } else if (icon == "udemy") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "vimeo") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "vk") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "brand new tube") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "linked in") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "parascope") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "medium") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "parlar") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "itunes") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "bitchute") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "patreon") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "gab") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "paypal") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "stitcher") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "dlive") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "amazon") {
      return <FaSquare tw="" size={24} />;
    } else if (icon == "locals") {
      return <FaSquare tw="" size={24} />;
    } else {
      return <FaSquare tw="" size={24} size={iconSize} />;
    }
  }

  function ReturnModal(props) {
    console.log(props);
    //   <QRModal
    //   showModal={showModal}
    //   setShowModal={setShowModal}
    //   modalTitle={props.title}
    //   instructions={props.instructions}
    //   site={props.site}
    // />
    return <p>modal {props.social_network || "social network"}</p>;
  }

  return (
    <>
      <ReturnModal />
      <QRModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalTitle={props.title}
        instructions={props.instructions}
        site={props.site}
      />

      <button
        tw="py-3 my-3 px-4 bg-white text-white bg-indigo-800 font-semibold hover:shadow rounded flex flex-row w-full justify-between"
        onClick={buttonAction}
      >
        <div tw="">
          <ShowIconForNetwork size={iconSize} icon={props.social_network} />
        </div>
        <div tw="items-center capitalize">
          Connect to {props.social_network || "social network"}
        </div>
        <div tw="">
          {connected ? (
            <FaCheckCircle size={iconSize} />
          ) : (
            <FaRegCircle size={iconSize} />
          )}
        </div>
      </button>
    </>
  );
}

// random colors
// -------------------------------------------------------------------------------------------------------------------
//           .btn-Instagram {
//             background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
//             color:white;
//           }
//           .btn-Twitter {
//             background-color:#1DA1F2;
//             color:white;
//           }
//           .btn-Soundcloud {
//             background: linear-gradient(#f70,#f30);
//             color:white;
//           }
//           .btn-YouTube {
//             background-color: ##ec0100e3;
//             color:white;
//           }

// function CheckNetwork() {
// if (props.social_network == "Twitter") {
//   console.log("social network for Twitter");
// }

//   let icon = ""; // init icon

//   switch (props.social_network) {
//     case "Twitter":
//       icon = "show Twitter icon";
//       console.log(icon);
//       break;
//     case "Youtube":
//       icon = "show Youtube icon";
//       console.log(icon);
//       break;
//     default:
//       icon = "show defualt icon";
//       console.log(icon);
//   }

//   console.log("doing something with switch statement");
// }

// CheckNetwork();
