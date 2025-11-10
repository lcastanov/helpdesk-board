'use client'

export default function SearchBox({value, onChange}) {
    return (
        <label className="block">
            <h3>Search Box</h3>
            <input type="text" className="search-box" value={value} onChange={(e) => onChange(e.target.value)}/>
        </label>
    )
}