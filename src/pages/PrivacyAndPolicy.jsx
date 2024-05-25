import React, { useEffect } from "react";

export default function PrivacyAndPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="my-8">
      <h1 className="text-2xl md:text-4xl font-bold text-primary">
        Privacy and Policy
      </h1>
      <div className="my-6">
        <h2 className="text-xl md:text-2xl font-semibold">Introduction</h2>
        <p className="mt-2 text-text/80">
          Welcome to{" "}
          <span className="text-accent font-medium">Big Bucket.</span> We are
          committed to protecting your privacy and ensuring that your personal
          information is handled in a safe and responsible manner. This Privacy
          Policy outlines how we manage and protect your data while you use our
          services.
        </p>
      </div>
      <div className="my-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          Information We Collect
        </h2>
        <h3 className="text-lg md:text-xl font-medium text-text/80 mt-4">
          Local Storage
        </h3>
        <p className="mt-2 text-text/80">
          Our website uses the browser's local storage feature to store all the
          data related to your shopping lists. This means that all your data is
          stored on your own device and not on our servers. Local storage allows
          you to use our service without needing to create an account or share
          any personal information with us.
        </p>
        <h3 className="text-lg md:text-xl font-medium text-text/80 mt-4">
          Cookies
        </h3>
        <p className="mt-2 text-text/80">
          We may use cookies to improve your experience on our website. Cookies
          are small data files that are placed on your device when you visit a
          website. These cookies do not collect personal data and are only used
          to enhance the functionality and performance of our website.
        </p>
      </div>

      <div className="my-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          Use of Information
        </h2>
        <h3 className="text-lg md:text-xl font-medium text-text/80 mt-4">
          Data Storage
        </h3>
        <p className="mt-2 text-text/80">
          As mentioned, we do not store any of your data on our servers. All
          information related to your shopping lists is stored locally on your
          device. This ensures that you have full control over your data, and it
          remains private and secure.
        </p>
        <h3 className="text-lg md:text-xl font-medium text-text/80 mt-4">
          Data Sharing
        </h3>
        <p className="mt-2 text-text/80">
          We do not share, sell, or rent your personal data to any third
          parties. Since we do not collect or store your data, there is no
          information to share or distribute.
        </p>
      </div>

      <div className="my-6">
        <h2 className="text-xl md:text-2xl font-semibold">Security</h2>
        <h3 className="text-lg md:text-xl font-medium text-text/80 mt-4">
          Data Security
        </h3>
        <p className="mt-2 text-text/80">
          The security of your data is very important to us. Since we do not
          store your data on our servers, you are responsible for the security
          of your data on your device. We recommend that you use security
          measures such as passwords and encryption to protect your data.
        </p>
        <h3 className="text-lg md:text-xl font-medium text-text/80 mt-4">
          Transparent Policy
        </h3>
        <p className="mt-2 text-text/80">
          We are committed to being transparent with our users about our data
          practices. Our policy is simple: we do not store your data, and we do
          not spy on our users. Your privacy is our top priority, and we have
          designed our service to ensure that your data remains yours and yours
          alone.
        </p>
      </div>

      <div className="my-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          Changes to this Privacy Policy
        </h2>
        <p className="mt-2 text-text/80">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. If we make any changes, we will notify you by updating the
          date at the top of this policy. We encourage you to review this policy
          periodically to stay informed about how we are protecting your
          information.
        </p>
      </div>

      <div className="my-6">
        <h2 className="text-xl md:text-2xl font-semibold">Contact Us</h2>
        <p className="mt-2 text-text/80">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at{" "}
          <span className="text-text font-bold">abhias.dev@gmail.com.</span>
        </p>
        <p className="mt-2 text-text/80">
          By using our website, you agree to the terms of this Privacy Policy.
        </p>
      </div>

      <div className="my-6">
        <p className="mt-2 text-text/80">
          Thank you for trusting{" "}
          <span className="text-accent font-medium">Big Bucket.</span> We are
          dedicated to providing a secure and private environment for you to
          manage your shopping lists. Your privacy and trust are important to
          us, and we are committed to upholding these values in all our
          practices.
        </p>
      </div>
    </div>
  );
}
