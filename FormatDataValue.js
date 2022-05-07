/*You get input data as a number (of megabytes). Your task is to convert it to the string adding 'MB' or 'GB' or 'TB' correctly.

Find the details below:

900 -> '900MB'
1900 -> '1GB 900MB'
568200 -> '568GB 200MB'
1000000 -> '1TB'
1234567 -> '1TB 234GB 567MB'
P.S. 0 <= input number < 1000000000*/

function formatDataValue(data) {
    let copyData = data;
    const tb = Math.floor(copyData / 1000000);
    if (tb > 0) {
        copyData -= tb * 1000000;
    }
    const gb = Math.floor(copyData / 1000);
    if (gb > 0) {
        copyData -= gb * 1000;
    }

    const formats = [
        tb > 0 ? `${tb}TB` : '',
        gb > 0 ? `${gb}GB` : '',
        copyData > 0 ? `${copyData}MB` : '',
    ].filter((format) => format !== '');

    return formats.join(' ') === '' ? '0MB' : formats.join(' ');
}

console.log(formatDataValue(1000));
console.log(formatDataValue(123002000));
