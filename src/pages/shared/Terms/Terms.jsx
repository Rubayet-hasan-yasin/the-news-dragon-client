import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Terms and conditions</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus adipisci provident impedit facilis, amet dolor dolores harum optio itaque autem non totam vero iusto, quos voluptate architecto sequi distinctio? Temporibus iure illo et perferendis voluptatibus enim ipsum blanditiis neque dolorum sed dolore voluptatum, provident consequuntur fugiat repellendus reiciendis, omnis iste!</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;