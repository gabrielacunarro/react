import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }

    };

    const handleDecrease = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    };

    const handleAdd = () => {
        onAdd(count)
        setCount(1);
    }

    return (
        <div>
            <button onClick={handleIncrease}>+</button>
            <span>{count}</span>
            <button onClick={handleDecrease}>-</button>
            <hr />
            <button onClick={handleAdd}>Add to cart</button>
        </div>
    )
}

