import useLocales from "/src/hooks/useLocales";
import { Trans } from "react-i18next";

// this page is not added to json excapt en.json rest has no translation

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
          {t(
            "This Privacy Policy details how our company (“Company”, “We”, “Us”, or “Our”) collects, uses, and discloses your information when you use our website. It also clarifies your privacy rights and the steps we take to protect your personal information. By using our site, you consent to the collection, processing, and use of information as outlined in this Privacy Policy."
          )}
        </Paragraph>
        <Heading level={4}>{t("Definitions and Terms")}</Heading>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
          <ListItem
            title={t("Account:")}
            content={t(
              `A unique profile created for your access to the website or its features.`
            )}
          />
          <ListItem
            title={t("Affiliate:")}
            content={t(
              "Any organization that controls, is controlled by, or is under common control with the Company."
            )}
          />
          <ListItem
            title={t("Cookies:")}
            content={t(
              "Small text files stored on your device that hold data about your preferences and activities."
            )}
          />
          <ListItem
            title={t("Device:")}
            content={t(
              "Any tool used to access the website, such as a computer, smartphone, or tablet."
            )}
          />
          <ListItem
            title={t("Personal Data:")}
            content={t("Any information that can identify an individual.")}
          />
          <ListItem
            title={t("Service Provider:")}
            content={t(
              "A third-party organization that assists the Company in providing services, such as hosting, data analysis, or payment processing."
            )}
          />
          <ListItem
            title={t("Usage Data: ")}
            content={t(
              "Data collected automatically about the use of the Website."
            )}
          />
        </ul>

        <Heading level={4}>
          {t("Data Collection and Use Types of Data Collected")}
        </Heading>
        <ul className="list-disc mt-5 ml-8">
          <ListItem
            title={t("Personal Data")}
            content={t(
              "We may collect data such as your name, email address, phone number, and other information you provide during registration or interaction with the site."
            )}
          />
          <ListItem
            title={t("Usage Data")}
            content={t("This data is collected automatically and may include:")}
          />
          <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
            <ListItem title={""} content={t("Device IP address")} />
            <ListItem title={""} content={t("Browser type and version")} />
            <ListItem title={""} content={t("Pages you visit")} />
            <ListItem title={""} content={t("Visit date and time")} />
            <ListItem title={""} content={t("Time spent on pages")} />
            <ListItem
              title={""}
              content={
                <>
                  <Trans
                    i18nKey={
                      "Unique device identifiers <strong>Tracking Technologies</strong> We use cookies and similar technologies to analyze user activity. These include:"
                    }
                    components={{
                      strong: <strong />,
                    }}
                  >
                    Unique device identifiers
                    <strong>Tracking Technologies</strong> We use cookies and
                    similar technologies to analyze user activity. These
                    include:
                  </Trans>
                </>
              }
            />
            <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
              <ListItem
                title={t("Session Cookies:")}
                content={t("Deleted after you close your browser.")}
              />
              <ListItem
                title={t("Persistent Cookies:")}
                content={t("Remain on your device to enhance user experience.")}
              />
              <ListItem
                title={t("Web Beacons:")}
                content={t(
                  "Electronic files used to collect visit statistics and track interactions."
                )}
              />
            </ul>
          </ul>
        </ul>
        <Heading level={4}>
          {t("Purposes of Data Processing We process your data to:")}
        </Heading>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-10 mt-4">
          <ListItem
            title={t("Provide Services:")}
            content={t("Support website operation and functionality.")}
          />
          <ListItem
            title={t("Manage Accounts:")}
            content={t("Keep track of your registration and profile settings.")}
          />
          <ListItem
            title={t("Support Users:")}
            content={t(
              "Promptly respond to inquiries and provide technical assistance."
            )}
          />
          <ListItem
            title={t("Communications:")}
            content={t(
              "Inform you about site changes, new features, or services."
            )}
          />
          <ListItem
            title={t("Marketing:")}
            content={t(
              "Provide information about products and offers, unless you opt out."
            )}
          />
          <ListItem
            title={t("Analysis and Improvement:")}
            content={t("Optimize the site and enhance service quality.")}
          />
        </ul>

        <Heading level={4}>
          {t("Data Sharing We may share your data with:")}
        </Heading>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-10 mt-4">
          <ListItem
            title={t("Service Providers:")}
            content={t(
              "For data processing, hosting, analytics, and other tasks."
            )}
          />
          <ListItem
            title={t("During Business Transfers:")}
            content={t("If the Company is reorganized, merged, or sold.")}
          />
          <ListItem
            title={t("With Affiliates:")}
            content={t("To offer related services or promotions.")}
          />
          <ListItem
            title={t("With Business Partners:")}
            content={t("As part of product promotions or campaigns.")}
          />
          <ListItem
            title={t("With Your Consent:")}
            content={t("If you authorize a specific use of data.")}
          />
        </ul>
        <Heading level={4}>{t("Data Storage and Transfer")}</Heading>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-10 mt-4">
          <ListItem
            title={t("Retention Period:")}
            content={t(
              "We store your data only as long as necessary for the purposes stated in this policy or as required by law."
            )}
          />
          <ListItem
            title={t("Data Transfer:")}
            content={t(
              "Your data may be processed on servers located outside your jurisdiction. We take measures to protect it."
            )}
          />
        </ul>
        <div className="space-y-6 my-7">
          <Paragraph className="mt-4">
            {t(
              "Deletion of Personal Data You can request the deletion of your data by contacting us or adjusting your account settings. Note that some data may be retained as required by law."
            )}
          </Paragraph>
          <Paragraph className="mt-4">
            {t(
              "Data Security We use modern technical and organizational measures to protect your data, but no data transmission or storage method is completely secure."
            )}
          </Paragraph>
          <Paragraph className="mt-4">
            {t(
              "Children's Privacy Our website is not intended for users under 18. We do not knowingly collect data from minors and will delete such information if provided."
            )}
          </Paragraph>
          <Paragraph className="mt-4">
            {t(
              "Third-Party Site Links Our website may include links to third-party resources. We are not responsible for their privacy practices and recommend reviewing their policies."
            )}
          </Paragraph>
          <Paragraph className="mt-4">
            {t(
              "Changes to Privacy Policy We may update this policy. All changes will be posted on this page, and continuing to use the site after updates signifies agreement to the new terms."
            )}
          </Paragraph>
          <Paragraph className="mt-8">
            {t(
              "Contact Us If you have questions or comments about this Privacy Policy, please contact us via the  “Contact Us” page on our website."
            )}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Head;
