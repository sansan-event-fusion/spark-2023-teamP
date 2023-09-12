function splitDate(date: Date) {
    const yyyy = date.getUTCFullYear();
    const MM = date.getUTCMonth() + 1;
    const dd = date.getUTCDate();
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds();

    return { yyyy, MM, dd, hh, mm, ss };
}

function digits(num: number, len: number) {
    return ("0".repeat(len) + num).slice(-len);
}

export function getShortTime(date: Date) {
    const { MM, dd, hh, mm } = splitDate(date);
    return `${MM}月${dd}日 ${hh}:${digits(mm, 2)}`;
}