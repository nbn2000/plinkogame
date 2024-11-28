import { Link } from "react-router-dom";
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
  <li className="text-[#2E3246] *:text-[#2E3246]">
    <strong className="text-[#2E3246]">{title} </strong>
    {content}
  </li>
);

const Head = () => {
  const { t } = useLocales();
  return (
    <div className="mt-[40px] mb-[60px] w-full px-4">
      <h3 className="text-[#2E3246] font-bold">
        {t("Last Updated:")} [11.06.24]
      </h3>
      <div className="max-w-[800px] w-full">
        <Paragraph className="mt-6">
          {t(
            "This Cookie Policy explains what cookies are and how we use them on {{siteName}}. Please review this policy to understand the types of cookies we use, the information we collect using cookies, and how that information is utilized.",
            { siteName: <i>Plinkogames.cc</i> }
          )}
        </Paragraph>
        <Paragraph className="mt-6">
          {t(
            "Cookies typically do not contain any personal data that directly identifies you. However, any personal information we store about you may be linked to the information stored in and gathered from cookies. For more details, please see our Privacy Policy."
          )}
        </Paragraph>
        <Paragraph className="mt-6">
          {t(
            "We do not store sensitive personal details such as mailing addresses or account passwords within cookies."
          )}
        </Paragraph>

        <Heading level={3}>{t("Definitions and Interpretation")}</Heading>
        <Heading level={4}>{t("Definitions")}</Heading>
        <Paragraph>{t("For the purposes of this Cookie Policy:")}</Paragraph>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
          <ListItem
            title={t("Company")}
            content={
              <>
                {t(
                  "(referred to as “the Company”, “We”, “Us” or “Our”) refers to {{siteName}}",
                  { siteName: <i>Plinkogames.cc.</i> }
                )}
              </>
            }
          />
          <ListItem
            title={t("Cookies")}
            content={t(
              "are small files placed on your device (computer, mobile, or other) by a website, containing information about your browsing history on that website, among other purposes."
            )}
          />
          <ListItem
            title={t("Website")}
            content={
              <>
                {t("refers to {{siteName}}, accessible from {{siteLink}}", {
                  siteName: <i>Plinkogames.cc</i>,
                  siteLink: (
                    <Link
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      to={"/"}
                    >
                      http://plinkogame.cc
                    </Link>
                  ),
                })}
              </>
            }
          />
          <ListItem
            title={t("You")}
            content={t(
              "refers to the individual accessing or using the Website, or a company or legal entity on behalf of which such individual is accessing or using the Website."
            )}
          />
        </ul>

        <Heading level={3}>{t("Use of Cookies")}</Heading>
        <Heading level={4}>{t("Types of Cookies We Use")}</Heading>
        <Paragraph>
          {t(
            "Cookies on our site can be either “Persistent” or “Session” Cookies. Persistent Cookies stay on your device even when you go offline, while Session Cookies are deleted once you close your browser."
          )}
        </Paragraph>
        <Paragraph className="mt-4">
          {t(
            "We utilize both session and persistent cookies for the purposes outlined below:"
          )}
        </Paragraph>
        <ol className="list-decimal mt-5 ml-8">
          <ListItem title={t("Necessary/Essential Cookies")} />
          <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
            <ListItem title={t("Type")} content={t("Session Cookies")} />
            <ListItem title={t("Administered by")} content={t("Us")} />
            <ListItem
              title={t("Purpose")}
              content={t(
                "These cookies are essential to provide you with the services available through our Website and to enable specific functions. They help authenticate users and prevent fraudulent account use."
              )}
            />
          </ul>
          <ListItem title={t("Functionality Cookies")} />
          <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
            <ListItem title={t("Type")} content={t("Persistent Cookies")} />
            <ListItem title={t("Administered by")} content={t("Us")} />
            <ListItem
              title={t("Purpose")}
              content={t(
                "These cookies allow us to remember the choices you make on our Website, such as login details or language preferences."
              )}
            />
          </ul>
        </ol>

        <Heading level={3}>{t("Managing Your Cookie Preferences")}</Heading>
        <Paragraph className="mt-4">
          {t(
            "If you prefer to restrict or disable the use of cookies on this Website, you must first disable cookies in your browser settings and then delete the cookies saved in your browser that are associated with our site."
          )}
        </Paragraph>
        <Paragraph className="mt-4">
          {t(
            "If you do not accept our cookies, some inconvenience may occur during your use of the Website, and certain features may not function as intended."
          )}
        </Paragraph>

        <Heading level={4}>
          {t("Instructions to Delete or Refuse Cookies")}
        </Heading>
        <Paragraph className="mt-4">
          {t(
            "If you wish to delete cookies or prevent your browser from accepting cookies, please visit the support pages of your browser:"
          )}
        </Paragraph>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
          <ListItem
            title={t("Chrome")}
            content={
              <Link
                className="font-medium break-all text-blue-600 dark:text-blue-500 hover:underline"
                to={"/"}
              >
                https://support.google.com/accounts/answer/32050
              </Link>
            }
          />
          <ListItem
            title={t("Internet Explorer")}
            content={
              <Link
                className="font-medium break-all text-blue-600 dark:text-blue-500 hover:underline"
                to={"/"}
              >
                http://support.microsoft.com/kb/278835
              </Link>
            }
          />
          <ListItem
            title={t("Firefox")}
            content={
              <Link
                className="font-medium break-all text-blue-600 dark:text-blue-500 hover:underline"
                to={"/"}
              >
                https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
              </Link>
            }
          />
          <ListItem
            title={t("Safari")}
            content={
              <Link
                className="font-medium  break-all text-blue-600 dark:text-blue-500 hover:underline"
                to={"/"}
              >
                https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
              </Link>
            }
          />
        </ul>
        <Paragraph className="mt-4">
          {t(
            "For any other browsers, please consult the official support pages of those browsers."
          )}
        </Paragraph>
        <Heading level={3}>{t("Learn More About Cookies")}</Heading>
        <Paragraph className="mt-4">
          {t(
            "To gain more knowledge about cookies in general, you may want to visit an informational site on “{{internalLink}}”.",
            {
              internalLink: (
                <Link
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  to={"/"}
                >
                  What Are Cookies?
                </Link>
              ),
            }
          )}
        </Paragraph>
        <Heading level={3}>{t("Contact Us")}</Heading>
        <Paragraph className="mt-4">
          {t(
            "If you have any questions regarding this Cookie Policy, please contact us by visiting our {{internalLink}} page on the Website.",
            {
              internalLink: (
                <Link
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  to={"/"}
                >
                  Contact Us
                </Link>
              ),
            }
          )}
        </Paragraph>
        <Paragraph className="mt-4">
          {t(
            "This version reflects {{siteName}} and retains the necessary information for clarity and compliance.",
            { siteName: <i>Plinkogames.cc</i> }
          )}
        </Paragraph>
      </div>
    </div>
  );
};

export default Head;
