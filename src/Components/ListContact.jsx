import { TrashIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { useContact, useDispatchContact } from "../Context/ContactProvider";
function ListContact() {
  const contact = useContact();
  return (
    <>
      <h2>Contact-List</h2>
      <div className="my-contact">
        {!contact.length ? (
          <p style={{ color: "#060699", fontWeight: "600" }}>
            There is No Contact Yet
          </p>
        ) : (
          contact.map((c) => <ContactInfo key={c.id} contact={c} />)
        )}
      </div>
    </>
  );
}

export default ListContact;

function ContactInfo({ contact }) {
  const dispatch = useDispatchContact();
  return (
    <div className="contact__list">
      <div className="name-container">
        <h3 className="name">{contact.name}</h3>
        <h3 className="name">{contact.lastName}</h3>
      </div>
      <div className="email">
        <span className="icon blue">
          <EnvelopeIcon />
        </span>
        <h3>{contact.email}</h3>
      </div>
      <div className="phone-num">
        <span className="icon blue">
          <PhoneIcon />
        </span>
        <h3>{contact.phone}</h3>
      </div>
      <span onClick={() => dispatch({ type: "Delete", payload: contact.id })}>
        <TrashIcon
          className="icon blue"
          style={{ marginRight: "1rem", marginTop: "3px" }}
        />
      </span>
    </div>
  );
}
