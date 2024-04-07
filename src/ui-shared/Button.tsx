import { ButtonType } from "../types/types";

const Button = ({ title, darkMode, onClick }: ButtonType) => {
  return (
    <div >
      <button
        style={{
          borderColor: darkMode ? "white" : "#374151",
        }}
        className="px-2 border-[1px] max-lg:text-xs border-black border-solid rounded-sm"
        onClick={onClick}
        id={title}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
