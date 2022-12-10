import React from "react";
import "../index.css";
import hydera from "../../images/hydera.jpeg";

const ServiceCard = ({ title, image, subtitle }) => (
  <div className="black-glassmorphism px-1 py-8 m-2 cursor-pointer">
    <div
      className={`ml-5 w-14 h-14 rounded-lg flex justify-center items-center bg-white`}
    >
      <img className="h-12 w-12" src={image} />
    </div>
    <div className="ml-5">
      <h3 className="mt-2 text-white text-xl mb-2">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center">
    <div className=" mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="">
        <h1 className="text-white text-lg sm:text-3xl py-4 text-gradient">
          Services that we known for
        </h1>
      </div>

      <div className="flex-1 flex justify-start items-center">
        <ServiceCard
          title="Token Service"
          image={hydera}
          subtitle="Mint and manage fungible and non-fungible token on Ratio for application payments, governance, or digital collectibles."
        />
        <ServiceCard
          title="File Service"
          image="https://media.istockphoto.com/id/1175215972/vector/file-folder-in-flat-on-white-background.jpg?s=612x612&w=0&k=20&c=dALCaVx9KdXJkgPO6Bjim_3TLZA9rnN__9gZRdo1zQ8="
          subtitle="Store smart contract byte code, address books, credentials, and other critical files on the Hydera network."
        />
        <ServiceCard
          title="Network Service"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOxJrhE6zKBgRQKdqSOCJ3eiNgU0ez00Ks_VhpkzXwPbElAfg9Rpdx2CMZpMTPRdlRbU&usqp=CAU"
          subtitle="Use the Hydera API to interact with high speed services with low fees that utilize the efficiency of hashgraph."
        />
      </div>
    </div>
  </div>
);

export default Services;
