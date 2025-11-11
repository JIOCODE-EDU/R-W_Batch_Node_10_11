import FileModels from '../models/file.models.js'

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
      message
    })
    
  }catch(err){

  }
}
