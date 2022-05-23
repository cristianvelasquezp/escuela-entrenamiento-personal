function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export function getPath( $hash) {
    const separatorPosition = $hash.search('/');
    return $hash.slice(1,separatorPosition);
}

export const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));