import { useState } from "react";
import { useDispatchContact } from "../Context/ContactProvider";

function AddContact() {
  const dispatch = useDispatchContact();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const addNewContact = (e) => {
    e.preventDefault();
    if ((!name, !lastName, !email, !phone)) return null;
    const newContact = {
      id: Date.now(),
      name,
      lastName,
      email,
      phone,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "Add", payload: newContact });

    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={addNewContact}>
          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              className="text-field"
              type="text"
              placeholder="Name"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="text-field"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="text-field"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              className="text-field"
              type="text"
              placeholder="Phone Number "
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
