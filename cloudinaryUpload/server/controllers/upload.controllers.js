import FileModels from '../models/file.models.js'

// cloudinary upload function

const uploadFile = async (req  ,res) => {
  try{
    if(!req.file){
      return res.status(400).json({message:"No File Uploaded!!!"})
    }

    console.log("File" , req.file);

    const fileDoc = await FileModels.create({
      originalName:req.file.originalName,
      url:req.file.path,
      public_id:req.file.filename,
      format:req.file.format || req.file.mimetype,
      size:req.file.size
    })

    res.json({
      message:"File Uploaded Successfully!",
      file:{
        id:fileDoc._id,
        originalName:fileDoc.originalName,
        url:fileDoc.url,
        public_id:fileDoc.public_id,
        format:fileDoc.format,
        size:fileDoc.size
      }
    })
    
  }catch(err){
    console.error('upload Error' , err);
    res.status(500).json({message:'Server error' , error:err.message})
  }
}

export  default uploadFile
