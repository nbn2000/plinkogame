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
            "Thank you for visiting our site. We are always ready to assist you with any questions, issues, or suggestions you may have. If you need additional information about <Link> Plinko</Link>, require support with our platform, or wish to share your experiences, we are always open to communication."
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
          Thank you for visiting our site. We are always ready to assist you
          with any questions, issues, or suggestions you may have. If you need
          additional information about
          <Link
            className="font-medium break-all !text-blue-600 dark:text-blue-500 hover:underline"
            to={"/"}
          >
            Plinko
          </Link>
          , require support with our platform, or wish to share your
          experiences, we are always open to communication.
        </Trans>
      </Paragraph>
      <Heading level={4}>{t("Ways to contact us:")}</Heading>

      <ol className="list-disc space-y-8 mt-5 ml-8">
        <ListItem
          title={t("Feedback Form")}
          content={
            <>
              {t(
                "Use the feedback form on our site for quick communication with our support service. Fill in your name, email address, and message, and we will try to respond as quickly as possible."
              )}
            </>
          }
        />
        <ListItem
          title={t("Email")}
          content={
            <>
              {t(
                "If you have specific inquiries, you can email us. Our team is ready to provide the necessary assistance, whether it involves questions about the game or using the platform."
              )}
            </>
          }
        />
        <ListItem
          title={t("Social Media")}
          content={
            <>
              {t(
                "Follow us on social media to stay updated on the latest updates, features, and exclusive content about Plinko."
              )}
            </>
          }
        />
      </ol>
      <Paragraph className="mt-6">
        {t(
          "Feedback and Suggestions Your opinion is very important to us. We are always pleased to receive feedback and suggestions on how we can improve our platform and content. Feel free to share your ideas through the feedback form or by email. Your input helps us improve!"
        )}
      </Paragraph>
    </div>
  );
};

export default Head;
