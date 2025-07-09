import Password from "../models/password.model.js";

// Add a new password entry
export const addPassword = async (req, res) => {
  try {
    const { site, username, password } = req.body;
    const user = req.user.id;
    const newPassword = new Password({ user, site, username, password });
    await newPassword.save();
    res.status(201).json(newPassword);
  } catch (err) {
    res.status(500).json({ error: "Failed to add password" });
  }
};

// Get all password entries for the authenticated user
export const getPasswords = async (req, res) => {
  try {
    const passwords = await Password.find({ user: req.user.id });
    res.json(passwords);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch passwords" });
  }
};

// Edit a password entry
export const editPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { site, username, password } = req.body;
    const updated = await Password.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { site, username, password },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Password entry not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update password" });
  }
};

// Delete a password entry
export const deletePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Password.findOneAndDelete({ _id: id, user: req.user.id });
    if (!deleted) return res.status(404).json({ error: "Password entry not found" });
    res.json({ message: "Password deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete password" });
  }
}; 