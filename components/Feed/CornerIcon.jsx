import {
  FaCube,
  FaTwitch,
  FaYoutube,
  FaTwitter,
  FaSoundcloud,
} from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

import tw from "twin.macro";

export default function ShowLogoForLink(props) {
  //   console.log(props);
  let passedinmsg = props.message;

  const checkIfOtherEmbed = /((https?:)?\/\/)?((www|m)\.)?(bitchute|giphy|twitch|twitter|stitcher|soundcloud|youtube|youtu|pscp)?(\.com|\.tv|\.be)?(\/(?:[\w\-]+\?v=|podcast|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

  let m;

  while ((m = checkIfOtherEmbed.exec(passedinmsg)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === checkIfOtherEmbed.lastIndex) {
      checkIfOtherEmbed.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      // do something based on what you find
      // console.log(`Found match, group ${groupIndex}: ${match}`);
    });

    if (m[5] == "bitchute") {
      // return null;
      return (
        <>
          <img
            // tw="object-contain h-12 w-12"
            tw="object-contain h-8 w-8"
            src={"/img/icons/bitchute_logo.png"}
            alt="logo icon"
          />
        </>
      );
    } else if (m[5] == "twitch") {
      return <FaTwitch tw="ml-1" size={36} style={{ color: "#6610f2" }} />;
    } else if (m[5] == "twitter") {
      return <FaTwitter tw="ml-1" size={36} style={{ color: "#00acee" }} />;
    } else if (m[5] == "soundcloud") {
      return <FaSoundcloud tw="" size={36} style={{ color: "#ff7700" }} />;
      return null;
    } else if (m[5] == "giphy") {
      return (
        <RiExternalLinkLine tw="" size={36} style={{ color: "#161A42" }} />
      );
      return null;
    } else if (m[5] == "youtube") {
      return <FaYoutube tw="" size={36} style={{ color: "red" }} />;
    } else if (m[5] == "stitcher") {
      // return <FaCube tw="" size={30} style={{ color: "#161A42" }} />;
      return (
        <RiExternalLinkLine tw="" size={36} style={{ color: "#161A42" }} />
      );

      return null;
    } else {
      return null;
    }
  }
  return null;
}
