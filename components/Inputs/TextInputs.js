export default function TextInputs({labelChildren, inputId, inputName, inputType}) {
    const twLabel = "block mb-2 text-sm font-medium text-gray-900"
    const twInput = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    return (
        <div>
            <label htmlFor={inputId} className={twLabel}>{labelChildren}</label>
            <input type={inputType} name={inputName} id={inputId} className={twInput}/>
        </div>
    )
}