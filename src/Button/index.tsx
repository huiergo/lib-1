import React, { ReactNode, useContext } from 'react';
import cs from 'classnames';
import './index.less'
import { ConfigContext } from '../ConfigProvider';

interface ButtonProps {
    type?: 'highlight' | 'default',
    text?: string,
    children?: ReactNode,
    disabled?: boolean,
    style?: object,
    className?: string,
    icon?: ReactNode,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default (props: ButtonProps) => {
    const { type = 'default', text, children, disabled, style, className, icon, onClick } = props

    // const prefix = 'heima-ui'

    const { prefix } = useContext(ConfigContext);
    const btnPrefix = prefix + '-btn'

    const classes = cs(btnPrefix, {
        [`${btnPrefix}-${type}`]: type,
        [`${btnPrefix}-disabled`]: disabled
    }, className)



    return (
        <div className={classes} style={style} onClick={(e) => {
            if (disabled) {
                return
            }
            onClick && onClick(e)
        }}>
            {icon}
            {text}
            {children}
        </div>
    )
};
