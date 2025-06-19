export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            At MagicImage, we take your privacy seriously. This privacy policy explains how we collect, use, and protect
            your information when you use our image conversion service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not store any of the images you upload to our service. All image processing is done in real-time in
            your browser, and images are immediately deleted after conversion. We do not collect any personal
            information unless explicitly provided by you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>To provide and maintain our service</li>
            <li>To improve and optimize our image conversion tools</li>
            <li>To respond to your requests or questions</li>
            <li>To detect and prevent technical issues</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            Your images are processed entirely in your browser. We use industry-standard security measures to protect
            any information that passes through our servers, although we do not store any uploaded images.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            We use essential cookies to ensure the basic functionality of our website. These cookies do not track your
            personal information or browsing behavior.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:ahmadjanuaramri2015@gmail.com" className="text-accent hover:underline">
              ahmadjanuaramri2015@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
