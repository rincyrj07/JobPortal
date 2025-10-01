import multer from "multer";

const storage = multer.memoryStorage();
export const singleUpload = multer({storage}).single("file");

// import multer from 'multer'

// const storage = multer.diskStorage({
//     filename: function (req, file, cb) {
     
//         // console.log(file,"===============file");
//       cb(null, file.originalname )
//     }
//   })
  
//  export const upload = multer({ storage: storage })