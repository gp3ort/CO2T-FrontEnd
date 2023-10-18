export default function validarPassword(password) {
    return new Promise((resolve, reject) => {
      const lowercase = /[a-z]/.test(password);
      const uppercase = /[A-Z]/.test(password);
      const number = /\d/.test(password);
      const caracter = /[!@#$%^&*]/.test(password);
  
      const valid = lowercase && uppercase && number && caracter;
  
      if (valid) {
        resolve("The password is valid");
      } else {
        reject("The password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.");
      }
    });
}
  