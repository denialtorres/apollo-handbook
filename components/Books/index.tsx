import { gql } from "@apollo/client";
import { AllBooksQuery, useAllBooksQuery } from "src/gql/graphql";

function WrappedBooks(){
  const { loading, error, data } = useAllBooksQuery();

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error){
    return <span>Something went wrong: ${error}</span>;
  }

  if (data){
    return (
      <div>
        <h1>Books</h1>
        <Books books={data.books} />
      </div>
    )
  }
}

const allBooksQuery = gql `
 query allBooks {
  books {
    id
    title
  }
 }
`;

function Books({ books }: { books: AllBooksQuery["books"] }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.id} {book.title}</li>
      ))}
    </ul>
  );
}

export default WrappedBooks;
