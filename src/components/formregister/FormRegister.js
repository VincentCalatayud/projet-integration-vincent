import { Alert, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import {
  isValidEmail,
  isLegalAge,
  isValidFirstName,
  isValidLastName,
  isValidZip,
} from "./script";
import "./FormRegister.css";
function FormRegister() {
  const [open, setOpen] = useState(false);
  const [toaster, setToaster] = useState({ message: "", status: "" });

  const alertStyle = {
    backgroundColor: toaster.status == "success" ? "green" : "#ffcccc",
    width: "100%",
  };

  const [user, setUser] = useState({
    lastName: "",
    firstName: "",
    email: "",
    birth: "",
    city: "",
    zip: "",
  });

  const [formErrorField, setFormErrorField] = useState({
    lastName: "",
    firstName: "",
    email: "",
    birth: "",
    zip: "",
  });

  const handleClose = () => {
    setOpen(false);
  };
  const labelbtn = "Register";

  function isAllFieldNotEmpty() {
    if (
      user.lastName &&
      user.firstName &&
      user.email &&
      user.birth &&
      user.city &&
      user.zip
    ) {
      return false;
    } else {
      return true;
    }
  }

  function saveUserInLocalStorage() {
    if (
      !isValidEmail(user.email) &&
      !isLegalAge(user.birth) &&
      !isValidFirstName(user.firstName) &&
      !isValidLastName(user.lastName) &&
      !isValidZip(user.zip)
    ) {
      window.localStorage.setItem("user", JSON.stringify(user));
      setOpen(true);
      setToaster({ message: "Donnéees enregistrées !", status: "success" });
      allClear();
    } else {
      setOpen(true);
      setToaster({ message: "Erreur sur un des champs !", status: "error" });
      setFormErrorField({
        ...formErrorField,
        lastName: isValidLastName(user.lastName),
        firstName: isValidFirstName(user.firstName),
        email: isValidEmail(user.email),
        birth: isLegalAge(user.birth),
        zip: isValidZip(user.zip),
      });
    }
  }

  function allClear() {
    setUser({
      lastName: "",
      firstName: "",
      email: "",
      birth: "",
      city: "",
      zip: "",
    });

    setFormErrorField({
      lastName: "",
      firstName: "",
      email: "",
      birth: "",
      zip: "",
    });
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "40%",
        paddingLeft: "40%",
        gap: 15,
      }}
    >
      <h1>Formulaire d'inscription</h1>
      <TextField
        required
        className={formErrorField.lastName ? "errorField" : ""}
        inputProps={{ "data-testid": "lastname" }}
        error={formErrorField.lastName ? true : false}
        type="text"
        label="Nom"
        variant="filled"
        helperText={formErrorField.lastName}
        value={user.lastName}
        onChange={(event) => setUser({ ...user, lastName: event.target.value })}
      />
      <TextField
        required
        className={formErrorField.firstName ? "errorField" : ""}
        inputProps={{ "data-testid": "firstname" }}
        error={formErrorField.firstName ? true : false}
        type="text"
        label="Prénom"
        variant="filled"
        helperText={formErrorField.firstName}
        value={user.firstName}
        onChange={(event) =>
          setUser({ ...user, firstName: event.target.value })
        }
      />

      <TextField
        required
        className={formErrorField.email ? "errorField" : ""}
        inputProps={{ "data-testid": "email" }}
        error={formErrorField.email ? true : false}
        type="email"
        label="Email"
        helperText={formErrorField.email}
        variant="filled"
        value={user.email}
        onChange={(event) => setUser({ ...user, email: event.target.value })}
      />
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <h4>Date de naissance</h4>
        <TextField
          required
          className={formErrorField.birth ? "errorField" : ""}
          inputProps={{ "data-testid": "birth" }}
          error={formErrorField.birth ? true : false}
          type="date"
          helperText={formErrorField.birth}
          variant="filled"
          value={user.birth}
          onChange={(event) => setUser({ ...user, birth: event.target.value })}
        />
      </div>
      <TextField
        required
        inputProps={{ "data-testid": "city" }}
        type="text"
        label="Ville"
        variant="filled"
        value={user.city}
        onChange={(event) => setUser({ ...user, city: event.target.value })}
      />
      <TextField
        required
        className={formErrorField.zip ? "errorField" : ""}
        inputProps={{ "data-testid": "zip" }}
        error={formErrorField.zip ? true : false}
        type="text"
        label="Code postal"
        helperText={formErrorField.zip}
        variant="filled"
        value={user.zip}
        onChange={(event) => setUser({ ...user, zip: event.target.value })}
      />
      <button
        type="button"
        disabled={isAllFieldNotEmpty()}
        data-testid="register"
        sx={{ backgroundColor: "gray", color: "white" }}
        onClick={saveUserInLocalStorage}
      >
        {labelbtn}
      </button>
      <Snackbar data-testid="snackbar" open={open} autoHideDuration={300}>
        <Alert
          className={toaster.status}
          data-testid="alert"
          severity={toaster.status}
          onClose={handleClose}
          style={alertStyle}
        >
          {toaster.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default FormRegister;
