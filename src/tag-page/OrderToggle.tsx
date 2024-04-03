import { ArrowDown, ArrowUp } from "lucide-react";

export interface OrderToggleProps {
  order: string;
  onClick: () => void;
}

function OrderToggle({ order, onClick }: OrderToggleProps) {
  return (
    <div className="flex items-center">
      {order === "desc" ? (
        <ArrowDown onClick={onClick} />
      ) : (
        <ArrowUp onClick={onClick} />
      )}
    </div>
  );
}
export default OrderToggle;
