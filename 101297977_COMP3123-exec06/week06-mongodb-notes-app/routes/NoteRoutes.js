const express = require('express');
const Note = require('../models/NotesModel');
const router = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
const createNew = async(req, res) => {
    try{
          // Validate request
    if(!req.body) {
       throw Error("Note content can not be empty");
    }
    //TODO - Write your code here to save the note
    const data = req.body;
    const newNote = await Note.create(data);

    return res
    .status(201)
    .json({
        status: "Success",
        data: newNote
    });

    } catch(e){
        return res.status(400).json({
            message: e.message
        });
    }
};

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
const getAll = async(req, res) => {
    try{
          //TODO - Write your code here to returns all note
  
     const allNotes = await Note.find();

  return res
    .status(201)
    .json({
        status: "Success",
        data: allNotes
  });

  } catch(e){
      return res.status(400).json({
          message: e.message
      });
  }
  
};

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
 //TODO - Write your code here to return onlt one note using noteid
const getNote = async(req, res) => {
    // Validate request
    //TODO - Write your code here to returns all note
try{
        const id = req.params.noteId

        const note = await Note.find();

return res
  .status(201)
  .json({
      status: "Success",
      data: note
});

} catch(e){
    return res.status(400).json({
        message: e.message
    });
}

};

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
const updateNote = async(req, res) => {
    // Validate request
    try{
        // Validate request
  if(!req.body) {
     throw Error("Note content can not be empty");
  }
  //TODO - Write your code here to save the note
  const id = req.params.noteId;
  const data = req.body;
  const newNote = await Note.findByIdAndUpdate(id, data,{
    new: true,
    runValidators: true
  });

  return res
  .status(200)
  .json({
      status: "Success",
      data: `Note ${id} was updated successfuly`
  });

  } catch(e){
      return res.status(400).json({
          message: e.message
      });
  }
};



//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
deleteNote = async (req, res) => {
    // Validate request
    try{
        const id = req.params.noteId

        await Note.findByIdAndDelete(id);
return res
  .status(201)
  .json({
      status: "Success",
      data:     `Note ${id} was deleted successfuly`
});
} catch(e){
    return res.status(400).json({
        message: e.message
    });
}
    //TODO - Write your code here to delete the note using noteid
};
router
    .route('/')
    .get(getAll)
    .post(createNew);
router
    .route('/:noteId')   
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote); 

module.exports = router;