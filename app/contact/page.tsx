import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
  description: "This page will show form to send me a message",
};

export default function Contact() {
  return (
    <main>
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1>Contact Page</h1>
      </div>
    </main>
  );
}
