import SectionHead from "../ui/SectionHead";
import SpotlightCard from "../ui/SpotlightCard";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { type FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import Squares from "../ui/Squares";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{ message: string; type: string }>({
    message: "",
    type: "",
  });

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus({ message: "Sending...", type: "loading" });

    emailjs
      .sendForm("adelYasser", "template_yui8p2n", form.current, {
        publicKey: "HNdP806FCFVmc58P0",
      })
      .then(
        () => {
          setStatus({ message: "", type: "success" });
          form.current?.reset();
        },
        () => {
          setStatus({
            message: "Failed to send message. Try again.",
            type: "error",
          });
        }
      );
  };

  return (
    <motion.section
      className="relative flex flex-col items-center min-h-screen gap-12 px-6 py-16 lg:px-20"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      variants={containerVariants}
    >
      <motion.div
        className="z-[1] text-center md:text-left"
        variants={itemVariants}
      >
        <SectionHead animate={false}>Contact me</SectionHead>
        <p className="mt-2 text-primary-200">
          I'd love to hear from you. Feel free to reach out using the form
          below!
        </p>
      </motion.div>

      <div className="container grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-7 z-[1]">
        <motion.div
          className="flex flex-col items-center w-full gap-y-7 md:col-span-3 lg:col-span-2"
          variants={itemVariants}
        >
          {[
            { title: "Email", value: "adelyasser5002@gmail.com" },
            { title: "Phone", value: "+20 1069142906" },
          ].map((info) => (
            <SpotlightCard
              key={info.title}
              className="flex flex-col px-10 leading-relaxed rounded py-7 [&>h3]:text-xl [&>h3]:font-bold w-full"
              spotlightColor="rgba(255, 255, 255, 0.048)"
            >
              <h3>{info.title}</h3>
              <h4>{info.value}</h4>
            </SpotlightCard>
          ))}

          <SpotlightCard
            className="flex flex-col px-10 leading-relaxed rounded py-7 [&>h3]:text-xl [&>h3]:font-bold w-full"
            spotlightColor="rgba(255, 255, 255, 0.048)"
          >
            <h3>Social Media</h3>
            <h4>Follow me on social media</h4>
            <ul className="flex items-center justify-center gap-4 py-3 text-2xl">
              <li>
                <a
                  href="https://github.com/dola5xd"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit my GitHub"
                >
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adel-yasser-a28181242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit my LinkedIn"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/dola2005ti"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit my Facebook"
                >
                  <BsFacebook />
                </a>
              </li>
            </ul>
          </SpotlightCard>
        </motion.div>

        <motion.div
          className="col-span-1 md:col-span-4 lg:col-span-5"
          variants={itemVariants}
        >
          {status.type === "success" ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center p-10 shadow-md bg-primary-800 rounded-xl"
            >
              <FaCheckCircle className="mb-4 text-4xl text-green-400" />
              <h3 className="mb-2 text-2xl font-bold text-white">Thank you!</h3>
              <p className="text-center text-primary-200">
                Thanks for messaging me. I will reply soon!
              </p>
            </motion.div>
          ) : (
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="p-6 shadow-md bg-primary-800 rounded-xl lg:p-10"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="p-3 bg-transparent border rounded-lg border-primary-500 placeholder:text-primary-200 text-primary-200 focus:outline-none focus:ring focus:ring-indigo-400"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="p-3 bg-transparent border rounded-lg border-primary-500 placeholder:text-primary-200 text-primary-200 focus:outline-none focus:ring focus:ring-indigo-400"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 mt-6 bg-transparent border rounded-lg border-primary-500 placeholder:text-primary-200 text-primary-200 focus:outline-none focus:ring focus:ring-indigo-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full p-3 mt-6 bg-transparent border rounded-lg border-primary-500 placeholder:text-primary-200 text-primary-200 focus:outline-none focus:ring focus:ring-indigo-400"
              />

              <button
                type="submit"
                className="flex items-center justify-center w-full gap-2 p-3 mt-6 font-bold text-white bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400"
              >
                {status.type === "loading" && (
                  <ImSpinner2 className="text-xl animate-spin" />
                )}
                <span>
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </span>
              </button>

              {status.type === "error" && (
                <p className="mt-4 text-center text-red-500">
                  {status.message}
                </p>
              )}
            </motion.form>
          )}
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="absolute inset-0 w-full">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="#aaaaaa"
          hoverFillColor="#222"
        />
      </motion.div>
    </motion.section>
  );
}

export default Contact;
