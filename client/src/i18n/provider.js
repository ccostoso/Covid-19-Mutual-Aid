import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import { LOCALES } from './locales';
import messages from './messages';

//"IntlProvider" this component will wrap an app's root component so that the entire app will be within the configured i18n context.
const Provider = ({children, locale = LOCALES.ENGLISH}) => (
    <IntlProvider 
        locale={locale}
        textComponent={Fragment}
        messages={messages[locale]}
    >
        {children}
    </IntlProvider>
);

export default Provider;