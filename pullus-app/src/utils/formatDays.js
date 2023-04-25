export default function formatDays(numDays) {
    const weeks = Math.floor(numDays / 7)
    const days = numDays % 7
    if (weeks === 1) {
        return `1 week and ${days} days`
    } else if (weeks > 1) {
        return `${weeks} weeks and ${days} days`
    } else {
        return `${days} days`
    }
}