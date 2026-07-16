import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { Search, X } from "lucide-react";
import { InputGroupAddon } from "@/components/ui/input-group";

type SearchComboboxProps<T> = {
  items: T[];
  query: string;
  setQuery: (value: string) => void;
  value: T | null;
  onChange: (value: T | null) => void;
  placeholder?: string;
  isLoading?: boolean;
  emptyText?: string;
  className?: string;

  getKey: (item: T) => string | number;
  getValue: (item: T) => T;

  renderItem: (item: T) => React.ReactNode;
  renderValue?: (item: T) => React.ReactNode;
};

export default function SearchCombobox<T>({
  items,
  query,
  setQuery,
  value,
  onChange,
  placeholder = "Search...",
  isLoading = false,
  emptyText = "No items found.",
  getKey,
  getValue,
  renderItem,
  renderValue,
  className,
}: SearchComboboxProps<T>) {
  return (
    <div className={cn("w-full relative", className)}>
      <Combobox
        items={items}
        inputValue={query}
        onInputValueChange={setQuery}
        value={value}
        onValueChange={onChange}
      >
        <ComboboxInput
          className={cn(
            "w-[80%] h-10  rounded-sm border border-slate-200 bg-white shadow-sm",
            "transition-all duration-300",
            "focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/20 focus-within:shadow-md",
            "flex items-center text-slate-900 placeholder-slate-400 pl-0 relative z-10"
          )}
          placeholder={value ? "" : placeholder}
          showClear={false}
          showTrigger={false}
          render={
            value && renderValue ? (
              <div className={cn('flex', 'items-center', 'gap-2', 'pl-3', 'pr-12', 'w-full', 'h-full', 'overflow-hidden', 'absolute', 'inset-0', 'z-20', 'pointer-events-none', 'bg-white', 'rounded-2xl')}>
                <div className={cn('pl-12', 'flex', 'items-center', 'h-full', 'w-full')}>
                  {renderValue(value)}
                </div>
              </div>
            ) : undefined
          }
        >
          {/* Search icon inside the input on the left */}
          <InputGroupAddon align="inline-start" className={cn('pl-4', 'pr-2', 'text-slate-400', 'z-30', 'pointer-events-none', 'relative')}>
            <Search className={cn('w-5', 'h-5', 'md:w-6', 'md:h-6')} />
          </InputGroupAddon>

          {/* Clear (X) icon on the right */}
          {(value || query.length > 0) && (
            <InputGroupAddon align="inline-end" className={cn('pr-2', 'z-30', 'relative','left-[80%]')}>
              <button
                type="button"
                aria-label="Clear search"
                onPointerDown={(e) => {
                  // Prevent input from losing focus when clicking
                  e.preventDefault();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setQuery("");
                  onChange(null);
                }}
                className={cn(
                  "flex items-center justify-center rounded-full p-1.5",
                  "text-slate-400 hover:text-slate-600 hover:bg-slate-100",
                  "transition-colors duration-200 cursor-pointer pointer-events-auto"
                )}
              >
                <X className={cn('w-4', 'h-4')} />
              </button>
            </InputGroupAddon>
          )}
        </ComboboxInput>

        <ComboboxContent className={cn('shadow-xl', 'border', 'border-slate-100', 'bg-white', 'rounded-2xl', 'max-h-80', 'overflow-y-auto', 'w-full', 'z-50', 'mt-2')}>
          <ComboboxEmpty className={cn('py-8', 'text-slate-500', 'text-sm', 'md:text-base', 'text-center')}>
            {isLoading ? (
              <div className={cn('flex', 'items-center', 'justify-center', 'gap-3')}>
                <div className={cn('w-5', 'h-5', 'border-2', 'border-blue-600', 'border-t-transparent', 'rounded-full', 'animate-spin')}></div>
                <span>Searching...</span>
              </div>
            ) : (
              emptyText
            )}
          </ComboboxEmpty>

          <ComboboxList className="p-2">
            <ComboboxCollection>
              {(item) => (
                <ComboboxItem
                  key={getKey(item)}
                  value={getValue(item)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200",
                    "hover:bg-blue-50/50 focus:bg-blue-50/50 data-[highlighted]:bg-blue-50/50",
                    "data-[selected]:bg-blue-50 data-[selected]:border-blue-100 border border-transparent"
                  )}
                >
                  {renderItem(item)}
                </ComboboxItem>
              )}
            </ComboboxCollection>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}