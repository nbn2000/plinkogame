import { Link } from "react-router-dom";

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
  return (
    <div className="mt-[40px] mb-[60px] w-full px-4">
      <div className="max-w-[800px] w-full">
        <Paragraph className="mt-6">
          This Privacy Policy outlines the policies and procedures of{" "}
          <i>Plinkogames.cc</i> (“the Company”, “We”, “Us”, or “Our”) regarding
          the collection, use, and disclosure of your information when you use
          our Website and informs you about your privacy rights and protections.
        </Paragraph>
        <Paragraph className="mt-6">
          By using our Website, you consent to the collection and use of
          information in accordance with this Privacy Policy.
        </Paragraph>
        <Heading level={3}>Definitions and Interpretation</Heading>
        <Heading level={4}>Definitions</Heading>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
          <ListItem
            title="Account:"
            content={`A unique profile created for you to access our Website or certain features.`}
          />
          <ListItem
            title="Affiliate:"
            content="An entity that controls, is controlled by, or is under common control with the Company."
          />
          <ListItem
            title="Cookies:"
            content="Small files placed on your device by a website, storing details about your browsing history and preferences."
          />
          <ListItem title="Country refers to: " content=" United Kingdom" />
          <ListItem
            title="Device:"
            content="Any device, such as a computer, mobile phone, or tablet, that can access the Website."
          />
          <ListItem
            title="Personal Data:"
            content="Information relating to an identifiable individual."
          />
          <ListItem
            title="Service Provider:"
            content="A third-party provider who processes data on behalf of the Company to facilitate or enhance the Service."
          />
          <ListItem
            title="Usage Data: "
            content="Data collected automatically about the use of the Website."
          />
          <ListItem
            title="Website: "
            content={
              <>
                Refers to Plinkogames.cc, accessible from
                <Link
                  className="font-medium break-all text-blue-600 dark:text-blue-500 hover:underline"
                  to={"/"}
                >
                  http://plinkogame.cc/
                </Link>
              </>
            }
          />
          <ListItem
            title="You:"
            content="The individual using the Website or a company/legal entity on whose behalf the Website is accessed."
          />
        </ul>

        <Heading level={3}>Collection and Use of Personal Data</Heading>
        <Heading level={4}>Types of Data Collected</Heading>
        <ol className="list-decimal mt-5 ml-8">
          <ListItem
            title="Personal Data"
            content="We may collect personally identifiable information, such as your email address, which allows us to contact or identify you."
          />
          <ListItem
            title="Usage Data"
            content="Usage Data is collected automatically and may include details like your device’s IP address, browser type and version, pages visited, date and time of visit, time spent on pages, unique device identifiers, and diagnostic data."
          />
          <ListItem
            title="Tracking Technologies and Cookies"
            content="We use Cookies and similar tracking technologies to analyze user activity on our Website. These technologies include:"
          />
          <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
            <ListItem
              title="Cookies or Browser Cookies: "
              content="Small files stored on your device, which can be adjusted via your browser settings."
            />
            <ListItem
              title="Web Beacons: "
              content="Small electronic files used in some areas of our Website and emails to gather statistics on page visits and email responses."
            />
          </ul>
        </ol>
        <Paragraph className="mt-4 *:text-[#2E3246] ml-8">
          We use <strong> Session Cookies </strong> (deleted after closing the
          browser) and <strong> Persistent Cookies </strong> for various
          purposes:
        </Paragraph>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-10 mt-4">
          <ListItem
            title="Necessary Cookies: "
            content="Enable essential functions and security."
          />
          <ListItem
            title="Acceptance Cookies: "
            content="Identify whether users have consented to cookie usage."
          />
          <ListItem
            title="Functionality Cookies: "
            content="Remember choices you make, like language or login preferences, to enhance user experience."
          />
        </ul>
        <Paragraph className="mt-4">
          For more information, please refer to our Cookies Policy.
        </Paragraph>

        <Heading level={3}>Purpose of Using Personal Data</Heading>
        <Paragraph className="mt-4">
          The Company may use your Personal Data for the following reasons:
        </Paragraph>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
          <ListItem
            title="Service Provision:"
            content="To operate, maintain, and secure our Website and its features."
          />
          <ListItem
            title="Account Management: "
            content="To manage your registration and account information."
          />
          <ListItem
            title="Customer Support: "
            content="To provide customer service and respond to inquiries."
          />
          <ListItem
            title="Communications: "
            content="To send updates or notifications related to the Website, products, and services."
          />
          <ListItem
            title="Marketing: "
            content="To inform you about similar products and offers, provided you have not opted out of such communications."
          />
          <ListItem
            title="Business Operations: "
            content="To analyze and improve Website performance, products, and services."
          />
        </ul>
        <Heading level={3}>Learn More About Cookies</Heading>
        <Paragraph className="mt-4">
          To gain more knowledge about cookies in general, you may want to visit
          an informational site on “
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            to={"/"}
          >
            What Are Cookies?
          </Link>
          ”.
        </Paragraph>
        <Heading level={3}>Sharing of Personal Data</Heading>
        <Paragraph className="mt-4">
          Your data may be shared in the following situations:
        </Paragraph>
        <ul className="list-disc list-inside flex flex-col gap-3 ml-4 mt-4">
          <ListItem
            title="With Service Providers: "
            content="To support our Website operations and communication with users."
          />
          <ListItem
            title="For Business Transfers:"
            content="In the event of a merger, acquisition, or asset sale, user data may be transferred."
          />
          <ListItem
            title="With Affiliates:"
            content="We may share your information with affiliates, who are bound by this Privacy Policy."
          />
          <ListItem
            title="With Business Partners: "
            content="To offer certain products, services, or promotions."
          />
          <ListItem
            title="With Other Users:"
            content="Information you choose to share publicly on the Website may be accessible to other users."
          />
          <ListItem
            title="With Your Consent: "
            content="We may share your data for other purposes if you consent."
          />
        </ul>
        <Heading level={3}>Data Retention</Heading>
        <Paragraph className="mt-4">
          We retain your Personal Data only as long as necessary to fulfill the
          purposes outlined in this Privacy Policy or as legally required. Usage
          Data, used for performance and security improvements, is kept for
          shorter periods unless otherwise needed for these purposes.
        </Paragraph>
        <Heading level={3}>Data Transfer</Heading>
        <Paragraph className="mt-4">
          Your data may be transferred to computers outside your jurisdiction
          with varying data protection standards. By submitting your
          information, you consent to such transfers, and we will take steps to
          ensure the secure treatment of your data.
        </Paragraph>
        <Heading level={3}>Deletion of Personal Data</Heading>
        <Paragraph className="mt-4">
          You may request the deletion of your data by managing your account
          settings or contacting us directly. However, we may retain data as
          required by law or for legitimate purposes.
        </Paragraph>
        <Heading level={3}>Disclosure of Personal Data</Heading>
        <ol className="list-decimal mt-5 ml-8">
          <ListItem
            title="Business Transactions:"
            content="In the event of a merger or asset transfer, your data may be transferred, with advance notice of any change in this Privacy Policy."
          />
          <ListItem
            title="Law Enforcement: "
            content="Personal Data may be disclosed when required by law or in response to lawful government requests."
          />
          <ListItem
            title="Other Legal Requirements:"
            content="Disclosure may be necessary to protect Company assets, investigate potential issues, or safeguard public safety."
          />
        </ol>
        <Heading level={3}>Data Security</Heading>
        <Paragraph className="mt-4">
          We prioritize the security of your Personal Data but acknowledge that
          no online or electronic transmission is entirely secure. While we
          strive to use commercially acceptable practices, we cannot guarantee
          absolute security.
        </Paragraph>
        <Heading level={3}>Children’s Privacy</Heading>

        <Paragraph className="mt-4">
          Our Website is not intended for children under the age of 18, and we
          do not knowingly collect data from minors. If we learn that we have
          collected such data, we will promptly delete it. If parental consent
          is legally required, we may request such consent prior to processing a
          minor’s data.
        </Paragraph>
        <Heading level={3}>External Links</Heading>
        <Paragraph className="mt-4">
          Our Website may contain links to third-party sites. We recommend
          reviewing the privacy policies of these sites, as we hold no
          responsibility for their practices.
        </Paragraph>
        <Heading level={3}>Policy Updates</Heading>
        <Paragraph className="mt-4">
          We may revise this Privacy Policy periodically. Any changes will be
          posted on this page, with notice provided as appropriate. By
          continuing to use the Website, you accept the revised policy terms.
        </Paragraph>
        <Heading level={3}>Contact Us</Heading>

        <Paragraph className="mt-4">
          For questions about this Privacy Policy, please reach out via our{" "}
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            to={"/"}
          >
            Contact Us
          </Link>{" "}
          page.
        </Paragraph>
        <hr className="w-full h-[1px] text-[#ccc] bg-[#ccc] my-10" />
        <Paragraph className="mt-4">
          This adaptation aligns with{" "}
          <i className="text-[#2E3246]">Plinkogames.cc</i> and includes
          essential details to ensure comprehensive coverage.
        </Paragraph>
      </div>
    </div>
  );
};

export default Head;
