import { useForm, SubmitHandler } from "react-hook-form";
import IngredientInput from "./IngredientInput";

type Inputs = {
  tittel: string;
  inngress: string;
  imageURL: string;
  ingredienser: string[];
  oppskriftSteg: string[];
};

function RecipeForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("oppskriftSteg")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      {/* register your input into the hook by invoking the "register" function */}
      <label>
        Tittel
        <input {...register("tittel")} className="titleInput" />
      </label>

      <label>
        Inngress
        <textarea rows={6} {...register("inngress")}></textarea>
      </label>

      <label>
        Bildelenke
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("imageURL", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.imageURL && (
          <span className="errorMessage">This field is required</span>
        )}
      </label>

      <label>
        Ingredienser
        <input {...register("ingredienser.0", { required: true })} />
      </label>

      <IngredientInput register={register} />

      <label>
        Oppskriftsteg
        <input {...register("oppskriftSteg", { required: true })} />
      </label>

      <label className="submitButton">
        Lagre oppskrift!
        <input type="submit" />
      </label>
    </form>
  );
}

export default RecipeForm;
