import {
   faCircleXmark,
   faEllipsisVertical,
   faMagnifyingGlass,
   faPlus,
   faSpinner,
   faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { Wrapper as PopperWrapper } from "../Popper";
import { MENU_ITEMS, USER_ITEMS } from "~/assets/items/menuItem";
import Image from "~/components/Layout/components/Image";
import PopupItem from "../PopupItem";
import AccountItem from "../AccountsItem";
import Button from "../Button";

import styles from "./Header.module.scss";
import stylesx from "../AccountsItem/AccountItem.module.scss";
import classNames from "classnames/bind";
import { MessageIcon, InboxIcon } from "~/assets/icons";
import Menu from "../Menu";
import Search from "../Search";
const cx = classNames.bind(styles);
const cy = classNames.bind(stylesx);

function Header() {
   const currentUser = true;

   const [history, setHistory] = useState(
      currentUser ? [{ data: USER_ITEMS }] : [{ data: MENU_ITEMS }]
   );

   const current = history[history.length - 1];
   const handleItem = (item) => {
      console.log(item);
   };

   const renderItem = (data) => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;

         return (
            <PopupItem
               key={index}
               item={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else handleItem(item);
               }}
            />
         );
      });
   };

   function backMenu() {
      setHistory((prev) => prev.slice(0, history.length - 1));
      // setHistory(history.splice(0, history.length - 1)); lấy phần tử bị remove
      // setHistory(() => history.splice(history.length - 1, 1)); lấy mảng bị thay đổi
   }

   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>
            {/* logo */}
            <Image src={require("~/assets/images/logo.svg").default} alt="logo" />

            {/* Search */}
            <Search />

            {/* cta */}
            <div className={currentUser ? cx("cta", "cta-user") : cx("cta")}>
               {currentUser ? (
                  <>
                     <Button
                        normal
                        long
                        leftIcon={<FontAwesomeIcon className={cx("plus-icon")} icon={faPlus} />}
                     >
                        Upload
                     </Button>

                     <Menu type content="Message">
                        <Button pd-t icon>
                           <InboxIcon />
                        </Button>
                     </Menu>
                     <Menu type content="Inbox">
                        <Button icon pseudo>
                           <MessageIcon />
                        </Button>
                     </Menu>

                     <Menu
                        content={
                           <PopperWrapper className={cx("sort")}>
                              {history.length > 1 && (
                                 <div className={cx("menu-header")}>
                                    <span className={cx("header-icon")} onClick={() => backMenu()}>
                                       <FontAwesomeIcon icon={faChevronLeft} />
                                    </span>

                                    <h4 className={cx("header-title")}>Language</h4>
                                 </div>
                              )}
                              {renderItem(USER_ITEMS)}
                           </PopperWrapper>
                        }
                        option={{ offset: [12, 8], trigger: "mouseenter " }}
                     >
                        <div className={cy("avatar-frame", "img-only")}>
                           <Image src={require("~/assets/images/avatar.jpg")} />
                        </div>
                     </Menu>
                  </>
               ) : (
                  <>
                     <Button
                        normal
                        long
                        leftIcon={<FontAwesomeIcon className={cx("plus-icon")} icon={faPlus} />}
                     >
                        Upload
                     </Button>
                     <Button normal primary>
                        Log in
                     </Button>

                     <Menu
                        content={
                           <PopperWrapper className={cx("sort")}>
                              {/* Header */}
                              {history.length > 1 && (
                                 <div className={cx("menu-header")}>
                                    <span className={cx("header-icon")} onClick={() => backMenu()}>
                                       <FontAwesomeIcon icon={faChevronLeft} />
                                    </span>

                                    <h4 className={cx("header-title")}>Language</h4>
                                 </div>
                              )}

                              {/* Menu item */}
                              {renderItem(MENU_ITEMS)}
                           </PopperWrapper>
                        }
                        onHide={() => setHistory((prev) => prev.slice(0, 1))}
                     >
                        <button className={cx("more-icon")}>
                           <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                     </Menu>
                  </>
               )}
            </div>
         </div>
      </header>
   );
}

export default Header;
