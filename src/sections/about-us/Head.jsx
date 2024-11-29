import { Link } from "react-router-dom";
import useLocales from "/src/hooks/useLocales";
import { Trans } from "react-i18next";

// this page is not added to json excapt en.json rest has no translation

const Paragraph = ({ children, className }) => (
  <p
    className={`leading-[1.85em] font-roboto tracking-wide text-[#2E3246] *:text-[#2E3246] ${
      className || ""
    }`}
  >
    {children}
  </p>
);

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
        <Trans
          i18nKey={
            "Welcome to our website, a treasure trove for <Link> Plinko </Link> enthusiasts eager to master every aspect of the game. Our mission is clear: to provide users with the most comprehensive and accurate information about Plinko's various aspects, including strategies and platforms. Whether you're a novice or a seasoned player, our site aims to be your reliable resource, offering accurate data and expert recommendations."
          }
          components={{
            i: <i />,
            strong: <strong />,
            Link: (
              <Link
                className="font-medium !text-blue-600 dark:text-blue-500 hover:underline"
                to={"/"}
              />
            ),
          }}
        >
          Welcome to our website, a treasure trove for
          <Link
            className="font-medium !text-blue-600 dark:text-blue-500 hover:underline"
            to={"/"}
          >
            Plinko
          </Link>
          enthusiasts eager to master every aspect of the game. Our mission is
          clear: to provide users with the most comprehensive and accurate
          information about Plinko&apos;s various aspects, including strategies
          and platforms. Whether you&apos;re a novice or a seasoned player, our
          site aims to be your reliable resource, offering accurate data and
          expert recommendations.
        </Trans>
      </Paragraph>
      <Paragraph className="mt-6">
        {t(
          "We see Plinko as more than just a game—it's a world full of excitement and opportunities. Our platform features a rich library of resources designed to enhance your gaming experience. From educational programs to gameplay tips and strategy analyses, we strive to equip you with the necessary knowledge for an engaging game experience and to improve your chances of success."
        )}
      </Paragraph>
      <Paragraph className="mt-6">
        {t(
          "Meet Our Expert - James Carter James Carter, a seasoned online gaming professional specializing in Plinko, leads our content. James approaches his work practically: he meticulously tests every version of Plinko, assesses their mechanics, and studies the platforms that offer them. His profound knowledge allows him to evaluate games for fairness and entertainment value, ensuring that you receive only reliable and comprehensive information."
        )}
      </Paragraph>
      <Paragraph className="mt-6">
        {t(
          "James's expertise extends beyond gameplay. He regularly advises on the best platforms for playing Plinko, current promotions and bonuses, and strategies to maximize your gaming experience. His commitment to quality makes him a true expert, a valuable resource for anyone wanting to master the game."
        )}
      </Paragraph>
      <Paragraph className="mt-6">
        <Trans
          i18nKey={
            "Why Choose <Link > Our Site </Link> We aim to provide deep insights, not just superficial information. Our platform is designed to offer comprehensive support to Plinko enthusiasts:"
          }
          components={{
            i: <i />,
            strong: <strong />,
            Link: (
              <Link
                className="font-medium !text-blue-600 dark:text-blue-500 hover:underline"
                to={"/"}
              />
            ),
          }}
        >
          Why Choose
          <Link
            className="font-medium !text-blue-600 dark:text-blue-500 hover:underline"
            to={"/"}
          >
            Our Site
          </Link>
          We aim to provide deep insights, not just superficial information. Our
          platform is designed to offer comprehensive support to Plinko
          enthusiasts:
        </Trans>
      </Paragraph>
      <ul className="list-disc mt-5 ml-8 space-y-6">
        <ListItem
          title={t("Current Bonuses and Promotions: ")}
          content={
            <>
              {t(
                "The online gaming world is full of offers, and we keep you informed about the latest bonuses and promotions to maximize your gaming potential."
              )}
            </>
          }
        />
        <ListItem
          title={t("Detailed Game Reviews: ")}
          content={
            <>
              {t(
                "From classic setups to modern innovations, our analysts cover mechanics, odds, payout structures, and design, allowing you to choose the best option for your style."
              )}
            </>
          }
        />
        <ListItem
          title={t("Guides and Strategies: ")}
          content={
            <>
              {t(
                "Our detailed guides cover everything from the basics to advanced strategies, enabling you to make informed bets and use bonuses to increase your chances of success."
              )}
            </>
          }
        />
      </ul>
      <Paragraph className="mt-6">
        {t(
          "Our Commitment to Responsible Gaming We believe that gaming should be both exciting and responsible. We encourage all our users to play consciously, setting personal limits to keep gaming enjoyable. We strive to create an environment where a respect for thrills is matched with maintaining healthy boundaries."
        )}
      </Paragraph>
    </div>
  );
};

export default Head;
