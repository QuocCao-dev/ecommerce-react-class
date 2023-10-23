import { ComponentProps, PropsWithChildren } from "react";
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = ComponentProps<"input"> &
  UseControllerProps<TFieldValues, TName> & { id: string; multiple?: boolean };

const ControlImageInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  children,
  control,
  name,
  id,
  ...props
}: PropsWithChildren<Props<TFieldValues, TName>>) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <label htmlFor={id}>
      <input type="file" id={id} accept="image/*" {...props} {...field} />
      <div className="w-20 h-20 rounded flex items-center justify-center border border-gray-700 cursor-pointer">
        {children}
      </div>
    </label>
  );
};

export default ControlImageInput;
