//What are promises?? Important concept for sure

//These are the objects that either return the successfully fetched data or error

const fetchUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("We found the user");
    resolve({ username: "Mayan" });
  }, 2000);
});

//after the above is promise works out
fetchUser
  .then((user) => {
    console.log(user.username);
  })
  .catch((error) => {
    console.log(error);
  });

//Normally you wouldn't make promises like that for usre
const fetchUser2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("We found the user");
      resolve({ username: "Mayan" });
    }, 2000);
  });
};

//Something like above is what you would do basically
