import {
  ComponentProps,
  CSSProperties,
  KeyboardEvent,
  useId,
  useState,
} from "react";
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
import { useIsMobile } from "@/hooks";

export type ComboboxProps = {
  color?: ColorType;
  items: string[];
  multiple?: boolean;
  label?: string;
  placeholder?: string;
  error?: string;
  allowFreeText?: boolean;
  initialSelectedIndex?: number | undefined;
  initialSelectedIndices?: number[];
  onSelectedIndexChange?: (index: number | undefined) => void;
  labelClassName?: string;
  errorClassName?: string;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
} & Omit<ComponentProps<"input">, "children">;

export function Combobox({
  color = "primary",
  items,
  multiple = false,
  id,
  label,
  placeholder = "Search",
  disabled,
  error,
  allowFreeText = false,
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
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    initialSelectedIndex,
  );
  const [selectedIndices, setSelectedIndices] = useState<number[]>(
    initialSelectedIndices || [],
  );
  const [query, setQuery] = useState("");
  const group = useButtonGroupContext();
  const isMobile = useIsMobile();

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
    className,
    labelClassName,
    errorClassName,
    wrapperClassName,
    group,
  });

  const generatedId = useId();
  const resolvedId = id ?? generatedId;
  const ariaLabel = rest["aria-label"] || label || undefined;
  const ariaLabeledBy = rest["aria-labelledby"];
  if (!ariaLabel && !ariaLabeledBy) {
    console.warn(
      "Please provide an aria label or labeledby for combobox without a label.",
    );
  }

  function setSelectedFromItem(item: string) {
    const index = items.indexOf(item);
    setSelected(index);
  }

  function setSelected(index: number | undefined) {
    if (multiple && index !== undefined) {
      const found = selectedIndices.indexOf(index);
      let newIndices = [];
      if (found >= 0) {
        newIndices = selectedIndices.filter((i) => i !== index);
      } else {
        newIndices = [...selectedIndices, index];
      }
      setSelectedIndices(newIndices);
      setQuery("");
    } else {
      setSelectedIndex(index);
      if (index !== undefined) {
        setQuery(items[index]);
        setIsOpen(false);
      } else {
        setQuery("");
      }
    }

    if (onSelectedIndexChange) {
      onSelectedIndexChange(index);
    }
  }

  function clear() {
    setSelectedIndex(undefined);
    setSelectedIndices([]);
    setIsOpen(false);
    setQuery("");

    if (onSelectedIndexChange) {
      onSelectedIndexChange(undefined);
    }
  }

  return (
    <Autocomplete
      color={color}
      query={query}
      onSelectItem={(item) => {
        setQuery(item);
        setIsOpen(false);
        setSelectedFromItem(item);
      }}
      items={items}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      selectedIndex={selectedIndex}
      selectedIndices={selectedIndices}
    >
      <AutocompleteTrigger>
        <div
          className={wrapperClasses}
          style={{
            ...cssColorProps(resolvedColor),
            ...wrapperStyle,
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
            if (!allowFreeText) {
              if (items.indexOf(query) < 0) {
                setQuery("");
              }
            }
          }}
          onKeyDown={(e: KeyboardEvent) => {
            if (!multiple && e.key !== "ArrowDown") {
              setSelectedIndex(undefined);
            } else if (e.key === "Backspace") {
              if (query.length === 0 && selectedIndices.length > 0) {
                setSelectedIndices(selectedIndices.slice(0, -1));
              }
            }
          }}
        >
          <label htmlFor={resolvedId} className={labelClasses}>
            {label}
          </label>
          <div className="has-disabled:cursor-not-allowed">
            <div className={classes} {...rest}>
              {multiple &&
                selectedIndices.map((index) => (
                  <Badge
                    key={items[index]}
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
                            setIsFocused(false);
                            setSelected(index);
                          }}
                        />
                      </>
                    }
                  </Badge>
                ))}
              <div className="flex flex-1 items-center justify-between">
                <input
                  onFocus={(e) => {
                    if (isMobile) {
                      e.target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  style={{ scrollMarginTop: "16px" }}
                  id={resolvedId}
                  data-error={error ? true : undefined}
                  aria-describedby={
                    resolvedId && error ? `${resolvedId}-error` : undefined
                  }
                  aria-label={ariaLabel}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="text-main-content line-clamp-1 w-0 grow-1 cursor-text px-3 py-1.5 text-left focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
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
                      color={isFocused ? resolvedColor : "main"}
                      className="h-6 p-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFocused(false);
                        clear();
                      }}
                    >
                      <XIcon className={"mr-1 inline size-4"} />
                    </Button>
                  )}
                  <Button
                    useGropup={false}
                    radius="pill"
                    size="sm"
                    variant="ghost"
                    color={isFocused ? resolvedColor : "main"}
                    className="h-6 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(!isOpen);
                    }}
                  >
                    <CaretDownIcon className={caretClasses} />
                  </Button>
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
