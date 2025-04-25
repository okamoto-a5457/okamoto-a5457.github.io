import React from "react";
import threelight from "../assets/images/threelight.png";
import lalaland from "../assets/images/lalaland.png";
import marusanai from "../assets/images/marusanai.png";
import fuji from "../assets/images/fuji.png";
import fujiK from "../assets/images/fuji-k.png";
import merpay from "../assets/images/merpay.png";

const workLists = [
  {
    imageSrc: threelight,
    title: "Corporate Site – Threelight Inc.",
    companyName: "Threelight Inc.",
    link: "https://www.threelight.co.jp/",
    description:
      "This is the corporate site of threelight. The first animation is controlled by a cookie system and can be seen only the first time on the same day.",
    period: "Aug 2023 - Sep 2023",
    category:
      "WordPress, MySQL, PHP, JavaScript, jQuery, Sass, Design (Adobe XD, Photoshop)",
  },
  {
    imageSrc: lalaland,
    title: "Corporate Site – LaLaLand",
    companyName: "株式会社LaLaLand",
    link: "https://la-la-land.co.jp/",
    description:
      "This is the corporate site of one kindergarten, with 21 pages in WordPress.",
    period: "May 2023 - Jul 2023",
    category: "WordPress, MySQL, JavaScript, jQuery, Sass",
  },
  {
    imageSrc: merpay,
    title: "Event Site – Merpay & Mercoin Tech Fest 2023",
    companyName: "Merpay, Inc. and/or Mercoin, Inc.",
    link: "https://events.merpay.com/techfest-2023/",
    description:
      "This is an Event Site for an online tech conference that spotlight technology, organizations, and so on. All sessions have their own modals so it has a great volume.",
    period: "June 2023 - Sep 2023",
    category: "TypeScript, JavaScript, Node.js, Sass, Design (Adobe XD)",
  },
  // {
  //   imageSrc: marusanai,
  //   title: "Campaign Site -ひとつ上のカラダづくり応援プロジェクト",
  //   companyName: "MARUSAN-AI CO., LTD.",
  //   link: "https://www.marusanai.co.jp/campaign/cp-hitotsuue202310/",
  //   description:
  //     "This is a campaign site for an advertisement for soy milk drink products. This was used as an application site as well, but is now closed.",
  //   period: "Aug 2023- Sep 2023",
  //   category: "PHP, Sass, jQuery, JavaScript, Design (Adobe XD, Photoshop)",
  // },
  // {
  //   imageSrc: fuji,
  //   title: "Corporate Site – FUJI KOGYO CO.,LTD.",
  //   companyName: "FUJI KOGYO CO.,LTD.",
  //   link: "https://www.fujitackle.com/",
  //   description:
  //     "Corporate website for “FUJI KOGYO CO.,LTD.” which has a great volume with more than 80 pages. Now, the operation was transferred to another company.",
  //   period: "Sep 2022 - Jan 2023",
  //   category: "WordPress, MySQL, PHP, JavaScript, jQuery, Sass",
  // },
  // {
  //   imageSrc: fujiK,
  //   title: "Corporate Site – Fuji Construction and Engineering Corporation",
  //   companyName: "Fuji Construction and Engineering Corporation",
  //   link: "https://fuji-k.jp/",
  //   description:
  //     "Renewal of the corporate website for “Fuji Construction and Engineering Corporation”.",
  //   period: "Jan 2022 - Mar 2022",
  //   category:
  //     "WordPress, MySQL, PHP, JavaScript, jQuery, Sass, Design (Adobe XD, Photoshop)",
  // },
];

const WorkItem = ({
  imageSrc,
  title,
  companyName,
  link,
  description,
  category,
}) => (
  <li className="pg_works__item p_works-cap">
    <a className="thumb" href={link} target="_blank" rel="noopener noreferrer">
      <img src={imageSrc} alt={title} />
      <span className="info_group">
        <p className="title">
          {title}
          <span className="material-symbols-outlined">open_in_new</span>
        </p>
        <p>{companyName}</p>
      </span>
    </a>
    <div className="pg_works__item-cap">
      <p className="ttl">{title}</p>
      <p className="client">{companyName}</p>
      <p className="point">{description}</p>
      <p className="category">{category}</p>
    </div>
  </li>
);

const WorkList = () => (
  <ul className="pg_works__group">
    {workLists.map((workItem, index) => (
      <WorkItem
        key={index}
        imageSrc={workItem.imageSrc}
        title={workItem.title}
        companyName={workItem.companyName}
        link={workItem.link}
        description={workItem.description}
        period={workItem.period}
        category={workItem.category}
      />
    ))}
  </ul>
);

export default WorkList;
