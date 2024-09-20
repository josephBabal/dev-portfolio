// CustomCursor.tsx
import useMouseMove from "@/hooks/useMouseMove"; // Adjust the import path

const CustomCursor: React.FC = () => {
  useMouseMove();

  return <div className="cursor"></div>;
};

export default CustomCursor;
