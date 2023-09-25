const baseRange = (start, end, step) => {
    let index = -1;
    let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
    const result = new Array(length);

    while (length--) {
        result[++index] = start;
        start += step;
    }

    return result;
}

export const rangeRight = (start, end, step) => {
    return range(start, end, step, true);
}

export const range = (start = 0, end, step, isRight) => {
    if (end === undefined) {
        end = start;
        start = 0;
    }

    step = step === undefined ? (start < end ? 1 : -1) : step;

    const resBaseRange = baseRange(start, end, step);

    return isRight ? resBaseRange.reverse() : resBaseRange;
}
