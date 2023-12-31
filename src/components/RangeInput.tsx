import React, {useState} from 'react'

type Props = {
    text: string;
}

export default function RangeInput({text}: Props) {
    const [rangeValue, setRangeValue] = useState(300)

    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value,10)
        setRangeValue( newValue )
      }

    return (
        <div className="">
            <label className="grid text-[#7FC4ED]">
                <span className="flex justify-between items-center text-base font-medium">
                    {text}
                    <span className="text-xs text-[#4E4964]">{rangeValue}ml</span>
                </span>
                <input className="mt-2" type="range" min="0" max="3000" value={rangeValue} onChange={handleRangeChange} />

            </label>
        </div>
    )
}