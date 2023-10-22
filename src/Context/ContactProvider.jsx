import { createContext, useContext, useReducer } from "react";

export const ContactContext = createContext(null);
export const ContactDispatchContext = createContext(null);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "Add": {
      return [...state, payload];
    }
    case "Delete": {
      return state.filter((contact) => contact.id !== payload);
    }
    default:
      throw new Error("Unknown Error" + type);
  }
};

function ContactProvider({ children }) {
  const [contact, dispatch] = useReducer(reducer, []);
  return (
    <div>
      <ContactContext.Provider value={contact}>
        <ContactDispatchContext.Provider value={dispatch}>
          {children}
        </ContactDispatchContext.Provider>
      </ContactContext.Provider>
    </div>
  );
}

export default ContactProvider;

export function useContact() {
  return useContext(ContactContext);
}
export function useDispatchContact() {
  return useContext(ContactDispatchContext);
}
