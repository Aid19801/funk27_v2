import React, { FunctionComponent } from 'react';

interface ImageProps {
    src: string
}

const Image: FunctionComponent<ImageProps> = ({ src }: ImageProps) => {
    return (
        <div>
            <img src={src} alt="blah" />
        </div>
    )
}

export default Image;