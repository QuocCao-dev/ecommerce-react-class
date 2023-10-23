import { UseFieldArrayProps, useFieldArray } from "react-hook-form";
import ControlInput from "./ControlInput";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ComponentProps } from "react";

type Props = UseFieldArrayProps & ComponentProps<typeof ControlInput>;

const ControlBulletPoints = ({ name, control, label }: Props) => {
  const { fields, remove, append } = useFieldArray({ name, control });

  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center">
          <ControlInput
            control={control}
            name={`${name}.${index}.value`}
            label={`${label} ${index + 1}`}
            className="mb-4"
          />
          {fields.length > 1 ? (
            <button
              onClick={() => remove(index)}
              type="button"
              className="ml-2"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          ) : null}
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ value: "" })}
        className="flex items-center space-x-1 text-gray-800 ml-auto"
      >
        <PlusIcon className="w-4 h-4" />
        <span>Add more</span>
      </button>
    </>
  );
};
export default ControlBulletPoints;
