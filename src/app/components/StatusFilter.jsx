'use client'

export default function StatusFilter({value, options = [], onChange}) {
    return (
        <label className="block">
            <span className="text-sm font-medium">Status</span>
            {/* <select
                className="mt-1 w-full rounded border px-3 py-2"
                value={value}
                onChange={(e) => onChange(e.target.value)}>
                {options.map(opt => (
                    <options key={opt} value={opt}>{opt}</options>
        ))}
      </select> */}
        </label>
    );
}