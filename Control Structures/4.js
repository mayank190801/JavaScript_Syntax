//break and continue are there
//return is also there

//You know what they does for sure, so skip this section bruh

//now figuring out error handling for sure

function doesSometing() {
  throw { message: "Doesn't do this bruhl" };
}

//so above function throws erros in js
//way of using try and catch in js

try {
  doesSometing();
} catch (error) {
  console.log(error);
} finally {
  //will always happen no matter you had error or not
  console.log("Heyyy finally bruhhhh");
}
