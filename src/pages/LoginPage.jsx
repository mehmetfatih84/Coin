import React from "react";
import { useFormik } from "formik";
import { schema } from "../schema";
import InputFieldsView from "../views/InputFieldsView";
import { inputs } from "../contants/index";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordconfirm: "",
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });

  return (
    <div className="h-screen w-full grid place-items-center bg-gradient-to-l from-darkred to-white">
      <div>
        <div className="flex justify-center">
          <img src="/logo.png" alt="logo" className="w-[140px] my-5" />
        </div>
        <form onSubmit={formik.handleSubmit} className="w-[500px] text-darkred">
          {inputs.map((data, index) => (
            <InputFieldsView key={index} formik={formik} data={data} />
          ))}
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-xl border-2 p-3 rounded-xl border-darkred hover:text-orange-600 hover:border-orange-600 transition"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
