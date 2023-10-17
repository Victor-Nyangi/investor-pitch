const user  = JSON.parse(localStorage.getItem("user"))
const user_id = user?._id;
const token = user?.token;

export { user_id, token }
