import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { findById, updatePerson } from "../../services/personService";
import { updateAddress } from "../../services/addressService";
import { updateInmate } from "../../services/inmateService";
import { AddressTab } from "../tabs/AddressTab";
import { PersonSidebar } from "./personSidebar";
import { Tabs } from "../tabs/Tabs";
import { PersonTab } from "../tabs/PersonTab";
import { validatePerson } from "../../validations/personValidation";
import { validateAddress } from "../../validations/addressValidation";
import { validateInmate } from "../../validations/inmateValidation";
import { requestWithToast } from '../../exceptions/toast';
import { InmateTab } from "../tabs/InmateTab";
import MugshotsViewer from "../pictures/Mugshots";
import AddressForm from "../address/AddressForm";
import { addAddress } from "../../services/addressService";

function PersonProfile() {

  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [tab, setTab] = useState("person");
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(null);
  const [editingType, setEditingType] = useState(null);
  const [errors, setErrors] = useState({});

  const [addingAddress, setAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    street: "",
    addressComplement: "",
    city: "",
    state: "",
    country: "",
  });

  const tags = ["person", "address", "inmate", "history", "pictures"];

  useEffect(() => {
    findById(id).then(data => {
      setPerson(data)
      setFormData(data)
    }
    );
  }, [id]);

  console.log(person);

  useEffect(() => {
    setEditing(false);
    setEditingType(null);
  }, [tab]);

  const isChanged =
    JSON.stringify(formData) !== JSON.stringify(person);

  const wasInmate =
    person?.commitedCrime ||
    person?.arrestDate ||
    person?.sentencedYears;

  function onPersonUpdate() {
    findById(id).then(data => {
      setPerson(data);
      setFormData(data);
    });
  }

  async function handleSave() {

    if (tab === "person") {
      const validationErrors = validatePerson(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      try {
        const updated = await requestWithToast(
          updatePerson(person.id, formData),
          "Person updated sucessfuly"
        );
        setEditing(false);
        setEditingType(null);
        setPerson(updated);
        setFormData(updated);
        setErrors({});
      } catch {
        // toast já exibido pelo requestWithToast
      }
    }

    if (tab === "address") {
      const errorsArray = [];
      formData.addresses.forEach((address, index) => {
        const validation = validateAddress(address);
        if (Object.keys(validation).length > 0) {
          errorsArray[index] = validation;
        }
      });

      if (errorsArray.some(e => e)) {
        setErrors(errorsArray);
        return;
      }

      try {
        await requestWithToast(
          Promise.all(
            formData.addresses.map(address =>
              updateAddress(address.id, address)
            )
          ),
          "Address edited successfully"
        );
        const updated = await findById(person.id);
        setEditing(false);
        setPerson(updated);
        setFormData(updated);
        setErrors([]);
      } catch {
        // toast já exibido pelo requestWithToast
      }
    }

    if (tab === "inmate") {
      const validationErrors = validateInmate(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      try {
        const updated = await requestWithToast(
          updateInmate(person.id, formData),
          "Inmate updated sucessfuly"
        );
        setEditing(false);
        setEditingType(null);
        setPerson(updated);
        setFormData(updated);
        setErrors({});
      } catch {
        // toast já exibido pelo requestWithToast
      }
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
      [fieldName]: value
    };

    const updatedForm = {
      ...formData,
      addresses: updatedAddresses
    };
    setFormData(updatedForm);
  }

  async function handleAddAddress() {
    const validationErrors = validateAddress(newAddress);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await requestWithToast(
        addAddress(person.id, newAddress),
        "Address added successfully"
      );
      const updated = await findById(person.id);
      setPerson(updated);
      setFormData(updated);
      setAddingAddress(false);
      setNewAddress({ street: "", addressComplement: "", city: "", state: "", country: "" });
      setErrors({});
    } catch { }
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
            isChanged={isChanged}
            onPersonUpdate={onPersonUpdate} // 👈
          />
        </div>

        <div className="col-md-9">

          <Tabs tab={tab} setTab={setTab} wasInmate={wasInmate} tags={tags} />

          {tab === "person" && (
            <PersonTab
              person={person}
              formData={formData}
              editing={editing}
              onChange={handleChange}
              errors={errors}
            />
          )}

          {tab === "address" && (
            <>
              <div className="d-flex justify-content-end mb-2">
                {!addingAddress && (
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => setAddingAddress(true)}
                  >
                    <i className="bi bi-plus-circle me-1"></i> Add Address
                  </button>
                )}
              </div>

              {addingAddress ? (
                <>
                  <AddressForm
                    attributes={newAddress}
                    onChange={(e) => setNewAddress({ ...newAddress, [e.target.name]: e.target.value })}
                    errors={errors}
                  />
                  <div className="d-flex gap-2 mt-2 mb-2">
                    <button className="btn btn-primary btn-sm" onClick={handleAddAddress}>
                      Save
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => {
                        setAddingAddress(false);
                        setErrors({});
                        setNewAddress({ street: "", addressComplement: "", city: "", state: "", country: "" });

                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <AddressTab
                  person={person}
                  formData={formData}
                  editing={editing}
                  onAddressChange={handleAddressChange}
                  errors={errors}
                />
              )}
            </>
          )}

          {tab === "inmate" && (
            <InmateTab
              person={person}
              formData={formData}
              editing={editing}
              onChange={handleChange}
              errors={errors}
            />
          )}

          {tab === "pictures" && (
            <MugshotsViewer
              person={person}
              onPersonUpdate={onPersonUpdate}
            />
          )}


        </div>

      </div>

    </div>
  );
}
export default PersonProfile;