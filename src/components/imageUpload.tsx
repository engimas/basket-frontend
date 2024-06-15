import React, { useState, useRef, ChangeEvent } from "react";
import defaultImage from "../assets/upload.svg";

interface ImageUploadProps {
  header: boolean;
  isEditMode: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ header, isEditMode }) => {
  const [image, setImage] = useState<File | null>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imgname = event.target.files[0].name;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxSize = Math.max(img.width, img.height);
          canvas.width = maxSize;
          canvas.height = maxSize;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(
              img,
              (maxSize - img.width) / 2,
              (maxSize - img.height) / 2
            );
            canvas.toBlob(
              (blob) => {
                if (blob) {
                  const file = new File([blob], imgname, {
                    type: "image/png",
                    lastModified: Date.now(),
                  });
                  setImage(file);
                }
              },
              "image/jpeg",
              0.8
            );
          }
        };
      };
    }
  };

  const handleClick = () => {
    if (isEditMode && hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  return (
    <div className="flex justify-center items-center w-64">
      <div className="m-4 w-64">
        <div onClick={handleClick} className="relative">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="upload"
              className={`object-cover ${header ? 'w-full h-80 rounded-lg' : 'w-40 h-40 rounded-full border-4 border-white shadow-inner'}`}
            />
          ) : (
            <img
              src={defaultImage}
              alt="upload"
              className={`object-cover ${header ? 'w-full h-80 rounded-lg border-2 border-dotted border-gray-300' : 'w-40 h-40 rounded-full border-2 border-dotted border-gray-300'}`}
            />
          )}
          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
