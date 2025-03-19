"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          submitted: true,
          success: true,
          message: "Message sent successfully!",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error: unknown) {
      // Use unknown instead of any, then type narrow
      let errorMessage = "Something went wrong. Please try again.";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setStatus({
        submitted: true,
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {status.submitted && (
        <div
          className={`p-4 mb-4 rounded ${
            status.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status.message}
        </div>
      )}

      <label htmlFor="name">
        <h2>Name</h2>
      </label>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <label htmlFor="email">
        <h2>Email</h2>
      </label>
      <input
        type="email"
        name="email"
        placeholder="youremail@example.com"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <label htmlFor="subject">
        <h2>Subject</h2>
      </label>
      <input
        type="text"
        name="subject"
        placeholder="Your Subject"
        required
        value={formData.subject}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <label htmlFor="message">
        <h2>Message</h2>
      </label>
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
