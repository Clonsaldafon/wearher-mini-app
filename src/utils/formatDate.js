export function formatDate(dateString) {
    const date = new Date(dateString);

    const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    };

    const formatted = new Intl.DateTimeFormat('ru-RU', options).format(date);

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}