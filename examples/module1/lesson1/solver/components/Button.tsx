interface ButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
