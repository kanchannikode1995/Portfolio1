import React from 'react'

const Heading = (props) => {
    return (
        <>
            <div className='text-center'>
                <h6 className='bg-warning mx-auto text-dark' style={{width:props.size}}>{props.title}</h6>
                <h4>{props.description}</h4>
            </div>
        </>
    )
}

export default Heading