import React from "react";
import { Helmet } from "react-helmet";

const Placement = () => {
  return (
    <>
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>FIRM - Placements</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <section className="mx-40">
          <div className="p-5 mt-3">
            <div className="flex mb-14 justify-center text-4xl font-serif font-bold">
              <h1 className="text-rose-700 uppercase">Placements In </h1> &nbsp;
              <h1 className="text-violet-950">FIRM UNIVERSITY PUNE</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Placement;
