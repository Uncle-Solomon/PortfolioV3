import picture from "../../assets/test.jpg";

type Props = {};

function Contact({}: Props) {
  return (
    <div className=" mt-16 flex justify-between">
      <div className="w-[56%]">
        <h1 className="text-white font-comingsoon text-3xl font-light mb-12">
          Send Me an Email
        </h1>
        <form
          target="_blank"
          //   onSubmit={onSubmit}
          action={`https://formsubmit.co/426ad546e9b73eb129088f4fe348202d`}
          method="POST"
        >
          <input
            className="w-full rounded-sm bg-primary-300 px-5 py-3 placeholder-black mb-8 font-montserrat "
            type="text"
            placeholder="NAME"
          />

          <input
            className="w-full rounded-sm bg-primary-300 px-5 py-3 placeholder-black mb-8 font-montserrat "
            type="email"
            placeholder="EMAIL"
          />

          <textarea
            className="w-full rounded-sm bg-primary-300 px-5 py-3 placeholder-black mb-8 font-montserrat "
            rows={8}
            cols={50}
            placeholder="MESSAGE"
          />

          <button
            type="submit"
            className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white "
          >
            SUBMIT
          </button>
        </form>
      </div>
      <div className="">
        <img
          src={picture}
          alt="portfolio picture"
          className="w-[348px] h-[521px] rounded-md"
        />

        <div>
          <p className="text-center text-white font-montserrat mt-2">
            Developed By:{" "}
          </p>
          <p className="text-center text-white font-montserrat mt-2">
            Ameh Solomon Onyeke A.S.O 2023 &copy;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
