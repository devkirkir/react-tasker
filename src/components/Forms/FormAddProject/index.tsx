import useForm from "hooks/useForm";

interface Inputs {
  title: string;
  desc: string;
}

export const FormAddProject = () => {
  const { values, handleChange } = useForm<Inputs>({ title: "", desc: "" });

  return (
    <form onChange={handleChange}>
      <input name="title" type="text" defaultValue={values.title} />
      <input name="desc" type="text" defaultValue={values.desc} />
      <button type="submit">submit</button>
    </form>
  );
};
