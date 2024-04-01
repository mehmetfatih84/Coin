const InputFieldsView = ({ formik, data }) => {
  const { name, label, type } = data;
  return (
    <div className="flex flex-col mb-2">
      <label className="mb-[3px]">{label}</label>
      <input
        type={type}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        className=" border-2 border-darkred outline-none rounded-[10px] p-1"
      />
      <div className="error-message">
        {formik.touched[name] && formik.errors[name] ? (
          <span className="text-darkred">{formik.errors[name]}</span>
        ) : (
          ""
        )}{" "}
        &nbsp;
      </div>
    </div>
  );
};

export default InputFieldsView;
