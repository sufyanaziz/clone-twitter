import React from "react";

import "./Footer.css";

const Footer = () => {
  const datas = [
    { name: "About", link: "https://about.twitter.com/" },
    { name: "Help Center", link: "https://help.twitter.com/en" },
    { name: "Terms", link: "https://twitter.com/en/tos" },
    { name: "Privacy Policy", link: "https://twitter.com/en/privacy" },
    {
      name: "Cookies",
      link: "https://help.twitter.com/en/rules-and-policies/twitter-cookies",
    },
    {
      name: "Ads Info",
      link:
        "https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html",
    },
    { name: "Blog", link: "https://blog.twitter.com/" },
    { name: "Status", link: "https://status.twitterstat.us/" },
    { name: "Jobs", link: "https://careers.twitter.com/" },
    {
      name: "Brand",
      link: "https://about.twitter.com/en_us/company/brand-resources.html",
    },
    {
      name: "Advertise",
      link: "https://ads.twitter.com/login?ref=gl-tw-tw-twitter-advertise",
    },
    { name: "Marketing", link: "https://marketing.twitter.com/na/en" },
    { name: "Businesses", link: "https://business.twitter.com/" },
    { name: "Developers", link: "https://developer.twitter.com/en" },
    { name: "Directory", link: "https://twitter.com/i/directory/profiles" },
    {
      name: "Settings",
      link: "https://twitter.com/settings/account/personalization",
    },
    {
      name: new Date().getFullYear() + " Twitter by Sufyan",
      cr: true,
    },
  ];

  return (
    <div className="footer">
      {datas.map((data, index) => {
        return (
          <React.Fragment key={index}>
            {data.cr ? (
              <a href={data.link}>&copy; {data.name}</a>
            ) : (
              <a href={data.link}>{data.name}</a>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export const FooterMainContent = () => {
  return (
    <div style={{ marginTop: 16 }}>
      <p>Made By Sufyan With Love</p>
    </div>
  );
};

export default Footer;
