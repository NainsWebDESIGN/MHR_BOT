export default (url: string, type: string) => {
    const head = <HTMLDivElement>document.head;
    const element = document.createElement(type);
    element.innerHTML = '';
    switch (type) {
        case 'link':
            element['rel'] = "stylesheet";
            element['href'] = url;
            break;
        case 'script':
            element['src'] = url;
            element['async'] = true;
            element['defer'] = true;
            break;
    }
    head.appendChild(element);
}