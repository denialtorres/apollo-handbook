import { Form, Field, FieldRenderProps } from "react-final-form"



const TextInput = ({ input }: FieldRenderProps<string>) => {
  return <input type="text" className="text-field" {...input} />;
};

type BookFormProps = {
  onSubmit: (values: any) => void;
}

const BookForm = ({ onSubmit }: BookFormProps) => {
  return (
    <Form
     onSubmit={onSubmit}
     render={({ handleSubmit }) => {
      return(
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <Field name="title" component={TextInput} />
          </label>

          <input type="submit" className="submit" value="Create Book" />
        </form>
      );
     }}
     />
  );
}

export default BookForm;