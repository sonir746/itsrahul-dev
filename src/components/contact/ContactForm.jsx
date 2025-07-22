import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Icons from "../common/Icons";

export default function Contact() {
  const [state, handleSubmit] = useForm("manbqvno");
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>
          Passionate about building — let’s connect and create something great
          together.
        </p>
      </div>

      {state.succeeded ? (
        <div className="succeededCtnt">
          <p className="success-message">Thank you! I’ll be in touch soon.</p>
          <a href="/contact" className="goBackP">
            <button className="goBackBtn">Go Back</button>
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name *"
              required
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email *"
              required
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject *"
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message *"
            rows="6"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            className="send-btn"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
}
