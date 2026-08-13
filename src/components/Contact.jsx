import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const payload = Object.fromEntries(fd);
    // Demo: show success only
    setStatus("Message was not delivered");
    e.target.reset();
    setTimeout(() => setStatus(null), 4000);
    console.log("contact payload", payload);
  }

  return (
    <section id="contact" className="section-block">
      <div className="section-card contact-card">
        <h3 className="section-title">Contact</h3>
        <p className="section-copy">
          *Demo only*
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            name="name"
            placeholder="Your name"
            required
            className="field"
          />
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="field"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="field textarea"
          ></textarea>
          <div className="cta-row start">
            <button className="btn btn-primary">Send message</button>
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </div>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
