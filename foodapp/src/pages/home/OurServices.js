import React from "react";

const servicesList = [
  {
    id: 1,
    title: "catering",
    des: " jfvn frelkfn kfnvk kdck dkljl lkd",
    image: "/images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Fast delivery",
    des: " jfvn frelkfn kfnvk kdck dkljl lkd",
    image: "/images/home/category/img2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: " jfvn frelkfn kfnvk kdck dkljl lkd",
    image: "/images/home/category/img3.png",
  },
  {
    id: 4,
    title: "Coupons",
    des: " jfvn frelkfn kfnvk kdck dkljl lkd",
    image: "/images/home/category/img4.png",
  },
];

const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 ">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Services</p>
            <h3 className="title">Check out our services</h3>
            <p className="my-5 text-secondary leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              ullam architecto nihil totam blanditiis porro dolorem
              reprehenderit delectus magnam nemo?
            </p>

            <button className="btn bg-blue text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>

        <div className="md:w-1/2 ">
          {/* <img
            src="/images/home/testimonials/testimonials.png"
            alt=""
            className="rounded-full"
          /> */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8  items-center">
            {servicesList.map((services) => (
              <div
                key={services.id}
                className="shadow-md rounded-xl py-5 px-5 text-center bg-black rounded-full space-y-2 text-blue cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border "
              >
                <img
                  src={services.image}
                  alt=""
                  className="mx-auto rounded-2xl"
                />
                <h5 className="pt-3 font-semibold">{services.title}</h5>
                <p className="text-[#90BD95]">{services.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
