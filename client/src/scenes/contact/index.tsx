import { useForm } from "react-hook-form";
import picture from "../../assets/test.jpg";

type Props = {};

function Contact({}: Props) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div className=" mt-20 grid grid-cols-12">
      <div className="col-span-12 md:col-span-8 mr-8">
        <h1 className="text-black font-semibold font-comingsoon dark:text-white text-3xl dark:font-light mb-12">
          Send Me an Email
        </h1>
        <form
          target="_blank"
          onSubmit={onSubmit}
          action={`https://formsubmit.co/426ad546e9b73eb129088f4fe348202d`}
          method="POST"
        >
          {errors.name && (
            <p className="mb-2 text-red-400">
              {errors.name.type === "required" && "This field is required"}
              {errors.name.type === "maxLength" &&
                "This field has too many characters, maximum characters is 100"}
            </p>
          )}
          <input
            className="w-full rounded-md outline-none px-5 py-3 placeholder-black mb-8 font-montserrat "
            type="text"
            placeholder="NAME"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.email && (
            <p className="mb-2 text-red-400">
              {errors.email.type === "required" && "This field is required"}
              {errors.email.type === "pattern" && "Invalid Email"}
            </p>
          )}
          <input
            className="w-full rounded-md outline-none px-5 py-3 placeholder-black mb-8 font-montserrat "
            type="email"
            placeholder="EMAIL"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.message && (
            <p className="mb-2 text-red-400">
              {errors.message.type === "required" && "This field is required"}
              {errors.message.type === "maxLength" &&
                "This field has too many characters, maximum characters is 2000"}{" "}
            </p>
          )}

          <textarea
            className="w-full rounded-md outline-none px-5 py-3 placeholder-black mb-8 font-montserrat "
            rows={8}
            cols={50}
            placeholder="MESSAGE"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />

          <button
            type="submit"
            className="mb-2 rounded-lg bg-white px-6 py-3 transition duration-500 hover:scale-105 "
          >
            SUBMIT
          </button>
        </form>
        <div className="block md:hidden mb-2 mt-8">
          <p className="text-center text-white font-montserrat mt-2">
            Developed By:{" "}
          </p>
          <p className="text-center text-white font-montserrat mt-2">
            Ameh Solomon Onyeke A.S.O 2023 &copy;
          </p>
        </div>
      </div>
      <div className="hidden md:block col-span-4">
        <img
          src={picture}
          alt="portfolio picture"
          className="w-[348px] h-[521px] rounded-3xl"
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
