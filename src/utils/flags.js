

const downloadEmployeeData = (file) => {
    fetch(file)
        .then(response => {
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = 'subtitle.srt';
                a.click();
            });
            //window.location.href = response.url;
        });
}



export const renderFlag =  (item) => {
    const lang = item.language


    switch (lang) {
        case 'cz':
            return <div onClick={() => downloadEmployeeData(item.subtitles_file)} style={{width: 20, height: 20, cursor: 'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 51.28 35.67"><g fill-rule="nonzero"><path fill="#D7141A" d="M51.28 17.84v15.01a2.83 2.83 0 0 1-2.82 2.82H2.82A2.83 2.83 0 0 1 0 32.85V17.84h51.28z"/><path fill="#fff" d="M51.28 17.84H0V2.82A2.83 2.83 0 0 1 2.82 0h45.64a2.83 2.83 0 0 1 2.82 2.82v15.02z"/><path fill="#11457E" d="M25.64 17.84.57 1.12C.21 1.6 0 2.18 0 2.82v30.03c0 .64.21 1.23.57 1.7l25.07-16.71z"/></g></svg>
            </div>
            break
        case 'en':
            return  <div onClick={() => downloadEmployeeData(item.subtitles_file)} style={{}}>
                <img src={require('../img/flags/united-kingdom-flag-icon.png')} style={{width: 25, height: 15,cursor: 'pointer'}} />
            </div>
            break
        case 'fr':
            return <div onClick={() => downloadEmployeeData(item.subtitles_file)} style={{width: 20, height: 20,cursor: 'pointer'}}><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 356.18"><path fill="#E1000F" d="M345.04 0h139C499.44.1 512 12.72 512 28.13v299.91c0 15.47-12.65 28.13-28.13 28.14H345.04V0zM15.11 352.95zm-9.54-8.15z"/><path fill="#fff" d="M27.96 0h317.08v356.18H27.98C12.57 356.09 0 343.46 0 328.04V28.14C0 12.72 12.56.1 27.96 0z"/><path fill="#273375" d="M27.96 0h138.99v356.18H28c-15.42-.08-28-12.71-28-28.14V28.14C0 12.72 12.56.1 27.96 0z"/></svg></div>
            break
        case 'de':
            return <div onClick={() => downloadEmployeeData(item.subtitles_file)} style={{width: 20, height: 20,cursor: 'pointer'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.2 38.4"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M3.03 0h49.13c1.67 0 3.03 1.36 3.03 3.03v32.33c0 1.66-1.36 3.02-3.02 3.03H3.02C1.36 38.4 0 37.03 0 35.37V3.03C0 1.36 1.36 0 3.03 0z"/><path d="M0 12.8h55.2v22.57c0 1.67-1.36 3.03-3.03 3.03H3.03C1.36 38.4 0 37.04 0 35.37V12.8z" fill="#d00"/><path d="M0 25.6h55.2v9.77c0 1.66-1.36 3.02-3.02 3.03H3.03A3.04 3.04 0 010 35.37V25.6z" fill="#ffce00"/></g></svg></div>
            break
        case 'it':
            return  <div onClick={() => downloadEmployeeData(item.subtitles_file)} style={{width: 20, height: 20,cursor: 'pointer'}}><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 90.77 63.15"><g fill-rule="nonzero"><path fill="#009246" d="M29.47 0v63.15H4.99C2.24 63.15 0 60.9 0 58.16V4.99C0 2.24 2.24 0 4.99 0h24.48z"/><path fill="#fff" d="M61.31 0v63.15H29.47V0z"/><path fill="#CE2B37" d="M61.31 63.15V0h24.48c2.74 0 4.98 2.24 4.98 4.99v53.17c0 2.74-2.24 4.99-4.98 4.99H61.31z"/></g></svg></div>
            break
        case 'pl':
            return  <div onClick={() => downloadEmployeeData(item.subtitles_file)} style={{width: 20, height: 20,cursor: 'pointer'}}><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 205.46 143.18"><path fill="#fff" fill-rule="nonzero" d="M11.65.4h182.16c6.19 0 11.25 5.06 11.25 11.25v119.88c0 6.18-5.06 11.25-11.25 11.25H11.65C5.46 142.78.4 137.71.4 131.53V11.65C.4 5.46 5.46.4 11.65.4z"/><path fill="#dc143c" fill-rule="nonzero" d="M.4 71.59h204.66v59.94c0 6.18-5.06 11.25-11.25 11.25H11.65C5.46 142.78.4 137.71.4 131.53V71.59z"/><path fill="#CCC" fill-rule="nonzero" d="M11.65 0h182.16c3.21 0 6.12 1.31 8.23 3.42a11.61 11.61 0 0 1 3.42 8.23v119.88c0 3.2-1.31 6.11-3.42 8.22-2.11 2.11-5.02 3.43-8.23 3.43H11.65c-3.2 0-6.12-1.32-8.23-3.43A11.604 11.604 0 0 1 0 131.53V11.65c0-3.21 1.31-6.12 3.42-8.23C5.53 1.31 8.45 0 11.65 0zm182.16.8H11.65c-2.99 0-5.7 1.22-7.66 3.19A10.793 10.793 0 0 0 .8 11.65v119.88c0 2.98 1.22 5.69 3.19 7.66 1.96 1.97 4.67 3.19 7.66 3.19h182.16c2.99 0 5.7-1.22 7.67-3.19 1.96-1.97 3.18-4.68 3.18-7.66V11.65c0-2.98-1.22-5.7-3.19-7.66A10.776 10.776 0 0 0 193.81.8z"/></svg></div>
            break
        case 'pr':
            return <div onClick={() => downloadEmployeeData(item.subtitles_file)} style={{cursor: 'pointer'}}>  <img src={require('../img/flags/portugal-flag-icon.png')} style={{width: 20, height: 17}} /></div>
            break
        case 'ru':
            return   <div onClick={() => downloadEmployeeData(item.subtitles_file)} style={{cursor: 'pointer'}}><img src={require('../img/flags/rus.png')} style={{width: 20, height: 17}} /></div>
            break
        case 'sp':
            return   <div onClick={() => downloadEmployeeData(item.subtitles_file)} style={{cursor: 'pointer'}}><img src={require('../img/flags/spain-country-flag-icon.png')} style={{width: 20, height: 17}} /></div>
            break
        case 'tr':
                        return   <div onClick={() => downloadEmployeeData(item.subtitles_file)} style={{cursor: 'pointer'}}> <img src={require('../img/flags/turkey-flag-icon.png')} style={{width: 22, height: 17}} /></div>
            break
        default:
            return null
    }
}
