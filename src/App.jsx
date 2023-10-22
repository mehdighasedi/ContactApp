import "./App.css";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ListContact from "./Components/ListContact";
import ContactProvider, { useContact } from "./Context/ContactProvider";

function App() {
  return (
    <div>
      <ContactProvider>
        <Header />
        <AddContact />
        <ListContact />
      </ContactProvider>
    </div>
  );
}

export default App;
