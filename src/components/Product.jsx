import React from "react";
import aboutImg from "../assets/mobile-login.png";
import Maecenas from '../assets/maecenas.png'

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Product = () => {
  return (
    <div className="my-12" id="product">
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          >
            <img src={aboutImg} alt="" className="w-full" />
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
            Super Stuff Hub Dispatch - Your Truck Dispatching Partner 
            </h2>
            <div>
  <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
    <span>Running a small trucking company? Partner with a truck dispatch service that truly supports you.</span>
  </p>
  <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
    At Super Stuff Hub Dispatch, our experienced dispatchers are dedicated trucking professionals focused on your success. Work one-on-one with your dedicated dispatcher to build a strong, supportive relationship. We secure the best rates and keep your truck loaded with profitable hauls, no matter the market conditions.
  </p>
  <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
    Let us handle the time-consuming tasks of calling brokers, negotiating rates, completing setup packets, managing insurance certificates, and dealing with billing and invoicing. Our full-service approach allows you to focus on driving while we take care of the rest, at no extra charge.
  </p>
  <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
    With over a decade of experience, we’ve booked over 50,000 loads for hundreds of carriers, maintaining a proven track record of high-quality and reliable service. We run credit checks on every load and work with all factoring companies, ensuring you get paid promptly and securely.
  </p>
  <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
    Experience the difference with Super Stuff Hub Dispatch. You’ll be amazed at how much more you can earn with our dedicated service.
  </p>
</div>
            <button className="btn-primary">Learn More</button>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-start items-center gap-8">
          <div className="md:w-1/3">
            <img src={Maecenas} alt="" />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-6">
             <span className="text-2xl font-semibold"> Super Stuff Hub </span>specializes in connecting carriers with loads across all types of trucks, including flatbeds, refrigerated trucks (reefers), dry vans, box trucks, tanker trucks, dump trucks, tow trucks, pickup trucks, and specialty trucks for oversized loads and specific cargo needs. Whether they're traveling interstate or intrastate, we are dedicated to facilitating efficient logistics solutions. Our comprehensive service platform ensures that every shipment reaches its destination safely and on time, offering seamless coordination and reliable support throughout the transportation process. Trust Super Stuff Hub to streamline your dispatch operations, optimize the efficiency of your trucking services, and exceed your logistics expectations with our commitment to reliability and excellence.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">Timothy Andrews</h5>
              <p className="text-base text-neutralGrey mb-8">
              Operator at Super Stuff Hub, specializing in optimizing truck dispatching services for efficiency and reliability.
              </p>
              <div>
                <div className="flex gap-8 items-center flex-wrap">
                  <img src="/src/assets/icons/company1.png" alt="" className="cursor-pointer" />
                  <img src="/src/assets/icons/company2.png" alt=""  className="cursor-pointer"/>
                  <img src="/src/assets/icons/company3.png" alt="" className="cursor-pointer" />
                  <img src="/src/assets/icons/company4.png" alt="" className="cursor-pointer" />
                  <img src="/src/assets/icons/company5.png" alt="" className="cursor-pointer" />
                  <img src="/src/assets/icons/company6.png" alt="" className="cursor-pointer" />
                  <div className="flex gap-8 items-center">
                    <a href="/" className="font-bold text-brandPrimary hover:text-neutralBlack">
                      Meet all customers
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                          stroke="#4CAF4F"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
