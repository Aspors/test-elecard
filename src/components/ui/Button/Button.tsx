import React, {ReactNode} from 'react';

import styles from './Button.module.css';

const Button: React.FC<{children: ReactNode, disabled?: boolean, onClick?:()=> void, extraClass?: string | null}> = ({children, extraClass, ...rest},): JSX.Element => {
  return (
    <button {...rest} className={`${styles.button} ${extraClass ? extraClass : ""}`}>
      {children}
    </button>
  );
};

export default Button;
