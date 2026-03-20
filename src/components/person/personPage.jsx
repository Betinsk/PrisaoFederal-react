import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { findById, updatePerson } from "../../services/personService";
import { updateAddress } from "../../services/addressService";
import { AddressTab } from "../tabs/AddressTab";
import { PersonSidebar } from "./personSidebar";
import { Tabs } from "./personTabs";
import { PersonTab } from "../tabs/PersonTab";
import { validatePerson } from "../../validations/personValidation";

function PersonProfile() {

  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [tab, setTab] = useState("person");
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(null);
  const [editingType, setEditingType] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    findById(id).then(data => {
      setPerson(data)
      setFormData(data)
    }
    );
  }, [id]);

  useEffect(() => {
    setEditing(false);
    setEditingType(null);
  }, [tab]);

  async function handleSave() {

    if (tab === "person") {

       const validationErrors = {
             ...validatePerson(formData),
            }
              if(Object.keys(validationErrors).length > 0){
                setErrors(validationErrors);
                return;
              }
      const updated = await updatePerson(person.id, formData);

      setEditing(false);
      setEditingType(null);
      setPerson(updated);
      setFormData(updated);
      setErrors({});
    }


    if (tab === "address") {

      for (const address of formData.addresses) {
        await updateAddress(address.id, address);
      }

      const updated = await findById(person.id);

      setEditing(false);
      setPerson(updated);
      setFormData(updated);
    }
  }

  function handleChange(e) {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
}

  function handleCancel() {
    setEditing(false);
    setEditingType(null);
    setFormData(JSON.parse(JSON.stringify(person)));
  }

  function handleAddressChange(e, index) {
    const { name: fieldName, value } = e.target;
    const updatedAddresses = [...formData.addresses];
    updatedAddresses[index] = {
      ...updatedAddresses[index],
      [fieldName]: value // 👈 DINÂMICO
    };

    setFormData({
      ...formData,
      addresses: updatedAddresses
    });
  }

  if (!person) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">

      <div className="row">

        <div className="col-md-3">
          <PersonSidebar
            person={person}
            editing={editing}
            onEdit={() => setEditing(true)}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </div>

        <div className="col-md-9">

          <Tabs tab={tab} setTab={setTab} />

          {tab === "person" && (
            <PersonTab
              person={person}
              formData={formData}
              editing={editing}
              onChange={handleChange}
              errors = {errors}
            />
          )}

          {tab === "address" && (
            <AddressTab
              formData={formData}
              editing={editing}
              onAddressChange={handleAddressChange}
            />
          )}

        </div>

      </div>

    </div>
  );
}
export default PersonProfile;