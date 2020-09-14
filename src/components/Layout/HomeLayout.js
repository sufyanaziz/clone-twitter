import React, { useRef } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import Trending from "../Trending/Trending";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import { FooterMainContent } from "../Footer/Footer";

import TwitterIcon from "@material-ui/icons/Twitter";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeIcon from "@material-ui/icons/Home";

import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import ExploreIcon from "@material-ui/icons/Explore";

import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import NotificationsIcon from "@material-ui/icons/Notifications";

import MailIcon from "@material-ui/icons/Mail";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";

import PersonIcon from "@material-ui/icons/Person";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import "./HomeLayout.css";

const HomeLayout = ({ user, history, children, page }) => {
  const pathname = history.location.pathname;
  const username = user.credentials.username;

  const suggestRef = useRef();

  // const [scrollPage, setScrollPage] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPage(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   if (Math.round(scrollPage) === 498) {
  //     suggestRef.current.style.position = "sticky";
  //     suggestRef.current.style.top = "80px";
  //   }
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollPage, suggestRef]);

  return (
    <div className="homeLayout">
      {/* For icon links */}
      <div className="homeLayout__sidebar">
        <div className="homeLayout__sidebar__container">
          <div className="homeLayout__sidebar__link">
            <NavLink to="/home">
              <TwitterIcon className="icon__logo" />
            </NavLink>
            {pathname === "/home" ? (
              <NavLink to="/home" exact>
                <HomeIcon className="icon" />
              </NavLink>
            ) : (
              <NavLink to="/home" exact>
                <HomeOutlinedIcon className="icon" />
              </NavLink>
            )}
            {pathname === "/explore" ? (
              <NavLink to="/explore" exact>
                <ExploreIcon className="icon" />
              </NavLink>
            ) : (
              <NavLink to="/explore" exact>
                <ExploreOutlinedIcon className="icon" />
              </NavLink>
            )}
            {pathname === "/notifications" ? (
              <NavLink to="/notifications" exact>
                <NotificationsIcon className="icon" />
              </NavLink>
            ) : (
              <NavLink to="/notifications" exact>
                <NotificationsNoneIcon className="icon" />
              </NavLink>
            )}
            {pathname === "/messages" ? (
              <NavLink to="/messages" exact>
                <MailIcon className="icon" />
              </NavLink>
            ) : (
              <NavLink to="/messages" exact>
                <MailOutlineIcon className="icon" />
              </NavLink>
            )}
            {pathname === "/bookmarks" ? (
              <NavLink to="/bookmarks" exact>
                <BookmarkIcon className="icon" />
              </NavLink>
            ) : (
              <NavLink to="/bookmarks" exact>
                <BookmarkBorderIcon className="icon" />
              </NavLink>
            )}
            {pathname === `/${username}/lists` ? (
              <NavLink to={`/${username}/lists`} exact>
                <ListAltTwoToneIcon className="icon" />
              </NavLink>
            ) : (
              <NavLink to={`/${username}/lists`} exact>
                <ListAltOutlinedIcon className="icon" />
              </NavLink>
            )}
            {pathname === `/${username}` ? (
              <NavLink to={`/${username}`} exact>
                <PersonIcon className="icon" />
              </NavLink>
            ) : (
              <NavLink to={`/${username}`} exact>
                <PersonOutlineIcon className="icon" />
              </NavLink>
            )}
            <div className="homeLayout__moreIcon">
              <MoreHorizIcon className="icon" />
            </div>
          </div>
        </div>
      </div>
      {/* For main container like tweet, messages, notifications, etc */}
      <div className="homeLayout__container">
        {/* Navbar */}
        <div className="homeLayout__main__left">
          {page === "explore" ? (
            <div className="homeLayout__main__header">
              <Search fullWidth />
            </div>
          ) : (
            <div className="homeLayout__main__header">
              <h3>{page}</h3>
            </div>
          )}
          {page === "explore" ? (
            <div className="homeLayout__main__trending">
              <Trending page="explore" />
            </div>
          ) : (
            <div className="homeLayout__main__content">{children}</div>
          )}
        </div>
        {/* Main Content */}
        <div className="homeLayout__main__right">
          {page !== "explore" && (
            <div className="homeLayout__main__navbar">
              <Search fullWidth />
            </div>
          )}
          {page !== "explore" && (
            <div className="homeLayout__main__trending">
              <Trending />
            </div>
          )}
          <div
            className={
              page !== "explore"
                ? "homeLayout__main__suggest sticky__main__suggest"
                : "homeLayout__main__suggest"
            }
          >
            <WhoToFollow />
            <FooterMainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(HomeLayout);
