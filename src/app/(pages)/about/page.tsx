export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="mx-auto max-w-7xl w-full flex flex-col gap-10">
        <div className="w-full max-w-3xl space-y-14 mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-accent">About Magic Image</h1>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Magic Image is a modern, user-friendly image conversion tool designed to simplify your workflow. We
                understand that in today's fast-paced digital world, you need tools that are both powerful and easy to
                use. That's why we've created a platform that combines professional-grade image conversion capabilities
                with an intuitive interface.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our tool processes everything directly in your browser, ensuring your images never leave your device.
                This client-side approach not only protects your privacy but also delivers lightning-fast conversions
                without the need to upload files to external servers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a professional designer, developer, or someone who occasionally needs to convert images,
                Magic Image is built to accommodate your needs with zero complexity and maximum efficiency.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t border-b border-accent/10 py-6">
            <span className="text-sm font-medium text-gray-600">Current Version: </span>
            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              v{process.env.NEXT_PUBLIC_VERSION_APP}
            </span>
            <a
              href="https://github.com/AhmadJanuarr/magic-image/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline flex items-center gap-1"
            >
              View Changelog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-medium text-foreground">Current Features</h2>
            <ul className="grid gap-6">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                <div>
                  <h3 className="font-medium text-gray-800">Bulk Image Processing</h3>
                  <p className="text-gray-600">
                    Convert multiple images simultaneously with our efficient batch processing system. Save time by
                    transforming entire collections at once.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                <div>
                  <h3 className="font-medium text-gray-800">Quality Control</h3>
                  <p className="text-gray-600">
                    Fine-tune your image quality with our advanced compression settings. Balance file size and visual
                    quality to meet your specific needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                <div>
                  <h3 className="font-medium text-gray-800">Format Flexibility</h3>
                  <p className="text-gray-600">
                    Support for all major image formats including WebP, PNG, JPEG, and more. Convert between formats
                    while maintaining image integrity.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                <div>
                  <h3 className="font-medium text-gray-800">Privacy-First Approach</h3>
                  <p className="text-gray-600">
                    All processing happens locally in your browser. Your images never leave your device, ensuring
                    complete privacy and security.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-96 bg-accent/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-accent/20 justify-center flex flex-col items-center">
          <h2 className="lg:text-2xl font-medium text-foreground mb-2 text-xl">Stay Updated with Magic Image</h2>
          <p className="text-gray-600 mb-6">
            Get the latest updates, tips and tricks about image conversion directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 rounded-lg border border-accent/20 focus:outline-none focus:border-accent bg-white/80"
            />
            <button className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to receive marketing emails from us. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
