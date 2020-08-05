import React, { ReactElement, MouseEvent } from 'react';
// import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

interface Props {
    onClick: any,
    icon: object,
    size: string,
}

export function FontAwesomeIcon({ onClick, size, icon }: Props): ReactElement {
	return (
        <div
            onClick={onClick}
            id="mock-font-awesome-icon"
            >
                mocked icon.
        </div>
    );
}
