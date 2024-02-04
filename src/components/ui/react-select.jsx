import { cn } from '@/lib/utils'
import { forwardRef } from 'react'
import Select, { components } from "react-select";
import { ChevronDownIcon } from 'lucide-react';
import { XIcon } from 'lucide-react';
import CreatableSelect from 'react-select/creatable';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon size={18} className='m-2' />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props) => {
  return (
    <components.ClearIndicator {...props}>
      <XIcon size={18} className='m-2' />
    </components.ClearIndicator>
  );
};

const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      <XIcon size={18} className='m-0.5' />
    </components.MultiValueRemove>
  );
};

const controlStyles = {
  base: "border border-slate-200 dark:border-slate-800 bg-transparent px-1 text-sm shadow-sm ring-offset-white aria-disabled:pointer-events-none  aria-disabled:opacity-50 rounded-md hover:cursor-pointer",
  focus: "outline-none ring-1 ring-slate-950 dark:ring-offset-slate-950 dark:ring-slate-300",
  nonFocus: "border-gray-300 hover:border-gray-400",
};

const placeholderStyles = "text-slate-500 pl-1 py-0.5 dark:text-slate-400";
const selectInputStyles = "pl-1 py-0.5";
const valueContainerStyles = "p-1 gap-1";
const singleValueStyles = "leading-7 ml-1";
const multiValueStyles =
  "bg-slate-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5";
const multiValueLabelStyles = "leading-6 py-0.5 text-slate-950 dark:text-slate-950";
const multiValueRemoveStyles =
  "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md";
const indicatorsContainerStyles = "p-0 gap-1";
const clearIndicatorStyles =
  "text-gray-500 rounded-md hover:bg-red-50 hover:text-red-800";
const indicatorSeparatorStyles = "bg-slate-200 dark:bg-slate-800 mr-1.5";
const dropdownIndicatorStyles =
  "p-0 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black";
const menuStyles = "p-1 mt-2 border border-slate-200 bg-white text-sm rounded-md text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 overflow-hidden";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded",
  focus: "bg-secondary active:bg-slate-200",
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";


const ReactSelect = forwardRef(({
  className,
  isMulti = false,
  isClearable,
  isSearchable,
  closeMenuOnSelect,
  hideSelectedOptions = false,
  onChange,
  isDisabled,
  isLoading,
  value,
  options,
  placeholder,
  isCreatable,
  ...rest
}, ref) => {
  const SelectComponent = isCreatable ? CreatableSelect : Select;
  return (
    <SelectComponent
      ref={ref}
      className={cn('w-full', className)}
      options={options}
      isClearable={isClearable}
      isSearchable={isSearchable}
      isMulti={isMulti}
      closeMenuOnSelect={closeMenuOnSelect}
      unstyled
      hideSelectedOptions={hideSelectedOptions}
      onChange={onChange}
      isDisabled={isDisabled}
      isLoading={isLoading}
      value={value}
      placeholder={placeholder}
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",
          },
        }),
        // On mobile, the label will truncate automatically, so we want to
        // override that behaviour.
        multiValueLabel: (base) => ({
          ...base,
          whiteSpace: "normal",
          overflow: "visible",
        }),
        control: (base) => ({
          ...base,
          transition: "none",
        }),
      }}
      components={{
        DropdownIndicator,
        ClearIndicator,
        MultiValueRemove,
      }}
      classNames={{
        control: ({ isFocused }) =>
          cn(
            isFocused ? controlStyles.focus : controlStyles.nonFocus,
            controlStyles.base,
          ),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
          cn(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base,
          ),
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
      {...rest}
    />
  )
})

export default ReactSelect
