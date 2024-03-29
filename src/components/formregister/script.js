/**
 * Calculate a person's age in years.
 *
 * @param {string}  Date in string.
 * @return {number} The age in years of user
 */

export function calculateAge(birth) {
  if (birth == null) {
    throw new Error("missing param birth");
  } else if (!(typeof birth === "string")) {
    throw new Error("it's not a string");
  }

  birth = new Date(birth);
  let dateDiff = new Date(Date.now() - birth.getTime());
  let age = Math.abs(dateDiff.getUTCFullYear() - 1970);
  return age;
}

/**
 * Verify if age > 18.
 *
 * @param {String}  Date in string.
 * @return {string} return empty message if age > 18 else return message error
 */

export function isLegalAge(birth) {
  if (calculateAge(birth) < 18) {
    return "Age non valide. Il faut être majeur pour remplir le formulaire.";
  }

  return "";
}

/**
 * Verify the format of zip.
 *
 * @param {string}  a zip.
 * @return {string} return empty message if zip has correct format else return message error
 */

export function isValidZip(zip) {
  if (zip == null) {
    throw new Error("missing param zip");
  } else if (!(typeof zip === "string")) {
    throw new Error("it's not a string");
  }
  const regexZip = new RegExp("^[0-9]{5}$");
  if (zip.length > 5) {
    return "Code postal est supérieur à 5 caractères. Le code postal doit contenir 5 chiffres.";
  } else if (zip.length < 5) {
    return "Code postal est inférieur à 5 caractères. Le code postal doit contenir 5 chiffres.";
  } else if (!regexZip.test(zip)) {
    return "Code postal invalide. Le code postal doit contenir 5 chiffres.";
  }

  return "";
}

/**
 * Verify the format of lastname.
 *
 * @param {string}  a lastname.
 * @return {string} return empty message if last name has correct format else return message error
 */

export function isValidLastName(lastName) {
  if (lastName == null) {
    throw new Error("missing param lastname");
  } else if (!(typeof lastName === "string")) {
    throw new Error("it's not a string");
  }

  const regexString = /^[\p{L}\s'-]+$/u;
  if (!regexString.test(lastName)) {
    return "Nom invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres.";
  }

  return "";
}

/**
 * Verify the format of firstname.
 *
 * @param {string}  a firstname.
 * @return {string} return empty message if first name has correct format else return message error
 */

export function isValidFirstName(firstName) {
  if (firstName == null) {
    throw new Error("missing param firstname");
  } else if (!(typeof firstName === "string")) {
    throw new Error("it's not a string");
  }

  const regexString = /^[\p{L}\s'-]+$/u;
  if (!regexString.test(firstName)) {
    return "Prénom invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres.";
  }

  return "";
}

/**
 * Verify the format of email.
 *
 * @param {string}  An email.
 * @return {string} return empty message if email has correct format else return message error
 */

export function isValidEmail(email) {
  if (email == null) {
    throw new Error("missing param email");
  } else if (!(typeof email === "string")) {
    throw new Error("it's not a string");
  }

  const regexEmail = new RegExp(
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
  );
  const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const parts = email.split("@");
  const domain = parts[1];

  if (!email.includes("@")) {
    return "Email invalide. Absence '@' dans l'adresse mail.";
  } else if (!domainRegex.test(domain)) {
    return "Email invalide. Le nom de domaine est inexistant.";
  } else if (!regexEmail.test(email)) {
    return "Email invalide. Le nom ne doit pas être composer de caractère spéciaux et de chiffres.";
  }

  return "";
}
