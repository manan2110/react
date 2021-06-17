import React from 'react'

const UpdateComp = OriginalComp => {
    class NewComp extends React.Component {
        render() {
            return <OriginalComp name="The user"></OriginalComp>;
        }
    }
    return NewComp;
};
export default UpdateComp;