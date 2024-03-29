// FormRegister.test.js
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FormRegister from "./FormRegister";
import {
  calculateAge,
  isLegalAge,
  isValidEmail,
  isValidFirstName,
  isValidLastName,
  isValidZip,
} from "./script";
let people20years;
beforeEach(() => {
  let date = new Date();
  people20years = {
    birth:
      date.getMonth() + "-" + date.getDate() + "-" + (date.getFullYear() - 20),
  };
});

/**
 * @function calculateAge
 */
describe("calculateAge Unit Test Suites", () => {
  it("should return a correct age", () => {
    expect(calculateAge(people20years.birth)).toEqual(20);
  });

  it("should return a correct age", () => {
    const user = {
      birth: "11-07-1991",
    };

    expect(calculateAge(user.birth)).toEqual(32);
  });

  it('should throw a "missing param birth" error"', () => {
    expect(() => calculateAge()).toThrow("missing param birth");
  });

  it('should throw a "its not string" error', () => {
    const user = {
      birth: 0,
    };

    expect(() => calculateAge(user.birth)).toThrow("it's not a string");
  });
});

/**
 * @function isLegalAge
 */
describe("islegalAge Unit Test Suites", () => {
  it("should return true if the person has more 18", () => {
    const user = {
      birth: "11-07-1991",
    };
    expect(isLegalAge(user.birth)).toEqual("");
  });

  it("should return true if the person has more 18", () => {
    const user = {
      birth: "05-07-2001",
    };

    expect(isLegalAge(user.birth)).toEqual("");
  });

  it("should return true if the person has more 18", () => {
    let date = new Date();
    const user = {
      birth:
        date.getMonth() + "-" + date.getDay() + "-" + (date.getFullYear() - 18),
    };

    expect(isLegalAge(user.birth)).toEqual("");
  });

  it('should throw "Age non valide. Il faut être majeur pour remplir le formulaire."', () => {
    let date = new Date();
    const user = {
      birth: "07-05-2022",
    };

    expect(isLegalAge(user.birth)).toEqual(
      "Age non valide. Il faut être majeur pour remplir le formulaire."
    );
  });
});

/**
 * @function isValidEmail
 */
describe("isValidEmail Unit Test Suites", () => {
  it("should return true email", () => {
    const user = {
      email: "vincent-_-calatayud31@gmail.com",
    };
    expect(isValidEmail(user.email)).toEqual("");
  });

  it('should throw "Email invalide. Absence @ dans ladresse mail."', () => {
    const user = {
      email: "testgmail.com",
    };
    expect(isValidEmail(user.email)).toEqual(
      "Email invalide. Absence '@' dans l'adresse mail."
    );
  });

  it('should throw "Email invalide. Le nom de domaine est inexistant."', () => {
    const user = {
      email: "test@o2.c",
    };
    expect(isValidEmail(user.email)).toEqual(
      "Email invalide. Le nom de domaine est inexistant."
    );
  });

  it('should throw "Email invalide. Le nom de domaine est inexistant."', () => {
    const user = {
      email: "test@gmailc",
    };
    expect(isValidEmail(user.email)).toEqual(
      "Email invalide. Le nom de domaine est inexistant."
    );
  });

  it('should throw "Email invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres."', () => {
    const user = {
      email: "te st@gmail.com",
    };
    expect(isValidEmail(user.email)).toEqual(
      "Email invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres."
    );
  });

  it('should throw "missing param email"', () => {
    expect(() => isValidEmail()).toThrow("missing param email");
  });

  it('should throw "email is not string"', () => {
    const user = {
      email: 0,
    };
    expect(() => isValidEmail(user.email)).toThrow("it's not a string");
  });
});

/**
 * @function isValidLastName
 */
describe("isValidLastName Unit Test Suites", () => {
  it("should return true lastname", () => {
    const user = {
      lastName: "Calatayud",
    };
    expect(isValidLastName(user.lastName)).toEqual("");
  });

  it("should return true lastname", () => {
    const user = {
      lastName: "Jean-pierré",
    };
    expect(isValidLastName(user.lastName)).toEqual("");
  });

  it('should throw "Nom invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres."', () => {
    const user = {
      lastName: "Jhonne123",
    };
    expect(isValidLastName(user.lastName)).toEqual(
      "Nom invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres."
    );
  });

  it('should throw "Nom invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres."', () => {
    const user = {
      lastName: "C&#/",
    };
    expect(isValidLastName(user.lastName)).toEqual(
      "Nom invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres."
    );
  });

  it('should throw "missing param lastname"', () => {
    expect(() => isValidLastName()).toThrow("missing param lastname");
  });

  it('should throw "its not a string"', () => {
    const user = {
      lastName: 0,
    };
    expect(() => isValidLastName(user.lastName)).toThrow("it's not a string");
  });
});

/**
 * @function isValidFirstName
 */
describe("isValidFirstName Unit Test Suites", () => {
  it("should return true firstname", () => {
    const user = {
      firstName: "Vincent",
    };
    expect(isValidFirstName(user.firstName)).toEqual("");
  });

  it("should return true firstname", () => {
    const user = {
      firstName: "Marie-ève",
    };
    expect(isValidFirstName(user.firstName)).toEqual("");
  });

  it('should throw "Prénom invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres."', () => {
    const user = {
      firstName: "Jhonne123",
    };
    expect(isValidFirstName(user.firstName)).toEqual(
      "Prénom invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres."
    );
  });

  it('should throw "Prénom invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres."', () => {
    const user = {
      firstName: "Cyr&l/",
    };
    expect(isValidFirstName(user.firstName)).toEqual(
      "Prénom invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres."
    );
  });

  it('should throw "missing param firstname"', () => {
    expect(() => isValidFirstName()).toThrow("missing param firstname");
  });

  it('should throw "first name is not string"', () => {
    const user = {
      firstName: 0,
    };
    expect(() => isValidFirstName(user.firstName)).toThrow("it's not a string");
  });
});

/**
 * @function isValidZip
 */
describe("isValidZip Unit Test Suites", () => {
  it("should return true zip", () => {
    const user = {
      zip: "06670",
    };
    expect(isValidZip(user.zip)).toEqual("");
  });

  it("should return true zip", () => {
    const user = {
      zip: "06670",
    };
    expect(isValidZip(user.zip)).toEqual("");
  });

  it('should throw "Code postal invalide. Le code postal doit contenir 5 chiffres."', () => {
    const user = {
      zip: "06AZ5",
    };
    expect(isValidZip(user.zip)).toEqual(
      "Code postal invalide. Le code postal doit contenir 5 chiffres."
    );
  });

  it('should throw "Code postal invalide. Le code postal doit contenir 5 chiffres."', () => {
    const user = {
      zip: "AZERT",
    };
    expect(isValidZip(user.zip)).toEqual(
      "Code postal invalide. Le code postal doit contenir 5 chiffres."
    );
  });

  it('should throw "Code postal est supérieur à 5 caractères. Le code postal doit contenir 5 chiffres."', () => {
    const user = {
      zip: "0667075",
    };
    expect(isValidZip(user.zip)).toEqual(
      "Code postal est supérieur à 5 caractères. Le code postal doit contenir 5 chiffres."
    );
  });

  it('should throw "Code postal est inférieur à 5 caractères. Le code postal doit contenir 5 chiffres."', () => {
    const user = {
      zip: "066",
    };
    expect(isValidZip(user.zip)).toEqual(
      "Code postal est inférieur à 5 caractères. Le code postal doit contenir 5 chiffres."
    );
  });

  it('should throw "missing param zip"', () => {
    expect(() => isValidZip()).toThrow("missing param zip");
  });

  it('should throw "zip is not string"', () => {
    const user = {
      zip: 0,
    };
    expect(() => isValidZip(user.zip)).toThrow("it's not a string");
  });
});

describe("tttt", () => {
  beforeEach(() => {
    render(<FormRegister />);
    fireEvent.change(screen.getByTestId("lastname"), {
      target: { value: "Calatayud" },
    });
    fireEvent.change(screen.getByTestId("firstname"), {
      target: { value: "Vincent" },
    });
    fireEvent.change(screen.getByTestId("email"), {
      target: { value: "vincentcalatayud31@gmail.com" },
    });
    fireEvent.change(screen.getByTestId("birth"), {
      target: { value: "2001-05-07" },
    });
    fireEvent.change(screen.getByTestId("city"), {
      target: { value: "Saint-Laurent-du-Var" },
    });
    fireEvent.change(screen.getByTestId("zip"), {
      target: { value: "06700" },
    });
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  test("Formregister button disabled when lastname is empty", () => {
    fireEvent.change(screen.getByTestId("lastname"), { target: { value: "" } });
    const btnRegister = screen.getByTestId("register");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).toBeDisabled();
  });

  test("Formregister button disabled when firstname is empty", () => {
    fireEvent.change(screen.getByTestId("firstname"), {
      target: { value: "" },
    });
    const btnRegister = screen.getByTestId("register");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).toBeDisabled();
  });

  test("Formregister button disabled when email is empty", () => {
    fireEvent.change(screen.getByTestId("email"), { target: { value: "" } });
    const btnRegister = screen.getByTestId("register");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).toBeDisabled();
  });

  test("Formregister button disabled when birth is empty", () => {
    fireEvent.change(screen.getByTestId("birth"), { target: { value: "" } });
    const btnRegister = screen.getByTestId("register");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).toBeDisabled();
  });

  test("Formregister button disabled when city is empty", () => {
    fireEvent.change(screen.getByTestId("city"), { target: { value: "" } });
    const btnRegister = screen.getByTestId("register");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).toBeDisabled();
  });

  test("Formregister button disabled when zip is empty", () => {
    fireEvent.change(screen.getByTestId("zip"), { target: { value: "" } });
    const btnRegister = screen.getByTestId("register");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).toBeDisabled();
  });

  test("Formregister button is not disabled", () => {
    const btnRegister = screen.getByTestId("register");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).not.toBeDisabled();
  });

  test("Formregister click button to register user ans the user is register in locale storage", () => {
    const btnRegister = screen.getByRole("button");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).not.toBeDisabled();
    fireEvent.click(btnRegister);
    expect(window.localStorage.getItem("user")).toEqual(
      JSON.stringify({
        lastName: "Calatayud",
        firstName: "Vincent",
        email: "vincentcalatayud31@gmail.com",
        birth: "2001-05-07",
        city: "Saint-Laurent-du-Var",
        zip: "06700",
      })
    );
  });

  afterEach;

  test("Formregister click button to register user but user is not register", () => {
    fireEvent.change(screen.getByTestId("lastname"), {
      target: { value: "Vincent&1" },
    });
    const btnRegister = screen.getByRole("button");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).not.toBeDisabled();
    fireEvent.click(btnRegister);
    expect(window.localStorage.getItem("user")).toBeNull();
  });

  test("Formregister click button to register user but user is not register", () => {
    fireEvent.change(screen.getByTestId("firstname"), {
      target: { value: "Cala&1" },
    });
    const btnRegister = screen.getByRole("button");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).not.toBeDisabled();
    fireEvent.click(btnRegister);
    expect(window.localStorage.getItem("user")).toBeNull();
  });

  test("Formregister click button to register user but user is not register", () => {
    fireEvent.change(screen.getByTestId("email"), {
      target: { value: "testgmail.com" },
    });
    const btnRegister = screen.getByRole("button");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).not.toBeDisabled();
    fireEvent.click(btnRegister);
    expect(window.localStorage.getItem("user")).toBeNull();
  });

  test("Formregister click button to register user but user is not register", () => {
    fireEvent.change(screen.getByTestId("birth"), {
      target: { value: "2022-05-07" },
    });
    const btnRegister = screen.getByRole("button");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).not.toBeDisabled();
    fireEvent.click(btnRegister);
    expect(window.localStorage.getItem("user")).toBeNull();
  });

  test("Formregister click button to register user but user is not register", () => {
    fireEvent.change(screen.getByTestId("zip"), { target: { value: "058A0" } });
    const btnRegister = screen.getByRole("button");
    expect(btnRegister).toBeInTheDocument();
    expect(btnRegister).not.toBeDisabled();
    fireEvent.click(btnRegister);
    expect(window.localStorage.getItem("user")).toBeNull();
  });

  test("Formregister verify message success for toaster", () => {
    const btnRegister = screen.getByRole("button");
    fireEvent.click(btnRegister);
    const snackbar = screen.getByTestId("snackbar");
    const alert = screen.getByTestId("alert");
    expect(snackbar).toBeInTheDocument();
    expect(alert).toHaveTextContent("Donnéees enregistrées !");
    expect(alert).toHaveClass("success");
    expect(alert).toHaveStyle({ backgroundColor: "green" });
  });

  test("Formregister verify message error for toaster", () => {
    fireEvent.change(screen.getByTestId("zip"), { target: { value: "058A0" } });
    const btnRegister = screen.getByRole("button");
    fireEvent.click(btnRegister);
    const snackbar = screen.getByTestId("snackbar");
    const alert = screen.getByTestId("alert");
    expect(snackbar).toBeInTheDocument();
    expect(alert).toHaveTextContent("Erreur sur un des champs !");
    expect(alert).toHaveClass("error");
    expect(alert).toHaveStyle({ backgroundColor: "#ffcccc" });
  });

  test("Formregister if just form all clear", () => {
    const btnRegister = screen.getByRole("button");
    fireEvent.click(btnRegister);
    const lastname = screen.getByTestId("lastname");
    const firstname = screen.getByTestId("firstname");
    const email = screen.getByTestId("email");
    const birth = screen.getByTestId("birth");
    const city = screen.getByTestId("city");
    const zip = screen.getByTestId("zip");
    expect(lastname).toHaveTextContent("");
    expect(firstname).toHaveTextContent("");
    expect(email).toHaveTextContent("");
    expect(birth).toHaveTextContent("");
    expect(city).toHaveTextContent("");
    expect(zip).toHaveTextContent("");
  });

  test("Formregister verify if message error in helpertext of input lastname", () => {
    const btnRegister = screen.getByRole("button");
    const lastnameInput = screen.getByTestId("lastname");
    fireEvent.change(lastnameInput, {
      target: { value: "Calatayud&1" },
    });
    fireEvent.click(btnRegister);
    const helperTextLastname =
      "Nom invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres.";
    expect(screen.getByText(helperTextLastname)).toBeInTheDocument();
    // expect(lastnameInput).toHaveClass("errorField");
  });

  test("Formregister verify if message error in helpertext of input firstname", () => {
    const btnRegister = screen.getByRole("button");
    const firstnameInput = screen.getByTestId("firstname");
    fireEvent.change(firstnameInput, {
      target: { value: "Vincent&1" },
    });
    fireEvent.click(btnRegister);
    const helperTextFirstname =
      "Prénom invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres.";
    expect(screen.getByText(helperTextFirstname)).toBeInTheDocument();
    // expect(firstnameInput).toHaveClass("errorField");
  });

  test("Formregister verify if message error in helpertext of input email", () => {
    const btnRegister = screen.getByRole("button");
    const emailInput = screen.getByTestId("email");
    fireEvent.change(emailInput, {
      target: { value: "testgmail.com" },
    });
    fireEvent.click(btnRegister);
    const helperTextEmail = "Email invalide. Absence '@' dans l'adresse mail.";
    expect(screen.getByText(helperTextEmail)).toBeInTheDocument();
    // expect(emailInput).toHaveClass("errorField");
  });

  test("Formregister verify if message error in helpertext of input birth", () => {
    const btnRegister = screen.getByRole("button");
    const birthInput = screen.getByTestId("birth");
    fireEvent.change(birthInput, {
      target: { value: "2022-05-07" },
    });
    fireEvent.click(btnRegister);
    const helperTextBirth =
      "Age non valide. Il faut être majeur pour remplir le formulaire.";
    expect(screen.getByText(helperTextBirth)).toBeInTheDocument();
    // expect(birthInput).toHaveClass("errorField");
  });

  test("Formregister verify if message error in helpertext of input zip", () => {
    const btnRegister = screen.getByRole("button");
    const zipInput = screen.getByTestId("zip");
    fireEvent.change(zipInput, {
      target: { value: "056A8" },
    });
    fireEvent.click(btnRegister);
    const helperTextZip =
      "Code postal invalide. Le code postal doit contenir 5 chiffres.";
    expect(screen.getByText(helperTextZip)).toBeInTheDocument();
    // expect(zipInput).toHaveClass("errorField");
  });

  test("Formregister verify if the fonction 'handleclose' is functionnal", async () => {
    const btnRegister = screen.getByRole("button");
    fireEvent.click(btnRegister);
    const snackbar = screen.getByTestId("snackbar");
    const alert = screen.getByTestId("alert");
    expect(snackbar).toBeInTheDocument();
    expect(alert).toBeInTheDocument();
    const closeButton = screen.getByLabelText("Close");
    fireEvent.click(closeButton);
    await (() => {
      expect(snackbar).not.toBeInTheDocument();
      expect(alert).not.toBeInTheDocument();
    });
  });
});
