import { Metadata } from "next";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import contact from "@/app/contact/contactlist";
import Emailform from "@/app/contact/form";

export const metadata: Metadata = {
  title: "Contact page",
  description: "This page will show form to send me a message",
};

export default function Contact() {
  return (
    <main>
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1>Contact Me</h1>
        <p>Feel free to ask me anything</p>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          {/* contact List */}
          <div className="max-w-md">
            <br />
            {contact.map((item, index) => (
              <div key={index} className="contact-list border p-4 widget">
                <p>
                  <FaDiscord /> <a href={item.discordUrl}>{item.discord}</a>
                </p>

                <p>
                  <FaInstagram />{" "}
                  <a href={item.instagramUrl}>{item.instagram}</a>
                </p>

                <p>
                  <FaXTwitter /> <a href={item.twitterUrl}>{item.twitter}</a>
                </p>

                <p>
                  <FaFacebook /> <a href={item.facebookUrl}>{item.facebook}</a>
                </p>

                <p>
                  <MdEmail /> <a href={item.emailUrl}>{item.email}</a>
                </p>

                <p>
                  <FaWhatsapp /> <a href={item.whatsappUrl}>{item.whatsapp}</a>
                </p>

                <p>
                  <FaGithub /> <a href={item.githubUrl}>{item.github}</a>
                </p>

                <br />
                <h2>Address:</h2>
                <p>{item.address}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <Emailform />
        </div>
      </div>
    </main>
  );
}
