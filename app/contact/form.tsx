"use client";

function submit() {
  const msg = "button pressed!";
  console.log(msg);
}

const emailform = () => {
  return (
    <form>
      <label htmlFor="">
        <h2>Email</h2>
      </label>
      <input
        type="email"
        name="email"
        placeholder="youremail@example.com"
        className=""
      />
      <br />

      <label htmlFor="">
        <h2>Subject</h2>
      </label>
      <input
        type="text"
        name="subject"
        placeholder="Your Subject"
        className=""
      />
      <br />

      <label htmlFor="">
        <h2>Message</h2>
      </label>
      <textarea
        name="message"
        placeholder="Your Message"
        className=""
        rows={4}
      />
      <br />

      <button
        type="button"
        onClick={submit}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default emailform;
