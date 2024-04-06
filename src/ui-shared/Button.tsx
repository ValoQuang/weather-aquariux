type ButtonType = {
    darkMode: boolean;
    onClick?: () => void;
    title: string;
}

const Button = ({ title, darkMode, onClick }: ButtonType) => {
  return (
    <div>
      <button
        style={{
          borderColor: darkMode ? "white" : "#374151",
        }}
        className="px-2 border-[1px] border-black border-solid rounded-sm"
        onClick={onClick}
        id={title}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
