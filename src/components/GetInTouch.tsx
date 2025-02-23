import phone from "../assets/phone.svg"
import whatsapp from "../assets/whatsapp.svg"
import email from "../assets/email.svg"

const GetInTouch = () => {
  return (
    <section className="bg-gradient-to-b from-[#F1F5F9]-[.90] via-[#FFFFFF]/90 to-[#37B34A] max-w-5xl mx-auto py-8 px-2">
      <h2 className="text-4xl font-bold text-gray-900">
        Get in <span className="text-[#F68923]">Touch</span>
      </h2>
      <p className="text-gray-600 mt-2">
        Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
      </p>

      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name *"
          className="border p-3 rounded-md w-full"
          required
        />
        <input
          type="text"
          placeholder="Business Name *"
          className="border p-3 rounded-md w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-md w-full"
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          className="border p-3 rounded-md w-full"
          required
        />
        <input
          type="url"
          placeholder="Business Online Presence Link *"
          className="border p-3 rounded-md w-full col-span-1 md:col-span-2"
          required
        />
        <div className="w-full col-span-1 md:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
            Send a message
          </label>
          <textarea
            placeholder="Add anything else you want to share"
            className="border p-3 rounded-md w-full col-span-1 md:col-span-2"
            maxLength={500}
            rows={5}
          ></textarea>
        </div>
        <button className="bg-[#F68923] text-white p-3 rounded-md w-full col-span-1 md:col-span-2">
          SEND
        </button>
      </form>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mt-6 text-gray-700 text-sm">
        <div className="flex items-center gap-2">
          <img src={phone} alt="phone" />
          <p className="text-[#F68923]">
            <span className="font-bold text-black">PHONE</span> <br /> +2342013309116
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src={whatsapp} alt="Whatsapp" />
          <p className="text-[#F68923]">
            <span className="font-bold text-black">Whatsapp</span> <br /> +2348109976152
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src={email} alt="email" />
          <p className="text-[#F68923]">
            <span className="font-bold text-black">EMAIL</span> <br /> business@cyclebreeze.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;