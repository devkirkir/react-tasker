import useForm from "hooks/useForm";

interface Inputs {
  title: string;
  desc: string;
}

export const FormAddProject = () => {
  const { values, errors, handleChange } = useForm<Inputs>({ title: "", desc: "" });

  return (
    <form onChange={handleChange}>
      <input name="title" type="text" defaultValue={values.title} />
      {errors.title && <span>{errors.title}</span>}

      <input name="desc" type="text" defaultValue={values.desc} />
      {errors.desc && <span>{errors.desc}</span>}

      <button type="submit">submit</button>
    </form>
  );
};
