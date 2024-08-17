import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import ReactLoading from 'react-loading';
import { ItemCount } from "../components/ItemCount.jsx";
import { ItemsContext } from "../contexts/ItemsContext.jsx";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { addItem } = useContext(ItemsContext)


    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, 'items', id);

        getDoc(refDoc)
            .then((snapshot) => {
                setItem({ id: snapshot.id, ...snapshot.data() });
            })
            .finally(() => setLoading(false));
    }, [id]);

    const onAdd = (count) => {
        addItem({ ...item, quantity: count })
    }

    if (loading) {
        return (
            <Container className="spinner">
                <ReactLoading type="spin" color="#000" />
            </Container>
        );
    }

    if (!item) return <Container className="mt-4"></Container>;

    return (
        <Container className="mt-4 d-flex justify-content-center">
            <Card className="detail">
                <Card.Img variant="top" src={item.imageId} alt={item.title} />
                <Card.Body>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <h4><strong>Price: ${item.price}</strong></h4>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </Card.Body>
            </Card>
        </Container>
    );
};