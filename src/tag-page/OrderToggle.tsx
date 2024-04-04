import { Order } from "@/types";
import { ArrowDown, ArrowUp } from "lucide-react";

export interface OrderToggleProps {
  order: Order;
  onClick: () => void;
}

function OrderToggle({ order, onClick }: OrderToggleProps) {
  return (
    <div className="flex items-center cursor-pointer">
      {order === "desc" ? (
        <ArrowDown data-testid="arrow-down" onClick={onClick} />
      ) : (
        <ArrowUp data-testid="arrow-up" onClick={onClick} />
      )}
    </div>
  );
}
export default OrderToggle;
