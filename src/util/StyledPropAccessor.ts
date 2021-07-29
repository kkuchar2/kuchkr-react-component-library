export const styleProp = (prop, defaultProp) => prop ? prop : defaultProp;

export const themeProp = (name, defaultValue = null) => {
    return props => {
        const theme = props.theme;

        if (!theme) {
            return defaultValue;
        }

        const propValue = theme[name];

        return propValue ? propValue : defaultValue
    }
}

export const conditionalProp = (condition, nameOnTrue, nameOnFalse, defaultValue = null) => {
    return props => {
        const theme = props.theme;

        if (!theme) {
            return defaultValue;
        }

        const propValue = theme[condition(props) ? nameOnTrue : nameOnFalse];

        return propValue ? propValue : defaultValue
    }
}