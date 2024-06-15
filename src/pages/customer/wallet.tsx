import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import esewa from "../../assets/esewa.png"

function Wallet() {

    const [hide, setHide] = useState(true)

  return (
    <div className="">
      <section className="px-40 pt-10 mx-auto">
        <h1 className="text-xl font-sans font-semibold">Wallet</h1>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Wallet</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="mx-64 p-10 card shadow-lg "
      >
        <img className="mx-auto mb-10" width={100} src={Logo} />
        <span tabIndex={0} onClick={()=> setHide(c=> !c)} className="text-end cursor-pointer select-none">Current Balance: <strong>Nrs. {hide ? "xxxx" : "2000"}</strong></span>
        <div className="detail">
            {/* account name, phone number */}
            <p>Account Name: <strong>Alina Dhakal</strong></p>
            <p>Phone Number: <strong>9812345678</strong></p>
        </div>
        <div className="flex flex-col gap-5">
            <button className="btn btn-primary"><span>Load Wallet</span>
            <img  src={esewa} width={30} />
            </button>
            <button className="btn btn-primary">Redeem </button>
        </div>
      </section>
    </div>
  );
}

export default Wallet;
