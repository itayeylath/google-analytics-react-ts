import React, { PropsWithChildren } from 'react';
import ga from './ga-init';

const GAInitializer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    ga.initGoogleAnalytics();

    return <>{children}</>;
}

export default GAInitializer;