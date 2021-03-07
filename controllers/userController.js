export const join = (req, res) => res.render("Join", { pageTitle: "Join"});
export const login = (req, res) => res.render("Login", { pageTitle: "Login"});
export const logout = (req, res) => res.render("Logout", { pageTitle: "Logout"});
export const usersDetail = (req, res) => res.render("UsersDetail", { pageTitle: "Users Detail"});
export const editProfile = (req, res) => res.render("EditProfile", { pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("ChangePassword", { pageTitle: "Chanage Password"});