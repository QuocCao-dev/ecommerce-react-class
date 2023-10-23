"use client";
import categories from "@/app/utils/categories";
import { Button } from "@material-tailwind/react";
import { use, useEffect, useTransition } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ControlBulletPoints from "./ui/forms/ControlBulletPoints";
import ControlImagesSelector from "./ui/forms/ControlImagesSelector";
import ControlInput from "./ui/forms/ControlInput";
import ControlSelect from "./ui/forms/ControlSelect";
import ControlTextarea from "./ui/forms/ControlTextarea";

interface Props {
  initialValue?: InitialValue;
  onSubmit(values: any): void;
}

export interface InitialValue {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  bulletPoints: string[];
  price: number;
  sale: number;
  category: string;
  quantity: number;
}

const defaultValue = {
  title: "",
  description: "",
  price: 0,
  sale: 0,
  category: "",
  quantity: 0,
};

export default function ProductForm(props: Props) {
  const { onSubmit, initialValue } = props;
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    defaultValues: {
      ...defaultValue,
      bulletPoints: [{ value: "" }, { value: "" }],
      images: [],
    },
  });
  const { handleSubmit } = form;

  useEffect(() => {
    if (initialValue) {
      form.reset({
        ...initialValue,
        bulletPoints: initialValue?.bulletPoints.map((value) => ({ value })),
      });
    }
  }, [initialValue]);

  const getBtnTitle = () => {
    return isPending ? "Creating" : "Create";
  };

  return (
    <FormProvider {...form}>
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="mb-2 text-xl">Add new product</h1>

        <form
          className="space-y-6"
          onSubmit={handleSubmit((values) => console.log(values))}
        >
          <div className="space-y-4">
            <h3>Poster</h3>
            <ControlImagesSelector
              id="thumb"
              name="thumbnail"
              multiple={false}
            />
            <h3>Images</h3>
            <ControlImagesSelector name="images" id="images" multiple />
          </div>
          <ControlInput name="title" label="Title" />
          <ControlTextarea
            name="description"
            className="h-52"
            label="Description"
          />
          <ControlSelect
            name="category"
            label="Select Category"
            options={categories}
          />
          <div className="flex space-x-4">
            <div className="space-y-4 flex-1">
              <h3>Price</h3>
              <ControlInput name="price" label="Price" className="mb-4" />
              <ControlInput name="sale" label="Sale Price" className="mb-4" />
            </div>

            <div className="space-y-4 flex-1">
              <h3>Stock</h3>
              <ControlInput name="quantity" label="Quantity" className="mb-4" />
            </div>
          </div>

          <div className="space-y-4">
            <h3>Bullet points</h3>
            <ControlBulletPoints name="bulletPoints" label="Bullet point" />
          </div>

          <Button disabled={isPending} type="submit">
            {getBtnTitle()}
          </Button>
        </form>
      </div>
    </FormProvider>
  );
}
