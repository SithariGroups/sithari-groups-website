const addGalleryImage = (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    
    // File uploaded successfully
    return res.status(200).json({
      message: 'File uploaded successfully',
      file: req.file,  // Send file details as response
    });
  };
  
  module.exports = { addGalleryImage };
  