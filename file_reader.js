const fs = require("fs").promises;

const charset = "utf-8";

const firstnameFileName = "firstname.txt";
const lastnameFileName = "lastname.txt";
const ageFileName = "age.txt";
const hobbiesFileName = "hobbies.txt";

// THEN-CATCH SOLUTION BELOW THIS LINE
{
  let firstname, lastname, age, hobbies;
  fs.readFile(firstnameFileName, charset)
    .then((data) => {
      firstname = data;
      return fs.readFile(lastnameFileName, charset);
    })
    .then((data) => {
      lastname = data;
      return fs.readFile(ageFileName, charset);
    })
    .then((data) => {
      age = data;
      return fs.readFile(hobbiesFileName, charset);
    })
    .then((data) => {
      hobbies = JSON.parse(data);
      console.log(
        `${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
      );
    })
    .catch((err) => {
      console.error(err);
    });
}

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
const readFiles = async () => {
  try {
    const firstname = await fs.readFile(firstnameFileName, charset);
    const lastname = await fs.readFile(lastnameFileName, charset);
    const age = await fs.readFile(ageFileName, charset);
    const hobbiesData = await fs.readFile(hobbiesFileName, charset);
    const hobbies = JSON.parse(hobbiesData);

    console.log(
      `${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
    );
  } catch (err) {
    console.error(err);
  }
};
readFiles();
