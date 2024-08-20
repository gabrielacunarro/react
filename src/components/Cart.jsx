import { useContext, useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { ItemsContext } from '../contexts/ItemsContext';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    name: "",
    email: "",
    phone: "",
    confirmEmail: "",
};

export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const { items, clearItems } = useContext(ItemsContext); 
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBuyer((prev) => {
            const updatedBuyer = { ...prev, [name]: value };
            const formErrors = validateForm(updatedBuyer);
            setErrors(formErrors);
            return updatedBuyer;
        });
    };

    const validateForm = (values) => {
        const newErrors = {};

        if (values.email !== values.confirmEmail) {
            newErrors.confirmEmail = "Emails do not match";
        }

        return newErrors;
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        const formErrors = validateForm(buyer);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setLoading(true);

        const order = {
            buyer,
            items,
            total,
        };

        try {
            const db = getFirestore();
            const orderCollection = collection(db, "orders");
            const docRef = await addDoc(orderCollection, order);
            alert("Your order: " + docRef.id + " was successfully created");

            clearItems(); 
            
            setLoading(false);
            navigate('/thanks');
        } catch (error) {
            console.error("Error creating order: ", error);
            setLoading(false);
        }
    };

    return (
        <>
            {items.length === 0 ? (
                <p className='emptycart'>You have not added any products yet...</p>
            ) : (
                <>
                    {items.map((item) => (
                        <div className='cart-detail' key={item.id}>
                            <img src={item.imageId} height={100} alt={item.title} />
                            <h2>Quantity: {item.quantity}</h2>
                            <h3>Price: {item.price}</h3>
                        </div>
                    ))}
                    <div className='total'>
                        <h4>Total U$s: {total}</h4>
                    </div>
                    <form onSubmit={handleCheckout}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={buyer.name}
                                onChange={handleChange}
                                required
                                pattern="^[a-zA-ZñÑ\s]+$"
                                title="Valid name"
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={buyer.email}
                                onChange={handleChange}
                                required
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div>
                            <label>Confirm Email:</label>
                            <input
                                type="email"
                                name="confirmEmail"
                                value={buyer.confirmEmail}
                                onChange={handleChange}
                                required
                                className={errors.confirmEmail ? 'error' : ''}
                            />
                            {errors.confirmEmail && <span className="error-message">{errors.confirmEmail}</span>}
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={buyer.phone}
                                onChange={handleChange}
                                required
                                pattern="\d{10}"
                                title="Phone number must be 10 digits"
                                className={errors.phone ? 'error' : ''}
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>
                        <button
                            className='checkout'
                            type="submit"
                            disabled={loading || Object.keys(errors).length > 0}
                        >
                            {loading ? 'Processing...' : 'Checkout'}
                        </button>
                    </form>
                </>
            )}
        </>
    );
};
