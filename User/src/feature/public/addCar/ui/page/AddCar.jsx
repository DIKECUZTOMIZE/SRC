import React from "react";
import ListYourCarForm from "./ListYourCarForm";
 

const ListYourCarPage = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            List Your Car
          </h1>

          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
            Register your vehicle to partner with us. Once submitted, our team
            will review your details and contact you via Call or WhatsApp for
            verification before listing your vehicle on our platform.
          </p>
        </div>

        <ListYourCarForm />
      </div>
    </section>
  );
};

export default React.memo(ListYourCarPage);