import { Link } from "react-router-dom";
import useLocales from "/src/hooks/useLocales";
import { Trans } from "react-i18next";

const Paragraph = ({ children, className }) => (
  <p
    className={`leading-[1.85em] font-roboto tracking-wide text-[#2E3246] *:text-[#2E3246]${
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
      <div className="max-w-[800px] w-full">
        <Paragraph className="mt-6">
          <Trans
            i18nKey={
              "This Privacy Policy outlines the policies and procedures of <i>Plinkogames.cc</i> (“the Company”, “We”, “Us”, or “Our”) regarding the collection, use, and disclosure of your information when you use our Website and informs you about your privacy rights and protections."
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
            This Privacy Policy outlines the policies and procedures of
            <i>Plinkogames.cc</i> (“the Company”, “We”, “Us”, or “Our”)
            regarding the collection, use, and disclosure of your information
            when you use our Website and informs you about your privacy rights
            and protections.
          </Trans>
        </Paragraph>
        <Paragraph className="mt-6">
          {t(
            "By using our Website, you consent to the collection and use of information in accordance with this Privacy Policy."
          )}
        </Paragraph>
        <Heading level={3}>{t("Definitions and Interpretation")}</Heading>
        <Heading level={4}>{t("Definitions")}</Heading>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
          <ListItem
            title={t("Account:")}
            content={t(
              `A unique profile created for you to access our Website or certain features.`
            )}
          />
          <ListItem
            title={t("Affiliate:")}
            content={t(
              "An entity that controls, is controlled by, or is under common control with the Company."
            )}
          />
          <ListItem
            title={t("Cookies:")}
            content={t(
              "Small files placed on your device by a website, storing details about your browsing history and preferences."
            )}
          />
          <ListItem
            title={t("Country refers to: ")}
            content={t("United Kingdom")}
          />
          <ListItem
            title={t("Device:")}
            content={t(
              "Any device, such as a computer, mobile phone, or tablet, that can access the Website."
            )}
          />
          <ListItem
            title={t("Personal Data:")}
            content={t("Information relating to an identifiable individual.")}
          />
          <ListItem
            title={t("Service Provider:")}
            content={t(
              "A third-party provider who processes data on behalf of the Company to facilitate or enhance the Service."
            )}
          />
          <ListItem
            title={t("Usage Data: ")}
            content={t(
              "Data collected automatically about the use of the Website."
            )}
          />
          <ListItem
            title={t("Website: ")}
            content={
              <>
                <Trans
                  i18nKey={
                    "Refers to Plinkogames.cc, accessible from <Link className='font-medium break-all text-blue-600 dark:text-blue-500 hover:underline' to={'/'} > http://plinkogame.cc/ </Link>"
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
                  Refers to Plinkogames.cc, accessible from{" "}
                  <Link
                    className="font-medium break-all text-blue-600 dark:text-blue-500 hover:underline"
                    to={"/"}
                  >
                    {" "}
                    http://plinkogame.cc/{" "}
                  </Link>
                </Trans>
              </>
            }
          />
          <ListItem
            title={t("You:")}
            content={t(
              "The individual using the Website or a company/legal entity on whose behalf the Website is accessed."
            )}
          />
        </ul>

        <Heading level={3}>{t("Collection and Use of Personal Data")}</Heading>
        <Heading level={4}>{t("Types of Data Collected")}</Heading>
        <ol className="list-decimal mt-5 ml-8">
          <ListItem
            title={t("Personal Data")}
            content={t(
              "We may collect personally identifiable information, such as your email address, which allows us to contact or identify you."
            )}
          />
          <ListItem
            title={t("Usage Data")}
            content={t(
              "Usage Data is collected automatically and may include details like your device’s IP address, browser type and version, pages visited, date and time of visit, time spent on pages, unique device identifiers, and diagnostic data."
            )}
          />
          <ListItem
            title={t("Tracking Technologies and Cookies")}
            content={t(
              "We use Cookies and similar tracking technologies to analyze user activity on our Website. These technologies include:"
            )}
          />
          <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
            <ListItem
              title={t("Cookies or Browser Cookies: ")}
              content={t(
                "Small files stored on your device, which can be adjusted via your browser settings."
              )}
            />
            <ListItem
              title={t("Web Beacons: ")}
              content={t(
                "Small electronic files used in some areas of our Website and emails to gather statistics on page visits and email responses."
              )}
            />
          </ul>
        </ol>
        <Paragraph className="mt-4 *:text-[#2E3246] ml-8">
          <Trans
            i18nKey={
              "We use <strong> Session Cookies </strong> (deleted after closing the browser) and <strong> Persistent Cookies </strong> for various purposes:"
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
            We use <strong> Session Cookies </strong> (deleted after closing the
            browser) and <strong> Persistent Cookies </strong> for various
            purposes:
          </Trans>
        </Paragraph>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-10 mt-4">
          <ListItem
            title={t("Necessary Cookies: ")}
            content={t("Enable essential functions and security.")}
          />
          <ListItem
            title={t("Acceptance Cookies: ")}
            content={t(
              "Identify whether users have consented to cookie usage."
            )}
          />
          <ListItem
            title={t("Functionality Cookies: ")}
            content={t(
              "Remember choices you make, like language or login preferences, to enhance user experience."
            )}
          />
        </ul>
        <Paragraph className="mt-4">
          {t("For more information, please refer to our Cookies Policy.")}
        </Paragraph>

        <Heading level={3}>{t("Purpose of Using Personal Data")}</Heading>
        <Paragraph className="mt-4">
          {t(
            "The Company may use your Personal Data for the following reasons:"
          )}
        </Paragraph>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
          <ListItem
            title={t("Service Provision:")}
            content={t(
              "To operate, maintain, and secure our Website and its features."
            )}
          />
          <ListItem
            title={t("Account Management: ")}
            content={t("To manage your registration and account information.")}
          />
          <ListItem
            title={t("Customer Support: ")}
            content={t("To provide customer service and respond to inquiries.")}
          />
          <ListItem
            title={t("Communications: ")}
            content={t(
              "To send updates or notifications related to the Website, products, and services."
            )}
          />
          <ListItem
            title={t("Marketing: ")}
            content={t(
              "To inform you about similar products and offers, provided you have not opted out of such communications."
            )}
          />
          <ListItem
            title={t("Business Operations: ")}
            content={t(
              "To analyze and improve Website performance, products, and services."
            )}
          />
        </ul>
        <Heading level={3}>{t("Learn More About Cookies")}</Heading>
        <Paragraph className="mt-4">
          <Trans
            i18nKey={
              "To gain more knowledge about cookies in general, you may want to visit an informational site on “ <Link className='font-medium !text-blue-600 dark:text-blue-500 hover:underline' to={'/'} > What Are Cookies? </Link> ”."
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
            To gain more knowledge about cookies in general, you may want to
            visit an informational site on “{" "}
            <Link
              className="font-medium !text-blue-600 dark:text-blue-500 hover:underline"
              to={"/"}
            >
              {" "}
              What Are Cookies?{" "}
            </Link>{" "}
            ”.
          </Trans>
        </Paragraph>
        <Heading level={3}>{t("Sharing of Personal Data")}</Heading>
        <Paragraph className="mt-4">
          {t("Your data may be shared in the following situations:")}
        </Paragraph>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
          <ListItem
            title={t("With Service Providers: ")}
            content={t(
              "To support our Website operations and communication with users."
            )}
          />
          <ListItem
            title={t("For Business Transfers:")}
            content={t(
              "In the event of a merger, acquisition, or asset sale, user data may be transferred."
            )}
          />
          <ListItem
            title={t("With Affiliates:")}
            content={t(
              "We may share your information with affiliates, who are bound by this Privacy Policy."
            )}
          />
          <ListItem
            title={t("With Business Partners: ")}
            content={t("To offer certain products, services, or promotions.")}
          />
          <ListItem
            title={t("With Other Users:")}
            content={t(
              "Information you choose to share publicly on the Website may be accessible to other users."
            )}
          />
          <ListItem
            title={t("With Your Consent: ")}
            content={t(
              "We may share your data for other purposes if you consent."
            )}
          />
        </ul>
        <Heading level={3}>{t("Data Retention")}</Heading>
        <Paragraph className="mt-4">
          {t(
            "We retain your Personal Data only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as legally required. Usage Data, used for performance and security improvements, is kept for shorter periods unless otherwise needed for these purposes."
          )}
        </Paragraph>
        <Heading level={3}>{t("Data Transfer")}</Heading>
        <Paragraph className="mt-4">
          {t(
            "Your data may be transferred to computers outside your jurisdiction with varying data protection standards. By submitting your information, you consent to such transfers, and we will take steps to ensure the secure treatment of your data."
          )}
        </Paragraph>
        <Heading level={3}>{t("Deletion of Personal Data")}</Heading>
        <Paragraph className="mt-4">
          {t(
            "You may request the deletion of your data by managing your account settings or contacting us directly. However, we may retain data as required by law or for legitimate purposes."
          )}
        </Paragraph>
        <Heading level={3}>{t("Disclosure of Personal Data")}</Heading>
        <ol className="list-decimal mt-5 ml-8">
          <ListItem
            title={t("Business Transactions:")}
            content={t(
              "In the event of a merger or asset transfer, your data may be transferred, with advance notice of any change in this Privacy Policy."
            )}
          />
          <ListItem
            title={t("Law Enforcement: ")}
            content={t(
              "Personal Data may be disclosed when required by law or in response to lawful government requests."
            )}
          />
          <ListItem
            title={t("Other Legal Requirements:")}
            content={t(
              "Disclosure may be necessary to protect Company assets, investigate potential issues, or safeguard public safety."
            )}
          />
        </ol>
        <Heading level={3}>{t("Data Security")}</Heading>
        <Paragraph className="mt-4">
          {t(
            "We prioritize the security of your Personal Data but acknowledge that no online or electronic transmission is entirely secure. While we strive to use commercially acceptable practices, we cannot guarantee absolute security."
          )}
        </Paragraph>
        <Heading level={3}>{t("Children’s Privacy")}</Heading>

        <Paragraph className="mt-4">
          {t(
            "Our Website is not intended for children under the age of 18, and we do not knowingly collect data from minors. If we learn that we have collected such data, we will promptly delete it. If parental consent is legally required, we may request such consent prior to processing a minor’s data."
          )}
        </Paragraph>
        <Heading level={3}>{t("External Links")}</Heading>
        <Paragraph className="mt-4">
          {t(
            "Our Website may contain links to third-party sites. We recommend reviewing the privacy policies of these sites, as we hold no responsibility for their practices."
          )}
        </Paragraph>
        <Heading level={3}>{t("Policy Updates")}</Heading>
        <Paragraph className="mt-4">
          {t(
            "We may revise this Privacy Policy periodically. Any changes will be posted on this page, with notice provided as appropriate. By continuing to use the Website, you accept the revised policy terms."
          )}
        </Paragraph>
        <Heading level={3}>{t("Contact Us")}</Heading>

        <Paragraph className="mt-4">
          <Trans
            i18nKey={
              "For questions about this Privacy Policy, please reach out via our <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' to={'/'} > Contact Us </Link> page."
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
            For questions about this Privacy Policy, please reach out via our{" "}
            <Link
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              to={"/"}
            >
              {" "}
              Contact Us{" "}
            </Link>{" "}
            page.
          </Trans>
        </Paragraph>
        <hr className="w-full h-[1px] text-[#ccc] bg-[#ccc] my-10" />
        <Paragraph className="mt-4">
          <Trans
            i18nKey={
              "This adaptation aligns with <i>Plinkogames.cc</i> and includes essential details to ensure comprehensive coverage."
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
            This adaptation aligns with <i>Plinkogames.cc</i> and includes
            essential details to ensure comprehensive coverage.
          </Trans>
        </Paragraph>
      </div>
    </div>
  );
};

export default Head;
