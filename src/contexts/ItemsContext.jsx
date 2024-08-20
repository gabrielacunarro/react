import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ItemsContext = createContext();

export const Provider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        const { id, quantity } = item;
        const alreadyExists = items.some((i) => i.id === id);

        if (alreadyExists) {
            const updatedItems = items.map(i => {
                if (i.id === id) {
                    return { ...i, quantity: i.quantity + quantity };
                } else {
                    return i;
                }
            });
            setItems(updatedItems);
        } else {
            setItems(prev => [...prev, item]);
        }
    };

    const getTotalItems = () => {
        return items.reduce((acc, item) => acc + item.quantity, 0);
    };

    const clearItems = () => {
        setItems([]);
    };

    return (
        <ItemsContext.Provider value={{ items, addItem, getTotalItems, clearItems }}>
            {children}
        </ItemsContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ItemsContext };
