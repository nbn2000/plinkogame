import { useState } from "react";
import useLocales from "/src/hooks/useLocales";

const Form = () => {
  const { t } = useLocales();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ type: false, msg: "" });
  const [errors, setErrors] = useState({}); // For field-specific errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); // Reset errors
    const form = e.target;
    const formData = new FormData(form);

    // Add fixed fields to FormData
    formData.append("_wpcf7", "1467");
    formData.append("_wpcf7_version", "6.0");
    formData.append("_wpcf7_locale", "en_US");
    formData.append("_wpcf7_unit_tag", "wpcf7-f1467-p1468-o1");
    formData.append("_wpcf7_container_post", "1468");
    formData.append(
      "_wpcf7_posted_data_hash",
      "ccfbed7edaed38deabe1614397965117"
    );

    try {
      const response = await fetch(
        "https://plinkogame.cc/wp-json/contact-form-7/v1/contact-forms/1467/feedback",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.status === "validation_failed") {
        // Handle validation errors
        const fieldErrors = {};
        result.invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);

        setToast({ type: false, msg: result.message });
      } else if (result.status === "mail_sent") {
        // Success message
        setToast({ type: true, msg: result.message });
        form.reset();
      }
    } catch (error) {
      console.error("Error:", error);
      setToast({
        type: false,
        msg: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-9 mb-[120px]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            {t("Your name")}
          </label>
          <input
            type="text"
            id="name"
            name="your-name"
            className={`mt-1 min-h-8 px-3 block w-full p-2 border-b bg-[#f9fafc] border-b-gray-300 rounded-sm shadow-sm focus:ring-green-500 focus:border-green-500 ${
              errors["your-name"] ? "border-red-500" : ""
            }`}
            placeholder={t("Your name")}
          />
          {errors["your-name"] && (
            <span className="text-red-500 text-[0.75rem] italic my-10">
              {errors["your-name"]}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {t("Your email")}
          </label>
          <input
            type="email"
            id="email"
            name="your-email"
            className={`mt-1 min-h-8 px-3 block w-full p-2 border-b bg-[#f9fafc] border-b-gray-300 rounded-sm shadow-sm focus:ring-green-500 focus:border-green-500 ${
              errors["your-email"] ? "border-red-500" : ""
            }`}
            placeholder={t("Your email")}
          />
          {errors["your-email"] && (
            <span className="text-red-500 text-[0.75rem] italic my-10">
              {errors["your-email"]}
            </span>
          )}
        </div>

        {/* Subject Field */}
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            {t("Subject")}
          </label>
          <input
            type="text"
            id="subject"
            name="your-subject"
            className={`mt-1 min-h-8 px-3 block w-full p-2 border-b bg-[#f9fafc] border-b-gray-300 rounded-sm shadow-sm focus:ring-green-500 focus:border-green-500 ${
              errors["your-subject"] ? "border-red-500" : ""
            }`}
            placeholder={t("Subject")}
          />
          {errors["your-subject"] && (
            <span className="text-red-500 text-[0.75rem] italic my-10">
              {errors["your-subject"]}
            </span>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            {t("Your message (optional)")}
          </label>
          <textarea
            id="message"
            rows="4"
            name="your-message"
            className="mt-1 block w-full p-2 border border-b bg-[#f9fafc] border-b-gray-300 rounded-sm shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder={t("Your message")}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#48ff4f] text-white py-3 px-8 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition"
          disabled={loading}
        >
          {loading ? t("Loading...") : t("Submit")}
        </button>
      </form>

      {/* Toast Notification */}
      {toast?.msg && (
        <p
          className={`mt-16 my-6 italic px-4 ${
            toast.type ? "border-green-500" : "border-red-500"
          } border-solid border-[2px] leading-[1.85em] font-roboto tracking-wide text-gray-500 text-[0.75rem]`}
        >
          {toast.msg}
        </p>
      )}
    </div>
  );
};

export default Form;
