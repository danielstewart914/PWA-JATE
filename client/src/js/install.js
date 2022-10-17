const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {

    event.preventDefault();
    window.deferredPrompt = event;

    butInstall.classList.remove( 'hidden' );
});

butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;
    if ( !promptEvent ) return;

    // show prompt
    promptEvent.prompt();

    // Clear prompt and hide button
    window.deferredPrompt = null;
    butInstall.classList.add( 'hidden' );
});

window.addEventListener('appinstalled', (event) => {
    // Clear prompt and hide button
    window.deferredPrompt = null;
    butInstall.classList.add( 'hidden' );
});