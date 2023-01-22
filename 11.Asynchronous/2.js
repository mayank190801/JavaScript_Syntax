//Data fetching -- Asynchornous action for sure

//The concept of callback functions is explained in this lecture
const fetchUser = (username, callback) => {
  console.log("Fetching");
  setTimeout(() => {
    callback({ username });
  }, 2000);
};

fetchUser("Mayank", (user) => {
  console.log(user.username);
});

//So this doesn't scale very well, the concept of callback functions for sure
//Callback hell (the infamous shit)
