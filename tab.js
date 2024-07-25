function showContent(tabId){
    const contentText = { 
        tab1:'This is Tab 1',
        tab2:'This is Tab 2',
        tab3:'This is Tab 3'
    };

    document.getElementById('content').innerText = contentText[tabId];

    // link active code
    document.getElementById('tab1').classList.remove('tab-active');
    document.getElementById('tab2').classList.remove('tab-active');
    document.getElementById('tab3').classList.remove('tab-active');

    document.getElementById(tabId).classList.add('tab-active');
}

