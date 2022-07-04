import Alert from 'react-bootstrap/Alert';
import React from 'react';

const MessageBox = (props) => {
    return (
        <Alert variant={props.variant || 'info'}>{props.childen}</Alert>
    );
};

export default MessageBox;