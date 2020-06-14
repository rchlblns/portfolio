import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 500));
}

const GithubButton = props => {
    const [isLoading, setLoading] = useState(false); //loading state

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Button
        variant="dark"
        diabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        >
            {isLoading ? "Loading" : "Github"}
        </Button>
    );
}

export default GithubButton;