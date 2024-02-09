import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getError, getLoading } from "redux/selectors";

  export const App = () => {
const isLoading = useSelector(getLoading);
const error = useSelector(getError);

return(
  <Container>
  <ContactForm/>
  <Filter/>
  {isLoading && <p>Loading...</p>}
  {error && <p>Error</p>}
  <ContactList />
  </Container>

)
}