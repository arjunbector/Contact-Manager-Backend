// @desc Get all contacts
// @route GET /api/contacts
// @access Public

import mongoose from "mongoose";
import { Contact } from "../models/contact.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/apiError.js";

const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  return res
    .status(200)
    .json(new ApiResponse(200, "Fetched all contacts successfully.", contacts));
};
// @desc Create a new contact
// @route POST /api/contacts
// @access Public

const createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      throw new ApiError(400, "Please provide name, email and phone");
    }
    const existingContact = await Contact.findOne({ email: email });
    if (existingContact) {
      throw new ApiError(400, "Contact already exists");
    }
    const contact = await Contact.create({
      name: name,
      email: email,
      phone: phone,
    });
    return res
      .status(201)
      .json(new ApiResponse(201, "Contact created successfully", contact));
  } catch (err) {
    return res
      .status(err.statusCode || 500)
      .json(new ApiResponse(err.statusCode || 500, err.message, null));
  }
};

// @desc Get a specific contact
// @route GET /api/contacts/:id
// @access Public
const getContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(contactId)) {
      throw new ApiError(400, "No contact found.");
    }
    const contact = await Contact.findById(contactId);
    if (!contact) {
      throw new ApiError(404, "Contact not found");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, "Fetched Contact Successfully", contact));
  } catch (err) {
    console.log(err);
    return res
      .status(err.statusCode || 500)
      .json(new ApiResponse(err.statusCode || 500, err.message, null));
  }
};

// @desc Update a specific contact
// @route PUT /api/contacts/:id
// @access Public
const updateContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(contactId)) {
      throw new ApiError(400, "No contact found.");
    }
    const contact = await Contact.findById(contactId);
    if (!contact) {
      throw new ApiError(404, "Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    return res
      .status(200)
      .json(
        new ApiResponse(200, "Contact updated successfully", updatedContact)
      );
  } catch (err) {
    console.log(err);
    return res
      .status(err.statusCode || 500)
      .json(new ApiResponse(err.statusCode || 500, err.message, null));
  }
};

// @desc Delete a specific contact
// @route DELETE /api/contacts/:id
// @access Public
const deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(contactId)) {
      throw new ApiError(400, "No contact found.");
    }
    const contact = await Contact.findById(contactId);
    if (!contact) {
      throw new ApiError(404, "Contact not found");
    }
    const deletedContact = await Contact.findByIdAndDelete(contactId);
    return res.status(200).json(new ApiResponse(200, "Contact deleted", deletedContact));
  } catch (err) {
    console.log(err);
    return res
      .status(err.statusCode || 500)
      .json(new ApiResponse(err.statusCode || 500, err.message, null));
  }
};

export { getContacts, createContact, getContact, updateContact, deleteContact };
