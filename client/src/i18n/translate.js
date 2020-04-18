import React from 'react';
import { FormattedMessage } from 'react-intl';

//"FormattedMessage" This component uses the formatMessage API and has props that correspond to a Message Descriptor.
const translate = (id, value={}) => <FormattedMessage id={id} value={{...value}}/>;

export default translate;