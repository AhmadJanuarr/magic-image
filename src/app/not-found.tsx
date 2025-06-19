import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold text-accent mb-8">404</h1>
        <h2 className="text-3xl font-semibold text-foreground mb-6">Oops! Page Not Found</h2>
        <div className="space-y-4 text-lg text-foreground/80">
          <p>
            We're sorry, but it seems like you've ventured into uncharted territory. The page you're looking for appears
            to have gone on vacation without leaving a forwarding address.
          </p>
          <p>
            Don't worry though - these things happen to the best of us! Maybe the page is playing hide and seek, or
            perhaps it's taken a wrong turn at the last server.
          </p>
          <p>
            While we send out our search party, why not head back to our homepage? There's plenty of exciting content
            waiting for you there!
          </p>
        </div>
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-4 rounded-full bg-accent text-background hover:bg-accent/80 transition-colors font-medium text-lg"
        >
          Take Me Home
        </Link>
      </div>
    </div>
  );
}
