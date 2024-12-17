import DataUriParser from "datauri/parser.js";

import path from "path";

 const getDataUri = (file) => {
 const parser = new DataUriParser();
 const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
}

// const getDataUri = (file) => {
//     const extName = path.extname(file.originalname); // Error here
//     const buffer = file.buffer;
//     return `data:image/${extName};base64,${buffer.toString('base64')}`;
// };

export default getDataUri