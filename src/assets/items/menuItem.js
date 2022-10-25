import { icon } from "@fortawesome/fontawesome-svg-core";
import { faEmber, faFacebook, faUbuntu, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faClosedCaptioning } from "@fortawesome/free-regular-svg-icons";
import {
   faUser,
   faCamera,
   faDollarSign,
   faEarthAsia,
   faGear,
   faKeyboard,
   faQuestion,
   faRightFromBracket,
   faCopy,
   faCodeCommit,
   faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
      children: {
         title: "Language",
         data: [
            {
               code: "en",
               title: "English",
            },
            {
               code: "vi",
               title: "Tiếng Việt",
            },
            {
               code: "vi",
               title: "Tiếng Diệt",
            },
            {
               code: "en",
               title: "Tiếng Ziệt",
            },
            {
               code: "en",
               title: "Vietnamese",
            },
            {
               code: "vi",
               title: "Tiếng Kinh",
            },
            {
               code: "en",
               title: "Tieng Mẹ Đẻ",
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faQuestion} />,
      title: "Feeback and help",
      to: "/feeback",
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
   },
];

const USER_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
   },
   {
      icon: <FontAwesomeIcon icon={faDollarSign} />,
      title: "Get coins",
   },
   {
      icon: <FontAwesomeIcon icon={faCamera} />,
      title: "LIVE studio",
   },
   {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
   },
   ...MENU_ITEMS,
   {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      title: "Log out",
      seperate: true,
   },
];
const SHARE_ITEMS = [
   { icon: <FontAwesomeIcon icon={faCodeBranch} />, title: "Embed" },
   { icon: <FontAwesomeIcon icon={faUbuntu} />, title: "Send to Friend" },
   { icon: <FontAwesomeIcon icon={faFacebook} />, title: "Share to Facebook" },
   { icon: <FontAwesomeIcon icon={faWhatsapp} />, title: "Share to WhatsApp" },
   { icon: <FontAwesomeIcon icon={faCopy} />, title: "Copy Link" },
];
export { MENU_ITEMS, USER_ITEMS, SHARE_ITEMS };
