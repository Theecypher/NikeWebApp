import { twMerge } from "tailwind-merge";
import Button from "../../components/Button";
import { useState } from "react";

const ContactPage = ({
  className,
  descClass,
  formClass,
  inputClass,
  textAreaClass,
  title,
  text,
}) => {
  const [values, setValues] = useState({
    companyName: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevVals) => ({ ...prevVals, [name]: value }));
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.companyName === "" || values.email === "") {
      setMessage("Inputs cannot be empty");
      console.log(message);
    } 
    else 
    {
      console.log("Success!");
      // axios
      //   .post(`tcu-backend-one.onrender.com/api/v1/contactus/`, {
      //     name: values.companyName,
      //     email: values.email,
      //     message: values.message,
      //   })
      //   .then((response) => {
      //     console.log(response);
      //     })
    }
  };

  return (
    <>
      <div
        className={twMerge(
          `py-[48.5px] mt-[127px] lg:mt-[75px] px-[50px] lg:px-[100px] flex lg:justify-between bg-[#181818] items-center`,
          className
        )}
      >
        <div className={twMerge(`flex flex-col lg:w-[401px] `, descClass)}>
          <h3 className="font-[700] max-lg:text-center text-[18px] lg:text-[32px] leading-[24.3px] lg:leading-[43.2px] text-white">
            {title}
          </h3>
          <p className="text-[#D9D9D9] text-[14px] lg:text-[16px] leading-[18.9px] lg:leading-[21.6px] font-[400] mt-[10px]">
            {text}
          </p>
        </div>
        <form
          className={twMerge(
            `flex flex-col mt-[77px] lg:mt-[13px] bg-[#121212] p-[20px] rounded-[12px] lg:w-[524px] `,
            formClass
          )}
        >
          <div className="flex gap-x-[14px] ">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              onChange={handleChange}
              value={values.companyName}
              className={twMerge(
                `bg-[#181818] rounded-[2.58px] max-lg:h-[25.8px] w-full text-[#ACACAC] max-lg:text-[7.74px] px-[20px] py-[15px] border-[1px] border-[#3E3E34] leading-[12.39px] lg:leading-[24px] text-[15px] font-[400]`,
                inputClass
              )}
            />
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              className={twMerge(
                `bg-[#181818] rounded-[2.58px] max-lg:h-[25.8px] w-full text-[#ACACAC] px-[20px] py-[15px] border-[1px] border-[#3E3E34] text-[7.74px] lg:leading-[24px] leading-[12.39px] lg:text-[15px] font-[400]`,
                inputClass
              )}
            />
          </div>
          <textarea
            placeholder="Message"
            name="message"
            value={values.message}
            onChange={handleChange}
            className={twMerge(
              `"w-full resize-none text-[#ACACAC] mt-[30px] lg:mt-[13px] h-[88px] lg:h-[224px] py-[20px] px-[15px] bg-[#181818] border-[0.6px] rounded-[5px] border-[#3E3E34]`,
              textAreaClass
            )}
          />
          <Button
            onclick={handleSubmit}
            className="w-full bg-[#fff] rounded-[4px] mt-[20px] text-[#121212] font-[700] text-[7.74px] lg:text-[15px] lg:leading-[24px] leading-[12.39px]"
          >
            Send Message
          </Button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
