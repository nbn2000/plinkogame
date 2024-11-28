import { Link } from "react-router-dom";
import aboutus from "../../assets/about-us.webp";
import useLocales from "/src/hooks/useLocales";

const Paragraph = ({ children, className }) => (
  <p
    className={`leading-[1.85em] font-roboto tracking-wide text-[#2E3246] *:text-[#2E3246] ${
      className || ""
    }`}
  >
    {children}
  </p>
);

const Heading = ({ level, children, className }) => {
  const Tag = `h${level}`;
  return (
    <Tag
      className={`flex items-center gap-5 mt-12 font-bold md:text-${
        level === 3 ? "4xl" : "2xl"
      } text-${level === 3 ? "2xl" : "xl"} leading-[34px] my-5 text-[#151515] ${
        className || ""
      }`}
    >
      {children}
    </Tag>
  );
};

const ListItem = ({ title, content }) => (
  <li className="text-[#2E3246]">
    <strong className="text-[#2E3246]">{title.trim()}</strong>
    &nbsp; {content}
  </li>
);

const Head = () => {
  const { t } = useLocales();
  return (
    <div className="mt-[40px] mb-[60px] w-full px-4">
      <Paragraph className="mt-6">
        {t(
          "Welcome to {{siteName}}, the ultimate destination for fans of Plinko who want to dive deep into every aspect of the game. Our mission is clear: to bring users the most extensive and detailed information about Plinko games, strategies, and platforms. Whether you’re exploring Plinko for the first time or have been enjoying it for years, {{siteName}} is designed to be your trusted guide, providing accurate insights and expert recommendations.",
          {
            siteName: <i>Plinkogames.cc</i>,
          }
        )}
      </Paragraph>
      <div className="w-full flex justify-center items-center my-8">
        <img src={aboutus} alt="about us photo" className="rounded-md" />
      </div>
      <Paragraph className="mt-6">
        {t(
          "At {{siteName}}, we understand that Plinko is more than just a game—it’s an experience filled with excitement and opportunity. Our platform offers an extensive library of resources dedicated to enhancing that experience. From tutorials and gameplay tips to in-depth analyses of Plinko variations and strategies, we strive to equip you with all the knowledge you need to fully enjoy the game and improve your chances of success.",
          {
            siteName: <i>Plinkogames.cc</i>,
          }
        )}
      </Paragraph>
      <Heading level={3}>{t("Meet Our Expert, Jason Miller")}</Heading>
      <Paragraph className="mt-6">
        {t(
          "Our content is led by our in-house expert, {{strong}} , a seasoned professional in the online gaming industry who specializes in Plinko. Jason’s approach is hands-on: he rigorously tests every version of Plinko available, evaluates their mechanics, and delves into the platforms that offer them. His experience allows him to assess each game’s fairness, functionality, and entertainment value, ensuring that our visitors receive only the most reliable and comprehensive information.",
          {
            strong: <strong>Jason Miller</strong>,
          }
        )}
      </Paragraph>
      <Paragraph className="mt-6">
        {t(
          "Jason’s expertise extends beyond gameplay. He regularly provides insights into the best platforms for playing Plinko, the promotional offers and bonuses available, and the ways to maximize your gaming experience. With his deep understanding of the game and his commitment to quality, Jason’s guidance is invaluable, making him the go-to expert for anyone interested in mastering Plinko."
        )}
      </Paragraph>
      <Heading level={3}>{t("Why Choose Plinkogames.cc?")}</Heading>
      <Paragraph className="mt-6">
        {t(
          "Here at {{siteName}}, we’re committed to offering more than just surface-level information. Our platform is structured to provide everything a Plinko enthusiast could need, including:",
          { siteName: <i>Plinkogames.cc</i> }
        )}
      </Paragraph>
      <Paragraph className="mt-6">
        <strong>{t("Up-to-Date Bonuses and Promotions")}</strong>
      </Paragraph>
      <Paragraph className="">
        {t(
          "The online gaming world is filled with bonuses, and Plinko is no exception. We bring you the latest promotions and bonuses from trusted gaming platforms, helping you maximize your playing potential. With {{siteLink}}, you’ll always be informed about current offers, allowing you to get the best deals and make the most of every play.",
          {
            siteLink: (
              <Link
                className="font-medium break-all !text-blue-600 dark:text-blue-500 hover:underline"
                to={"/"}
              >
                http://plinkogame.cc/
              </Link>
            ),
          }
        )}
      </Paragraph>
      <Paragraph className="mt-6">
        <strong>{t("In-Depth Game Reviews")}</strong>
      </Paragraph>
      <Paragraph className="">
        {t(
          "We offer detailed reviews of every Plinko variant available online. From traditional setups to modern innovations, our analyses cover mechanics, odds, payout structures, and even aesthetic elements. This comprehensive approach allows you to compare versions and find the ones that best match your style and preferences."
        )}{" "}
      </Paragraph>
      <Paragraph className="mt-6">
        <strong>{t("Guides and Strategies")}</strong>
      </Paragraph>
      <Paragraph className="">
        {t(
          "Our guides cover every angle of the Plinko experience, from understanding basic gameplay to advanced strategies. Jason’s in-depth articles teach you how to make informed bets, leverage bonuses, and approach each game with the tactics needed to increase your chances of success."
        )}
      </Paragraph>
      <ol className="list-decimal mt-5 ml-8">
        <ListItem
          title={t("Expert Reviews on Platforms")}
          content={
            <>
              <br />
              {t(
                "Not all Plinko platforms are created equal. Jason meticulously examines each platform for security, fairness, and user experience, so you can confidently choose where to play. Our recommendations ensure that you find secure, high-quality platforms that deliver an exceptional Plinko experience."
              )}
            </>
          }
        />
        <ListItem
          title={t("Comparison Tools")}
          content={
            <>
              <br />
              {t(
                "To help you navigate the world of Plinko, our comparison tools make it easy to see how different versions stack up. Whether you’re interested in classic versions, new innovations, or specific themes, our tools provide a straightforward way to evaluate your options and find the game that’s right for you."
              )}
            </>
          }
        />
        <ListItem
          title={t("Latest Industry News and Trends")}
          content={
            <>
              <br />
              {t(
                "The world of online gaming evolves rapidly, and we’re here to keep you informed. With news on new game releases, emerging trends, and regulatory changes, {{siteName}} ensures you stay ahead in the ever-changing gaming landscape.",
                { siteName: <i>Plinkogames.cc</i> }
              )}
            </>
          }
        />
      </ol>
      <Heading level={3}>{t("Our Commitment to Responsible Gaming")}</Heading>
      <Paragraph className="mt-6">
        {t(
          "We believe that gaming should be both exciting and responsible. We encourage all users to play mindfully, setting limits to ensure that the game remains a source of fun and enjoyment. With resources and guidance on responsible gaming, we strive to create a balanced environment that respects both the thrill of Plinko and the importance of staying within healthy limits."
        )}
      </Paragraph>
    </div>
  );
};

export default Head;
