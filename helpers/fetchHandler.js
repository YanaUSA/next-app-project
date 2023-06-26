export async function fetchHandler(url) {
  try {
    const response = await fetch(url);
    return response;
  } catch (err) {
    console.log(err); //this will tell us why it failed.
    return false; //this gives us a condition we can use on the front end
  }
}
