import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="Ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          soluta itaque iste amet, corrupti nostrum cumque ad, possimus
          accusantium perspiciatis commodi at praesentium assumenda eius
          eligendi, animi deserunt saepe nesciunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          quae magnam, minus, sapiente repudiandae, aut ab reprehenderit nostrum
          distinctio fugit nemo ullam? Modi repudiandae consequatur explicabo
          nulla quia aperiam atque!
        </p>
      </div>
    </>
  );
};

export default about;
