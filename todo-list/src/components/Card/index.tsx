import { X } from "feather-icons-react";
import { Button } from "../Button";
import "./styles.css";

interface CardProps {
  id: string;
  title: string;
  completed: boolean;
  onCheck: (index: number, value: boolean) => void;
  onDelete: (index: number) => void;
}

export const Card = (props: CardProps) => {
  const { id, title, completed, onCheck, onDelete } = props;
  const index = Number(id);

  return (
    <div className="card">
      <input
        type="checkbox"
        checked={completed}
        id={id}
        onChange={(e) => onCheck(index, e.target.checked)}
      />
      <label htmlFor={id}>{title}</label>
      <Button buttonType="ghost" onClick={() => onDelete(index)}>
        <X size={16} />
      </Button>
    </div>
  );
};
