import React from 'react';

const Hobbies: React.FC = () => {
    return (
        <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
            <h1>My Hobbies</h1>
            <p>IN DEVELOPMENT</p>
            <ul style={{ textAlign: 'left' }}>
                <li>Reading</li>
                <li>Biking</li>
                <li>Hiking</li>
                <li>Running Slowly</li>
            </ul>
        </div>
    );
};

export default Hobbies;