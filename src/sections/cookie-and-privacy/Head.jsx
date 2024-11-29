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
  <li className="text-[#2E3246] *:text-[#2E3246]">
    <strong className="text-[#2E3246]">{title} </strong>
    {content}
  </li>
);

const Head = () => {
  const { t } = useLocales();
  return (
    <div className="mt-[40px] mb-[60px] w-full px-4">
      <div className="max-w-[800px] w-full">
        <Paragraph className="mt-6">
          {t(
            "This Cookie Usage Policy explains what cookies are, how we use them on our site, the types of cookies used, as well as what information they collect and how this information is processed. We recommend that you read this document to better understand how cookies are used and how they affect your interaction with our website. Please note that cookies usually do not contain personal information that can directly identify you. However, in cases where personal information is linked to cookie data, we manage this information in accordance with our Privacy Policy. We do not store sensitive information such as passwords or mailing addresses in cookies."
          )}
        </Paragraph>
        <Heading level={4}>{t("Definitions and Terms")}</Heading>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
          <ListItem
            title={t("Company: ")}
            content={
              <>
                {t(
                  "In this document, the terms “Company”, “We”, “Us” or “Our” refer to the site you are on."
                )}
              </>
            }
          />
          <ListItem
            title={t("Cookies: ")}
            content={t(
              "Small text files stored on your device (computer, smartphone, etc.) while visiting our site. They contain information that helps improve your user experience."
            )}
          />
          <ListItem
            title={t("Website: ")}
            content={
              <>
                {t(
                  "Refers to the domain accessible at the address where you are located."
                )}
              </>
            }
          />
          <ListItem
            title={t("User: ")}
            content={t(
              "You—the person visiting our website or using its services, or a legal entity acting through such a person."
            )}
          />
        </ul>

        <Paragraph className="mt-5">
          {t(
            "Cookie Usage Types of Cookies We Use Our website employs two main types of cookies: • Session cookies: Stored temporarily and deleted immediately after closing the browser. • Persistent cookies: Remain on your device even after the session ends, to save your settings and improve interactions with the site during subsequent visits. We use the following categories of cookies:"
          )}
        </Paragraph>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
          <ListItem
            title={t("Essential cookies o Type: Session o Administered by: ")}
            content={
              <>
                {t(
                  "Us o Purpose: These cookies ensure the proper functioning of the site, including user authentication and preventing fraudulent activity. Without them, some functions of the site would be impossible to use."
                )}
              </>
            }
          />
          <ListItem
            title={t(
              "Functional cookies o Type: Persistent o Administered by: "
            )}
            content={t(
              "Us o Purpose: Allow to save your settings, such as selected language or login data, to improve your site usage experience and save you from having to re-enter information."
            )}
          />
        </ul>
        <Paragraph className="mt-5">
          {t(
            "Managing Cookies You can manage cookies yourself through your browser settings. To do this:"
          )}
        </Paragraph>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
          <ListItem
            title={""}
            content={t("Disable cookies in the browser settings.")}
          />
          <ListItem
            title={""}
            content={t(
              "Delete already saved cookies associated with our site. Note: If you disable the use of cookies, some functions of the site may not work correctly or may be unavailable."
            )}
          />
        </ul>

        <Paragraph className="mt-4">
          {t(
            "How to Delete or Block Cookies If you want to delete cookies or block their use, follow the instructions for your browser: • Google Chrome: Instructions • Internet Explorer: Instructions • Mozilla Firefox: Instructions • Safari: Instructions If you use another browser, visit the official site of its developer for instructions."
          )}
        </Paragraph>
        <Paragraph className="mt-4">
          {t(
            "Learn More About Cookies For more information on how cookies work, you can visit the site “What are cookies?”"
          )}
        </Paragraph>

        <Paragraph className="mt-4">
          <Trans
            i18nKey={
              "Contact Us If you have any questions about this Cookie Usage Policy, you can contact us through the “<Link > Contact Us </Link>” page on our website. We are here to help!"
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
            Contact Us If you have any questions about this Cookie Usage Policy,
            you can contact us through the “
            <Link
              className="font-medium !text-blue-600 dark:text-blue-500 hover:underline"
              to={"/"}
            >
              Contact Us
            </Link>
            ” page on our website. We are here to help!
          </Trans>
        </Paragraph>
      </div>
    </div>
  );
};

export default Head;
