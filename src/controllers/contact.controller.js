// @desc Get all contacts
// @route GET /api/contacts
// @access Public

const getContacts = async (req, res) => {
  return res.status(200).json({ message: "Get all contacts" });
};
// @desc Create a new contact
// @route POST /api/contacts
// @access Public

const createContact = async (req, res) => {
  return res.status(201).json({ message: "Create a new contact" });
};

// @desc Get a specific contact
// @route GET /api/contacts/:id
// @access Public
const getContact = async (req, res) => {
  return res.status(200).json({ message: "Get a single contact" });
};

// @desc Update a specific contact
// @route PUT /api/contacts/:id
// @access Public
const updateContact = async (req, res) => {
  return res.status(200).json({ message: "Updated contact" });
};

// @desc Delete a specific contact
// @route DELETE /api/contacts/:id
// @access Public
const deleteContact = async (req, res) => {
  return res.status(200).json({ message: "Deleted contact" });
};

export { getContacts, createContact, getContact, updateContact, deleteContact };
