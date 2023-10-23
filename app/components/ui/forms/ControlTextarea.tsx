import { Textarea, Typography } from "@material-tailwind/react";
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
> = Omit<ComponentProps<typeof Textarea>, "crossOrigin"> &
  UseControllerProps<TFieldValues, TName>;

const ControlTextarea = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  name,
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
      <Textarea {...props} {...field} error={!!error} />
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

export default ControlTextarea;
