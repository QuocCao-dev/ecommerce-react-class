import { Option, Select, Typography } from "@material-tailwind/react";
import { ComponentProps } from "react";
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = Omit<ComponentProps<typeof Select>, "crossOrigin" | "children"> &
  UseControllerProps<TFieldValues, TName> & {
    options: any[];
  };

const ControlSelect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  name,
  options,
  ...props
}: Props<TFieldValues, TName>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className="space-y-1">
      <Select {...field} {...props}>
        {options.map((c) => (
          <Option value={c} key={c}>
            {c}
          </Option>
        ))}
      </Select>
      {!!error && (
        <Typography
          variant="small"
          color="red"
          className="flex items-center gap-1 mt-2 font-normal"
        >
          {error?.message}
        </Typography>
      )}
    </div>
  );
};

export default ControlSelect;
