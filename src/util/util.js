export const linearSliderPosition = (position, min, max) => {
    const minPosition = 0;
    const maxPosition = 100;
    return (position / (maxPosition - minPosition)) * (max - min);
}

export const linearSliderValue = (value, min, max) => {
    const minPosition = 0;
    const maxPosition = 100;
    return (value / (max - min)) * (maxPosition - minPosition);
}

export const logarithmicSliderPosition = (value, min, max) => {
    const minPosition = 0;
    const maxPosition = 100;
    const minValue = Math.log(min);
    const maxValue = Math.log(max);
    const scale = (maxValue - minValue) / (maxPosition - minPosition);
    const result = (Math.log(value) - minValue) / scale + minPosition
    console.log("Calculating from value: " + value + " result position: " + result)
    return result;
}

export const logarithmicSliderValue = (position, min, max) => {
    const minPosition = 0;
    const maxPosition = 100;
    const minValue = Math.log(min);
    const maxValue = Math.log(max);
    const scale = (maxValue - minValue) / (maxPosition - minPosition);
    const result = Math.exp(minValue + scale * (position - minPosition))
    console.log("Calculating from position: " + position + " result value: " + result);
    return result;
}
