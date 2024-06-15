import { useState } from "react";

import bellPaper from "../../assets/category/bell-peper.jpg";
import bhindi from "../../assets/category/bhindi.png";
import carrot from "../../assets/category/carrot.png";
import coconut from "../../assets/category/coconut.png";
import ghee from "../../assets/category/ghee.jpg";
import corn from "../../assets/category/corn.png";
import { Link } from "react-router-dom";

function History() {

  return (
    <>
      {/* <section className="px-40 pt-10 mx-auto">
        <h1 className="text-xl font-sans font-semibold">History</h1>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <a>History</a>
            </li>
          </ul>
        </div>
      </section> */}
      <section>
        <div className="card mt-10 bg-base-100 shadow-xl flex flex-row p-5">
          <div className="content w-full overflow-auto h-80 px-10 py-2">
        <h1 className="text-xl mb-5 font-sans font-semibold">History</h1>

              <div className="tomorrow">
                <ul className="list-none flex flex-col gap-3">
                  <li className="flex flex-row bg-primary px-5 py-1 items-center gap-5">
                    <div className="logo">
                      <img width={50} src={bellPaper} alt="bellPaper" />
                    </div>
                    <div className="text flex w-full items-center">
                      <p className="flex flex-col">
                        Bell Paper

                        <span className="text-sm bg-accent text-white w-min px-2 rounded-lg">New</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-row bg-primary px-5 py-1 items-center gap-5">
                    <div className="logo">
                      <img width={50} src={bellPaper} alt="bellPaper" />
                    </div>
                    <div className="text flex w-full items-center">
                      <p className="flex flex-col">
                        Bell Paper

                        <span className="text-sm bg-accent text-white w-min px-2 rounded-lg">New</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-row bg-primary px-5 py-1 items-center gap-5">
                    <div className="logo">
                      <img width={50} src={bellPaper} alt="bellPaper" />
                    </div>
                    <div className="text flex w-full items-center">
                      <p className="flex flex-col">
                        Bell Paper

                        <span className="text-sm bg-accent text-white w-min px-2 rounded-lg">New</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default History;
