import React, { ReactElement } from 'react';

export function renderTestComponent(passedInProps, PassedInComponent) {
  
  const defaultProps = {
		handleClick() {
			console.log('overriding handle click has worked!');
		},
  };
  
	return (
    <PassedInComponent {...defaultProps} {...passedInProps} />
  );
}


