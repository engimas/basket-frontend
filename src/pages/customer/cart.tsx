import { useState } from "react";

import bellPaper from "../../assets/category/bell-peper.jpg";
import bhindi from "../../assets/category/bhindi.png";
import carrot from "../../assets/category/carrot.png";
import coconut from "../../assets/category/coconut.png";
import ghee from "../../assets/category/ghee.jpg";
import corn from "../../assets/category/corn.png";

function Cart() {
  const [activeTab, setActiveTab] = useState<
    "Tomorrow" | "Upcomming" | "Recurring"
  >("Tomorrow");

  return (
    <>
      <section className="px-40 pt-10 mx-auto">
        <h1 className="text-xl font-sans font-semibold">Cart</h1>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Cart</a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="card mx-40 mt-10 bg-base-100 shadow-xl flex flex-row p-5">
          <div className="sidebar bg-primary rounded-xl w-1/5 overflow-hidden flex justify-center">
            <ul className="flex flex-col gap-2 w-full">
              <button
                className={
                  "p-4 hover:bg-accent stroke-accent hover:text-white select-none cursor-pointer flex flex-row  gap-4 items-center " +
                  (activeTab == "Tomorrow" ? "bg-accent text-white" : "")
                }
                onClick={() => setActiveTab("Tomorrow")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={
                    "size-6  " + (activeTab == "Tomorrow" ? "stroke-white" : "")
                  }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                  />
                </svg>
                Tomorrow
              </button>
              <button
                className={
                  " p-4 hover:bg-accent stroke-accent hover:text-white select-none cursor-pointer flex flex-row gap-4 items-center " +
                  (activeTab == "Upcomming" ? "bg-accent text-white" : "")
                }
                onClick={() => setActiveTab("Upcomming")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={
                    "size-6  " +
                    (activeTab == "Upcomming" ? "stroke-white" : "")
                  }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                  />
                </svg>
                Upcoming
              </button>
              <button
                className={
                  " p-4 hover:bg-accent stroke-accent hover:text-white select-none cursor-pointer flex flex-row gap-4 items-center " +
                  (activeTab == "Recurring" ? "bg-accent text-white" : "")
                }
                onClick={() => setActiveTab("Recurring")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={
                    "size-6  " +
                    (activeTab == "Recurring" ? "stroke-white" : "")
                  }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Recurring
              </button>
            </ul>
          </div>
          <div className="content w-full overflow-auto h-80 px-10 py-2">
            {activeTab === "Tomorrow" && (
              <div className="tomorrow">
                <ul className="list-none">
                  <li className="flex flex-row bg-primary px-5 py-1 items-center gap-5">
                    <div className="logo">
                      <img width={50} src={bellPaper} alt="bellPaper" />
                    </div>
                    <div className="text flex w-full items-center">
                      <p className="flex flex-col">
                        Bell Paper

                        <span className="text-sm bg-accent text-white w-min px-2 rounded-lg">New</span>
                      </p>
                      <button className="ghost ml-auto">Edit</button>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "Upcomming" && (
              <div className="tomorrow">
                <ul className="list-none">
                  <li>Nonsense order</li>
                  <li>Nonsense order</li>
                </ul>
              </div>
            )}
            {activeTab === "Recurring" && (
              <div className="tomorrow">
                <ul className="list-none">
                  <li>Nonsense order</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
