import React, { createContext, ReactNode } from 'react';

interface Config {
    prefix?: string
}

interface ConfigProviderProps extends Config {
    children?: ReactNode
}
const defaultConfig: Config = {
    prefix: 'heima-ui'
}

export const ConfigContext = createContext(defaultConfig)


function ConfigProvider(props: ConfigProviderProps) {
    const { prefix, children } = props
    return (
        <ConfigContext.Provider value={{ prefix }}>
            {children}
        </ConfigContext.Provider>
    );
}

export default ConfigProvider;
