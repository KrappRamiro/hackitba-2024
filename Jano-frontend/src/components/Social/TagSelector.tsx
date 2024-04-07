import { useState } from "react"
import Close from '@mui/icons-material/Close';

export default function TagSelector({handleTags}) {

    const [tag, setTag] = useState('')
    const [tags, setTags] = useState(Array<String>)

    const handleChange = e => {
        const { value } = e.target
        setTag(value)
    }

    const handleKeyDown = e => {

        const { key } = e

        const newTag = tag.trim();

        if ((key === ',' || key === 'Enter' || key === 'Tab') && newTag.length && !tags.includes(newTag)) {
            e.preventDefault();
            setTags(prevTags => [...prevTags, newTag])
            handleTags(tags)
            setTag('')
            e.target.value = ''

        } else if (key === 'Backspace' && !newTag.length && tags.length) {
            e.preventDefault();

            const tagsCopy = [...tags];
            const lastTag = tagsCopy.pop() + "";

            setTags(tagsCopy)
            handleTags(tags)
            setTag(lastTag)
        }
    }

    const removeTag = (index: number) => setTags(prevTags => prevTags.filter((tag, i) => i != index))

    return (
        <div className="tags-input-wrapper">
            <input id="inputTags" onKeyDown={handleKeyDown} onChange={handleChange} className="tag-input w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" type="text" />
            <div className="mt-5 h-10 overflow-y-auto">
                {tags.map((tag, index) => (
                    <div key={index} className="tag-item color-default inline-block bg-blue-500 rounded-full px-2 py-1 text-xs text-white mr-2 mb-2">
                        <span className="title">{tag}</span>
                        <button className="remove-btn" onClick={() => removeTag(index)}>
                            <Close></Close>
                        </button>
                    </div>
                ))}
            </div>
        </div>

    )
}