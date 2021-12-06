import { RiSearchLine } from "react-icons/ri";
import tw, { css } from "twin.macro";

/* 

***** COLORS *****

    Light Pink {
        HEX: #fa199d
        RGBA: rgba(250, 25, 157, 1)
    }

    Dark Pink {
        HEX: #2c0b30
    }

    Cyan {
      HEX: #3ce2e5
      RGBA: rgba(62, 226, 229, 1)
    }
*/

const Demo = () => {
  return (
    <div
      tw="h-screen"
      css={`
        background-image: linear-gradient(25deg, #fa199d -60%, #2c0b30 85%);
      `}
    >
      <nav tw="grid grid-cols-3 py-4 px-8">
        {/* Logo */}
        <div>
          <span
            tw="uppercase text-4xl tracking-wide"
            className="RobotCrush"
            css={`
              color: #fa199d;
              text-shadow: 0 0 10px rgba(250, 25, 157, 0.75);
            `}
          >
            Shoutmo
          </span>
        </div>
        {/* Search bar */}

        <div
          tw="pt-2 flex flex-row text-lg"
          css={`
            color: #3ce2e5;
          `}
        >
          <input
            type="search"
            placeholder="explore"
            tw="bg-transparent text-sm rounded border-2 border-green-300 pl-12 pb-1 text-green-300 pr-4"
            css={`
              color: #3ce2e5;
              border: 2px solid #3ce2e5;
              box-shadow: 0 0 10px #3ce2e5;
              font-family: "Times New Roman";
            `}
          />
          <RiSearchLine tw="absolute mt-3 ml-4" />
        </div>
        {/* Auth actions */}
        <div tw="text-right pt-2 text-2xl  tracking-wide">
          <ul className="AmericanCaptain">
            <li
              tw="inline-block pr-6"
              css={`
                color: #fa199d;
              `}
            >
              Log In
            </li>
            <li
              tw="inline-block border-2 px-6 rounded"
              css={`
                color: #3ce2e5;
                border: 2px solid #3ce2e5;
                box-shadow: 0 0 10px #3ce2e5;
                text-shadow: 0 0 10px rgba(62, 226, 229, 0.75);
              `}
            >
              Sign Up
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Demo;
