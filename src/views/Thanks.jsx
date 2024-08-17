import { Container } from 'react-bootstrap';

export const Thanks = () => {
    return (
        <Container className="mt-4 text-center">
            <h1>Thank You for Your Purchase!</h1>
            <p>Your order has been received and is being processed.</p>
            <p>You will receive an email confirmation shortly.</p>
            <a href="/" className="btn btn-primary">Return to Home</a>
        </Container>
    );
};
