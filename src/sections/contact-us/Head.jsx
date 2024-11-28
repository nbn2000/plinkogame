import { Link } from "react-router-dom";
import contactus from "../../assets/plink-game.jpg";
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
      <div className="w-full my-8">
        <img src={contactus} alt="contact us photo" className="rounded-md" />
      </div>
      <Paragraph className="mt-6">
        {t(
          "Thank you for visiting {{siteLink}}. We’re here to help you with any questions, concerns, or feedback you may have. Whether you’re looking for more information about Plinko, need assistance with our platform, or want to share your experience with us, we’re always happy to hear from you.",
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
      <Heading level={4}>{t("Our Commitment to Responsible Gaming")}</Heading>

      <ol className="list-decimal space-y-8 mt-5 ml-8">
        <ListItem
          title={t("Contact Form")}
          content={
            <>
              <br />
              {t(
                "Please use our contact form available on this page for a direct way to reach our support team. Just fill in your name, email, and message, and we’ll get back to you as soon as possible."
              )}
            </>
          }
        />
        <ListItem
          title={t("Email")}
          content={
            <>
              <br />
              {t(
                "For specific inquiries, feel free to email us at {{siteLink}}. Our team is available to assist you with any questions you may have, from game tips to platform navigation.",
                {
                  siteLink: (
                    <Link
                      className="font-medium break-all !text-blue-600 dark:text-blue-500 hover:underline"
                      to={"/"}
                    >
                      support@plinkogames.cc
                    </Link>
                  ),
                }
              )}
            </>
          }
        />
        <ListItem
          title={t("Social Media")}
          content={
            <>
              <br />
              {t(
                "Connect with us on our social media channels to stay updated on new guides, features, and exclusive content related to Plinko."
              )}
            </>
          }
        />
      </ol>
      <Heading level={3}>{t("Feedback & Suggestions")}</Heading>
      <Paragraph className="mt-6">
        {t(
          "At {{siteName}}, your experience is our priority. We welcome your suggestions and ideas on how we can improve our platform and content. Please reach out through our contact form or email, and let us know what you think!",
          { siteName: <i>Plinkogames.cc</i> }
        )}
      </Paragraph>
    </div>
  );
};

export default Head;
