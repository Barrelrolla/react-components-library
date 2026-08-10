import { ComponentProps, CSSProperties, useId, useState } from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteTrigger,
} from "../Autocomplete";
import { getSelectClasses } from "../Select/getSelectClasses";
import { Button, useButtonGroupContext } from "../Button";
import { Badge } from "../Badge";
import { CaretDownIcon, XIcon } from "@/icons";

export type ComboboxProps = {
  color?: ColorType;
  items: string[];
  multiple: boolean;
  label: string;
  error: string;
  initialSelectedIndex?: number | undefined;
  initialSelectedIndices?: number[];
  onSelectedIndexChange?: (index: number | undefined) => void;
  labelClassName?: string;
  errorClassName?: string;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
} & Omit<ComponentProps<"input">, "children">;

export function Combobox({
  color = "main",
  items,
  multiple = false,
  id,
  label,
  disabled,
  error,
  initialSelectedIndex,
  initialSelectedIndices,
  onSelectedIndexChange,
  className,
  labelClassName,
  errorClassName,
  wrapperClassName,
  wrapperStyle,
  ...rest
}: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    initialSelectedIndex,
  );
  const [selectedIndices, setSelectedIndices] = useState<number[]>(
    initialSelectedIndices || [],
  );
  const [query, setQuery] = useState("");
  const group = useButtonGroupContext();

  const {
    classes,
    labelClasses,
    errorClasses,
    caretClasses,
    wrapperClasses,
    resolvedColor,
  } = getSelectClasses({
    color: error ? "error" : color,
    isOpen,
    isMounted,
    className,
    labelClassName,
    errorClassName,
    wrapperClassName,
    group,
  });

  const generatedId = useId();
  const resolvedId = id ?? generatedId;

  function setSelected(index: number | undefined) {
    if (multiple && index) {
      const found = selectedIndices.indexOf(index);
      let newIndices = [];
      if (found >= 0) {
        newIndices = selectedIndices.filter((i) => i !== index);
      } else {
        newIndices = [...selectedIndices, index];
      }
      setSelectedIndices(newIndices);
    } else {
      setSelectedIndex(index);
      setIsOpen(false);
    }

    if (onSelectedIndexChange) {
      onSelectedIndexChange(index);
    }
  }

  function clear() {
    setSelectedIndex(undefined);
    setSelectedIndices([]);
    setIsOpen(false);

    if (onSelectedIndexChange) {
      onSelectedIndexChange(undefined);
    }
  }

  return (
    <Autocomplete
      query={query}
      onSelectItem={(item) => {
        setQuery(item);
        setIsOpen(false);
      }}
      items={items}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onMountedChange={setIsMounted}
    >
      <AutocompleteTrigger>
        <div
          className={wrapperClasses}
          style={{ ...cssColorProps(resolvedColor), ...wrapperStyle }}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        >
          <label htmlFor={resolvedId} className={labelClasses}>
            {label}
          </label>
          <div className="has-disabled:cursor-not-allowed">
            <div
              id={resolvedId}
              data-error={error ? true : undefined}
              aria-describedby={
                resolvedId && error ? `${resolvedId}-error` : undefined
              }
              aria-label={
                rest["aria-label"]
                  ? rest["aria-label"]
                  : label
                    ? label
                    : "Select"
              }
              className={classes}
              {...rest}
            >
              {multiple &&
                selectedIndices.map((index) => (
                  <Badge
                    className="m-[3px] flex cursor-auto items-center gap-0.5 pr-0 pl-2 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {
                      <>
                        <span>{items[index]}</span>
                        <Button
                          useGropup={false}
                          variant="ghost"
                          radius="pill"
                          size="xs"
                          className="p-0"
                          startIcon={<XIcon className="size-3.5" />}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelected(index);
                          }}
                        />
                      </>
                    }
                  </Badge>
                ))}
              <div className="flex w-max flex-1 items-center justify-between">
                <input
                  aria-hidden={true}
                  disabled={disabled}
                  className="line-clamp-1 cursor-pointer px-3 py-1.5 text-left focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                  value={query}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value && value.length > 0) {
                      setIsOpen(true);
                    } else {
                      setIsOpen(false);
                    }
                    setQuery(value);
                  }}
                />
                <div className="flex items-center">
                  {(selectedIndex !== undefined ||
                    selectedIndices.length > 0) && (
                    <Button
                      useGropup={false}
                      radius="pill"
                      size="sm"
                      variant="ghost"
                      color={isFocused || isMounted ? resolvedColor : "main"}
                      className="flex cursor-pointer items-center overflow-clip p-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        clear();
                      }}
                    >
                      {<XIcon className={"mr-1 inline size-4"} />}
                    </Button>
                  )}
                  <CaretDownIcon className={caretClasses} />
                </div>
              </div>
            </div>
            {error && (
              <p id={`${resolvedId}-error`} className={errorClasses}>
                {error}
              </p>
            )}
          </div>
        </div>
      </AutocompleteTrigger>
      <AutocompleteContent />
    </Autocomplete>
  );
}
