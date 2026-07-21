import React, { useRef  , useState} from "react";
import "./ContactNewForm.css";
// import React, { useRef,  } from "react";
import { useCreateContactMutation } from "../redux/api"; // path apne project ke hisab se

/**
 * ContactUs
 * Three-panel contact section (form / stats / directory) with a
 * cursor-tracked 3D tilt on each card. Black page background, no
 * outer breathing room beyond a small edge padding.
 */

const STATS = [
  { num: "15", unit: "+ Years", label: "Field Experience" },
  { num: "150", unit: "+ Projects", label: "Done Around World" },
  { num: "99", unit: "%", label: "Client Satisfaction" },
  { num: "2022", unit: "+ Year", label: "Established On" },
  { num: "2", unit: "Mins", label: "Response Time" },
];

const SOCIALS = [
  { label: "LinkedIn", icon: "in" },
  { label: "Twitter", icon: "𝕏" },
  { label: "Facebook", icon: "f" },
  { label: "Instagram", icon: "◎" },
];

function TiltCard({ children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const maxTilt = 7;
    const rotateY = (x - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - y) * maxTilt * 2;
    card.style.transform = `perspective(1800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.012)`;
  };

  const handleLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "perspective(1800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
  };

  return (
    <div className="cu-card" ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="cu-card-inner">{children}</div>
    </div>
  );
}

export default function ContactNewForm() {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createContact(formData).unwrap();

      alert("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="cu-root">
      <div className="cu-wrap">
        <div className="cu-eyebrow">
          <span className="dot">●</span>CONTACT
        </div>
        <h1 className="cu-h1">Let's get in touch</h1>
        <p className="cu-lede">
          You can reach us anytime via <a href="mailto:info@jjcsystems.com">info@jjcsystems.com</a>
        </p>

        <div className="cu-grid">
          {/* FORM */}
          {/* <TiltCard> */}
          <TiltCard>
            <form onSubmit={handleSubmit}>


              <div className="cu-field-row">
                <div className="cu-field">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="cu-field">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="cu-field-row">
                <div className="cu-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="cu-field-row">
                <div className="cu-field">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="cu-field-row">
                <div className="cu-field">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Leave us a message...."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <label className="cu-agree">
                <input type="checkbox" defaultChecked />
                <span>
                  You agree to our <a href="#">terms and conditions.</a>
                </span>
              </label>
              <button
                type="submit"
                className="cu-submit"
                disabled={isLoading}
              >
                <span className="cu-submit-text">
                  {isLoading ? "Sending..." : "Get Started"}
                </span>

                {!isLoading && (
                  <span className="cu-submit-arrow">→</span>
                )}
              </button>
            </form>
          </TiltCard>

          {/* STATS */}
          <TiltCard>
            {STATS.map((s) => (
              <div className="cu-stat-row" key={s.label}>
                <div className="cu-stat-num">
                  {s.num}
                  <span className="unit">{s.unit}</span>
                </div>
                <div className="cu-stat-label">{s.label}</div>
              </div>
            ))}
          </TiltCard>

          {/* DIRECTORY */}
          <TiltCard>
            <div className="cu-dir-block">
              <div className="cu-dir-title">Contact Info</div>
              <div className="cu-dir-line">
                <b>+1 (888)-329-0625</b>
              </div>
              <div className="cu-dir-line">support@jjcsystems.com</div>
            </div>
            <hr className="cu-divider" />
            <div className="cu-dir-block">
              <div className="cu-dir-title">Visit our office</div>
              <div className="cu-dir-line">Houston | Chicago | Atlanta</div>
              <div className="cu-dir-line">Riyadh, Saudi Arabia</div>
              <div className="cu-dir-line">Hyderabad, India</div>
            </div>
            <hr className="cu-divider" />
            <div className="cu-social-list">
              {SOCIALS.map((s) => (
                <a className="cu-social-item" href="#" key={s.label}>
                  <span className="ic">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
}