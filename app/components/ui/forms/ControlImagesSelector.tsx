"use client";
import ImageInput from "@/app/ui/ImageInput";
import SelectedImageThumb from "@/app/ui/SelectedImageThumb";
import { PhotoIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ChangeEventHandler, useEffect, useState } from "react";
import { UseFieldArrayProps, useFieldArray, useWatch } from "react-hook-form";

type Props = {
  id: string;
  multiple?: boolean;
} & UseFieldArrayProps;

export default function ControlImagesSelector({
  control,
  id,
  multiple,
  name,
}: Props) {
  const { append, remove } = useFieldArray({
    name,
    control,
  });

  const images = useWatch({
    control,
    name,
  });

  useEffect(() => {
    if (images && images.length > 0) {
      setPreviewImages(
        images.map((img: any) => {
          if (typeof img.url === "string") {
            return img.url;
          } else {
            return convertFileToUrl(img);
          }
        })
      );
    }

    return () => {
      if (images && images.length > 0) {
        images.forEach((img: any) => {
          if (typeof img.url !== "string") {
            URL.revokeObjectURL(img.url);
          }
        });
      }
    };
  }, [images]);

  const convertFileToUrl = (file: File) => {
    return URL.createObjectURL(file);
  };

  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [key, setKey] = useState(Date.now());

  const handleMultipleImages = (files: FileList) => {
    const newImages = Array.from(files).map((item) => item);
    setPreviewImages((prevImages) => [
      ...prevImages,
      ...newImages.map((file) => URL.createObjectURL(file)),
    ]);

    append(newImages);
  };

  const handleSingleImage = (file: File) => {
    setPreviewImages([URL.createObjectURL(file)]);
    append(file);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;
    if (!files) return;

    multiple ? handleMultipleImages(files) : handleSingleImage(files[0]);
    setKey(Date.now());
  };

  const icon = multiple ? (
    <div className="relative">
      <PhotoIcon className="w-8 h-8 bg-white" />
      <PhotoIcon className="w-8 h-8 absolute -top-2 -right-2 -z-10" />
    </div>
  ) : (
    <PhotoIcon className="w-8 h-8" />
  );

  return (
    <div className="flex items-center space-x-4">
      {previewImages?.map((img, index) => {
        return (
          <div key={index} className="relative">
            <SelectedImageThumb src={img} />
            {multiple ? (
              <div
                onClick={() => {
                  remove(index);
                  setPreviewImages((prevImages) => {
                    const newImages = [...prevImages];
                    newImages.splice(index, 1);
                    return newImages;
                  });
                }}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white rounded cursor-pointer"
              >
                <TrashIcon className="w-4 h-4" />
              </div>
            ) : null}
          </div>
        );
      })}

      {multiple && (
        <ImageInput
          id={id}
          onChange={handleChange}
          multiple={multiple}
          key={key}
        >
          {icon}
        </ImageInput>
      )}
      {!multiple &&
        ((previewImages && previewImages.length === 0) || !previewImages) && (
          <ImageInput
            id={id}
            onChange={handleChange}
            multiple={multiple}
            key={key}
          >
            {icon}
          </ImageInput>
        )}
    </div>
  );
}
