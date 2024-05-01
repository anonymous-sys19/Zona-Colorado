export const InputComponentSearch = ({ placeholder, clasName }) => {
    return (

        <input
            type="text"
            placeholder={placeholder}
            className={clasName}
            style={
                {
                    borderRadius: "0.375rem",
                    width: "100%",
                    background: "border-box",
                    padding: "0.5rem 1rem",
                    outline: "none",
                    border: "2px double #4299e1",
                }

            }
        />

    )
}