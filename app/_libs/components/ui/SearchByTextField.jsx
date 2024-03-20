"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import cn from "../../helpers/Utilskit";
import { SEARCH_BOX_STYLES } from "../../constants/SearchFieldStyleKit";

export default function SearchByTextField({
  id,
  name,
  placeholder,
  className,
  value = "",
  onChange,
  onFocus,
  onReset,
}) {
  const SEARCH_FIELD_STYLES = cn(SEARCH_BOX_STYLES, className);
  return (
    <div className="relative flex flex-col gap-1">
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        className={SEARCH_FIELD_STYLES}
      />

      {value.length > 0 ? (
        <button onClick={onReset} className="absolute top-3 right-3">
          <XMarkIcon className="w-5 h-5 text-white" />
        </button>
      ) : (
        <button className="absolute top-3 right-3">
          <MagnifyingGlassIcon className="w-5 h-5 text-white bg-black" />
        </button>
      )}
    </div>
  );
}
