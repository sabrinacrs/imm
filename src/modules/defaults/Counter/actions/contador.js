export function increment (count) {
    return {
        type: 'INCREMENT',
        count
    }
}

export function decrement (count) {
    return {
        type: 'DECREMENT',
        count
    }
}

export function updateCounter (countValue) {
    return {
        type: 'UPDATE_COUNTER',
        countValue
    }
}