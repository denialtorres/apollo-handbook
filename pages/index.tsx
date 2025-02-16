import client from "client";
import { ApolloProvider } from "@apollo/client";
import WrappedBooks from "components/Books";


function App() {
  return (
    <ApolloProvider client={client}>
      <WrappedBooks />
    </ApolloProvider>
  );
}

export default App;
