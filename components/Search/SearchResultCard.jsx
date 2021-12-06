import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import "twin.macro";

export default function SearchResultCard(props) {
  return (
    // probably a better way to do this ..
    <Link href={`${"/" + props.username}`}>
      <div
        tw="bg-background-primary shadow-md rounded mt-4 border border-gray-600 text-gray-600"
        // type="button"
        // onclick={goto}
      >
        <div tw="sm:flex sm:items-center px-6 py-4">
          <img
            tw="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
            src={props.profile_picture || "/img/avatar_placeholder.png"}
            alt="profile photo"
          />
          <div tw="text-center sm:text-left sm:flex-grow">
            <div tw="mb-4">
              <p tw="text-xl leading-tight">
                <b>@</b>
                {props.username || "n/a"}
              </p>
              <p>
                {props.first_name || "n/a"} {props.last_name || "n/a"}
              </p>

              {/* show networks -might add this later 
            <div tw="flex flex-row text-center sm:text-left sm:flex-grow">
              <RiTwitchFill tw="mr-1" size={18} />
              <RiTwitchFill tw="mr-1" size={18} />
              <RiTwitchFill tw="mr-1" size={18} />
              <RiTwitchFill tw="mr-1" size={18} />
              <RiTwitchFill tw="mr-1" size={18} />
              <RiTwitchFill tw="mr-1" size={18} />
              <RiTwitchFill tw="mr-1" size={18} />
              <RiTwitchFill tw="mr-1" size={18} />
              <RiTwitchFill tw="mr-1" size={18} />
              <RiTwitchFill tw="mr-1" size={18} />
            </div> */}
            </div>
          </div>
          {/* <RiArrowRightSLine tw="text-secondary float-right" size={40} /> */}
          <RiArrowRightSLine tw="text-gray-600 float-right" size={40} />
        </div>
      </div>
    </Link>
  );
}
