// This will create a cool font style

import tw, { css } from "twin.macro";
import "twin.macro";

export default function coolTextStyleOne(props) {
  const fontsize = props.fontsize;
  const dropshadowTop = props.dropshadowTop;
  const dropshadowRight = props.dropshadowRight;

  const fontStyle = css`
    font-family: "lazer84", cursive;
    font-size: ${fontsize}px;
    color: #ff005b;
    -webkit-filter: drop-shadow(
      ${dropshadowTop || 2}px ${dropshadowRight || 2}px 0px #3f59f4
    );
  `;
  return (
    <>
      <p css={fontStyle}>{props.text || "Something"}</p>
    </>
  );
}

// how to use -
// import CoolTextStyleOne from "../components/CustomTextStyles/coolTextStyleOne";

{
  /* <CoolTextStyleOne
text="mattMEGAbit"
fontsize={48}
dropshadowTop={4}
dropshadowRight={4}
/> */
}

{
  /* <CoolTextStyleOne
text="mattMEGAbit"
fontsize={18}
dropshadowTop={2}
dropshadowRight={2}
/> */
}

//     .vectro {
//     position: relative;
//     -webkit-text-fill-color: transparent;
//     -webkit-text-stroke: 0.1px #f1f1f1;
//     font-family: 'basiclazer';
//     font-family: 'lazer84', cursive;
//     font-size: 1.5rem;
// }

// cool chromed out text
// .vectro-body {
//     -webkit-background-clip: text;
//     background-image: -webkit-linear-gradient(#C3BFB4 0%, #FDFCFA 50%, #E8E7E5 51%, #757172 52%, #E8E9DB 100%);
//     -webkit-filter: drop-shadow(2px 2px 5px #3F59F4);
// }
