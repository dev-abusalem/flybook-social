import {
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
import { OurFileRouter } from "../(server)/api/uploadthing/core";
   
    
  export const UploadButton = generateUploadButton<OurFileRouter>();
  export const UploadDropzone = generateUploadDropzone<OurFileRouter>();