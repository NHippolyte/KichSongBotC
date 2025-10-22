// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();

    // AJOUTE ce bloc pour connecter les contrôles du téléphone
    if ('mediaSession' in navigator) {
        navigator.mediaSession.setActionHandler('play', () => { togglePlayPause(); });
        navigator.mediaSession.setActionHandler('pause', () => { togglePlayPause(); });
        navigator.mediaSession.setActionHandler('previoustrack', () => {
            skip(-1);
            audio.play();
          });
          navigator.mediaSession.setActionHandler('nexttrack', () => {
            skip(1);
            audio.play();
          });
        /* navigator.mediaSession.setActionHandler('previoustrack', () => { playPrev(); });
        navigator.mediaSession.setActionHandler('nexttrack', () => { playNext(); }); */
    }

    // --- DONNÉES MUSICALES ---
    // Remplace ces données par tes propres sons
    const musicData = [
        {
            id: 'banger',
            name: 'BANGER 🔥',
            className: 'banger-bg', 
            categoryImage: 'image/BANGER.png',
            sounds: [
                { id: 'CONIO', title: 'CONIO', artist: 'Kich', coverImage: 'image/CONIO.png', audioSrc: 'banger/CONIO.mp3' },
                { id: 'PourMonBien', title: 'Pour Mon Bien', artist: 'Kich', coverImage: 'image/MonBien.JPG', audioSrc: 'banger/MonBien.mp3' },
                { id: 'PLUS', title: 'PLUS', artist: 'Kich', coverImage: 'image/PLUS.png', audioSrc: 'banger/PLUS.mp3' },
                { id: 'TicEtTac', title: 'Tic et Tac', artist: 'Kich', coverImage: 'image/TicEtTac.png', audioSrc: 'banger/Tic et Tac.mp3' },
                { id: 'SYMA', title: 'SYMA', artist: 'Kich', coverImage: 'image/SYMA.png', audioSrc: 'banger/SYMA.mp3' },
                { id: 'Suceuse2chibre', title: 'Suceuse2chibre', artist: 'Kich', coverImage: 'image/Suceuse2chibre.png', audioSrc: 'banger/suceusedechibre.mp3' },
                { id: 'BARIO', title: 'BARIO', artist: 'Kich', coverImage: 'image/Bario.JPG', audioSrc: 'banger/BARIO.mp3' },
                { id: 'PasLeMemeDel', title: 'Pas Les Meme Del', artist: 'Kich', coverImage: 'image/PasLeMemeDel.png', audioSrc: 'banger/Pas Le Meme Del.mp3' },
                { id: 'HMHM', title: 'HMHM', artist: 'Kich', coverImage: 'image/HMHM.JPG', audioSrc: 'banger/HMHM.mp3' },
                { id: 'StrinFicelle', title: 'String Ficelle', artist: 'Kich', coverImage: 'image/String.JPG', audioSrc: 'banger/String.mp3' },
                { id: 'OHNANA', title: 'OHNANA', artist: 'Kich', coverImage: 'image/OHNANA.png', audioSrc: 'banger/OHNANA.mp3' },
                { id: 'DeDejaVue', title: 'De Deja Vue', artist: 'Kich', coverImage: 'image/DeDejaVue.png', audioSrc: 'banger/De deja vue.mp3' },
                { id: 'LaCui', title: 'LaCui', artist: 'Kich', coverImage: 'image/LaCui.png', audioSrc: 'banger/LaCui.mp3' },
                { id: '5hDuMat', title: '5hDuMat', artist: 'Kich', coverImage: 'image/5hDuMat.png', audioSrc: 'banger/5h du mat 2.mp3' },

            ]
        },
        {
            id: 'freestyle',
            name: 'FREESTYLE  🎤',
            className: 'freestyle-bg',
            categoryImage: 'image/FRESSTYLE.png',
            sounds: [
                { id: 'honnetement', title: 'Honnetement', artist: 'Kich', coverImage: 'image/honnetement.png', audioSrc: 'freestyle/honnetement.mp3' },
                { id: 'Jrempli', title: 'J\'rempli J\'vide', artist: 'Kich', coverImage: 'image/Jrempli.png', audioSrc: 'freestyle/Jrempli.mp3' },
                { id: '3Pshit', title: '3 Pshit', artist: 'Kich', coverImage: 'image/3pshit.JPG', audioSrc: 'freestyle/3pshit.mp3' },
                { id: 'AuDeMar', title: 'AuDeMar', artist: 'Kich', coverImage: 'image/AUdemar.JPG', audioSrc: 'freestyle/AuDeMaar.mp3' },
                { id: 'NouvelleMAJ', title: 'Nouvelle MAJ', artist: 'Kich', coverImage: 'image/MAJ.JPG', audioSrc: 'freestyle/NouvelleMAJ.mp3' },
                { id: 'Pack M', title: 'Pack M', artist: 'Kich', coverImage: 'image/PackM.JPG', audioSrc: 'freestyle/PackMMM_1.mp3' },
                { id: 'RevoWestern', title: 'Revo Western', artist: 'Kich', coverImage: 'image/Revo.JPG', audioSrc: 'freestyle/RevoWestern.mp3' },
                { id: 'Segarer', title: 'S\'egaré', artist: 'Kich', coverImage: 'image/Segarer.JPG', audioSrc: 'freestyle/Segarer.mp3' },
                { id: 'Taciturne', title: 'Taciturne', artist: 'Kich', coverImage: 'image/Taciture.JPG', audioSrc: 'freestyle/Taciturne.mp3' },
                { id: 'ToucheMonCoeur', title: 'Touche Mon Coeur', artist: 'Kich', coverImage: 'image/MonCoeur.JPG', audioSrc: 'freestyle/Touchermoncoeur.mp3' },
                { id: '1Million', title: '1 Million d\'raison', artist: 'Kich', coverImage: 'image/raison.png', audioSrc: 'freestyle/milliondraison.mp3' },
                { id: 'A230', title: ' A230', artist: 'Kich', coverImage: 'image/A230.png', audioSrc: 'freestyle/A 230.mp3' },
                { id: 'EnSouaa', title: 'EnSouaa', artist: 'Kich', coverImage: 'image/EnSoua.png', audioSrc: 'freestyle/En Soouuaa.mp3' },
                { id: 'EnVV', title: 'En VV', artist: 'Kich', coverImage: 'image/VV.png', audioSrc: 'freestyle/En vv.mp3' },
                { id: 'FuirCprobleme', title: 'FuirCprobleme', artist: 'Kich', coverImage: 'image/FuirCprobleme.png', audioSrc: 'freestyle/FuirCprobleme.mp3' },
                { id: 'Freestyle24piges', title: 'Freestyle24piges', artist: 'Kich', coverImage: 'image/Freestyle24piges.png', audioSrc: 'freestyle/Freestyle24piges.mp3' },
                { id: 'A toute a l\'heure', title: ' A toute a l\'heure', artist: 'Kich', coverImage: 'image/alheure.png', audioSrc: 'freestyle/Maman a toute a l\'heure.mp3' },
                { id: 'Entouredbatiment', title: 'Entoure D\'batiment', artist: 'Kich', coverImage: 'image/Entoure.png', audioSrc: 'freestyle/Entoure dbatiment.mp3' },
                { id: 'UnCalumetUnFeu', title: 'Un Calumet Un Feu', artist: 'Kich', coverImage: 'image/UnCalumetUnFeu.png', audioSrc: 'freestyle/Un Calumet Un Feu.mp3' },
                { id: 'Zero6m', title: 'Zero 6m', artist: 'Kich', coverImage: 'image/Zero6m.png', audioSrc: 'freestyle/Zero 6m.mp3' },

            ]
        },
        {
            id: 'map',
            name: 'MAP  🏗️',
            className: 'map-bg', 
            categoryImage: 'image/MAP.png',
            sounds: [
                { id: 'Mercedes', title: 'Mercedes', artist: 'Kich', coverImage: 'image/Mercedes.png', audioSrc: 'map/Mercedes.mp3' },
                { id: 'Abandoonner', title: 'Abandonner', artist: 'Kich', coverImage: 'image/Abandonner.png', audioSrc: 'map/Abandoonner.mp3' },
                { id: 'DeCocaDolive', title: 'De Coca, D\'olives', artist: 'Kich', coverImage: 'image/DeCocaDolive.png', audioSrc: 'map/DeCocaDolive.mp3' },
                { id: 'LaVie', title: 'LaVie', artist: 'Kich', coverImage: 'image/LaVie.png', audioSrc: 'map/LaVie.mp3' },
                { id: 'MenVouloir', title: 'M\'en Vouloir', artist: 'Kich', coverImage: 'image/MenVouloir.png', audioSrc: 'map/M\'en Vouloir.mp3' },
                { id: 'ResterHonnete', title: 'Rester Honnete', artist: 'Kich', coverImage: 'image/ResterHonnete.png', audioSrc: 'map/Rester Honnete.mp3' },
                { id: 'ALaFete', title: 'ALaFete', artist: 'Kich', coverImage: 'image/ALaFete.png', audioSrc: 'map/A La Fete.mp3' },
                { id: 'PLUSMAP', title: 'Plus Map', artist: 'Kich', coverImage: 'image/PlusMapp.png', audioSrc: 'map/PLUSMAP.mp3' },

            ]
        },
        {
            id: 'feat',
            name: 'FEAT 👥',
            className: 'feat-bg',
            categoryImage: 'image/FEAT.png',
            sounds: [
                { id: 'Ferrari', title: 'Ferrari', artist: 'TITO X Kich', coverImage: 'image/Ferrari.png', audioSrc: 'feat/Ferrari.mp3' },
                { id: 'Surripa', title: 'Sur Ripa', artist: 'PAKI X TITO x Kich', coverImage: 'image/SurRipa.png', audioSrc: 'feat/SURRIPA.mp3' },
                { id: 'Push', title: 'Push', artist: 'PAKI X TITO X MILO X Kich', coverImage: 'image/Push.png', audioSrc: 'feat/push_1.mp3' },
            ]
        }
    ];

    // --- ÉLÉMENTS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const categoryListPage = document.getElementById('page-categories');
    const soundListPage = document.getElementById('page-sounds');
    const categoryListContainer = document.getElementById('category-list');
    const soundListContainer = document.getElementById('sound-list-container');
    const soundsPageTitle = document.getElementById('sounds-page-title');
    const backButton = document.getElementById('back-to-categories');

    // Éléments du lecteur audio
    const audioPlayer = document.getElementById('audio-player');
    const audio = new Audio();
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playerCover = document.getElementById('player-cover');
    const playerTitle = document.getElementById('player-title');
    const playerArtist = document.getElementById('player-artist');
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');
    // AJOUTE ces nouvelles variables
    const playerPage = document.getElementById('page-player');
    const playerCloseBtn = document.getElementById('player-close-btn');
    const fullPlayerCover = document.getElementById('full-player-cover');
    const fullPlayerTitle = document.getElementById('full-player-title');
    const fullPlayerArtist = document.getElementById('full-player-artist');
    const fullPlayPauseBtn = document.getElementById('full-play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const fullProgressContainer = document.getElementById('full-progress-container');
    const fullProgressBar = document.getElementById('full-progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');

    const togglePlaylistBtn = document.getElementById('toggle-playlist-btn');
    const playlistOverlay = document.getElementById('playlist-overlay');
    const playlistList = document.getElementById('playlist-list');

    // AJOUTE ces nouvelles variables d'état
    let currentPlaylist = [];
    let currentTrackIndex = -1;


    let currentSound = null;

    // --- NAVIGATION ---
    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    }

    // --- AFFICHAGE ---
    /*    function renderCategories() {
           categoryListContainer.innerHTML = musicData.map(category => {
               // On vérifie si la catégorie est "banger" pour lui donner une classe spéciale
               const extraClass = category.id === 'banger' ? 'full-width' : '';
       
               return `
                   <div 
                       class="category-card ${extraClass}" 
                       data-category-id="${category.id}" 
                       style="background-image: url('${category.categoryImage}');"
                   >
                   </div>
               `;
           }).join('');
       }
        */
       function renderCategories() {
        categoryListContainer.innerHTML = musicData.map(category => {
            const extraClass = category.id === 'banger' ? 'full-width' : '';
            
            // On n'ajoute plus de style en ligne, juste les classes
            return `
                <div 
                    class="category-card ${extraClass} ${category.className}" 
                    data-category-id="${category.id}"
                >
                </div>
            `;
        }).join('');
    }
    

    function renderSounds(categoryId) {
        const category = musicData.find(c => c.id === categoryId);
        if (!category) return;

        soundsPageTitle.innerText = category.name;
        soundListContainer.innerHTML = category.sounds.map(sound => `
            <div class="sound-item" data-sound-id="${sound.id}" data-category-id="${categoryId}">
                <img src="${sound.coverImage}" alt="${sound.title}">
                <div class="info">
                    <div class="title">${sound.title}</div>
                    <div class="artist">${sound.artist}</div>
                </div>
            </div>
        `).join('');
        showPage('page-sounds');
    }

    // --- LOGIQUE DU LECTEUR AUDIO ---
    /*   function playSound(sound, category) {
          // Créer la playlist à partir de la catégorie actuelle
          currentPlaylist = category.sounds;
          currentTrackIndex = currentPlaylist.findIndex(s => s.id === sound.id);
  
          currentSound = sound;
          audio.src = sound.audioSrc;
          audio.play();
  
          // Mettre à jour les deux interfaces (petite barre et pleine page)
          updateAllPlayerUI(sound);
      } */


    function playSound(sound, category) {
        // ... (le code existant de la fonction reste le même) ...
        currentPlaylist = category.sounds;
        currentTrackIndex = currentPlaylist.findIndex(s => s.id === sound.id);

        currentSound = sound;
        audio.src = sound.audioSrc;
        audio.play();

        // Mettre à jour les deux interfaces (petite barre et pleine page)
        updateAllPlayerUI(sound);

        // AJOUTE CETTE LIGNE pour mettre à jour l'écran de verrouillage
        updateMediaSession(sound);
    }


    function updateAllPlayerUI(sound) {
        // Petite barre
        audioPlayer.classList.add('visible');
        playerCover.src = sound.coverImage;
        playerTitle.innerText = sound.title;
        playerArtist.innerText = sound.artist;

        // Page pleine
        fullPlayerCover.src = sound.coverImage;
        fullPlayerTitle.innerText = sound.title;
        fullPlayerArtist.innerText = sound.artist;

        updatePlayPauseIcons();
    }

    function playNext() {
        // Ligne de sécurité : ne fait rien si la playlist est vide
        if (currentPlaylist.length === 0) return;
        currentTrackIndex++;
        if (currentTrackIndex >= currentPlaylist.length) {
            currentTrackIndex = 0; // Recommence la playlist
        }
        const nextSound = currentPlaylist[currentTrackIndex];
        const category = musicData.find(c => c.sounds.some(s => s.id === nextSound.id));
        playSound(nextSound, category);
    }

    function playPrev() {
        // Ligne de sécurité : ne fait rien si la playlist est vide
        if (currentPlaylist.length === 0) return;
        currentTrackIndex--;
        if (currentTrackIndex < 0) {
            currentTrackIndex = currentPlaylist.length - 1; // Revient à la fin
        }
        const prevSound = currentPlaylist[currentTrackIndex];
        const category = musicData.find(c => c.sounds.some(s => s.id === prevSound.id));
        playSound(prevSound, category);
    }


    function updatePlayPauseIcons() {
        const icon = audio.paused ? '#icon-play' : '#icon-pause';
        const bigIcon = audio.paused ?
            '<svg width="48" height="48"><use href="#icon-play"/></svg>' :
            '<svg width="48" height="48"><use href="#icon-pause"/></svg>';

        playPauseBtn.innerHTML = `<svg width="24" height="24"><use href="${icon}"/></svg>`;
        fullPlayPauseBtn.innerHTML = bigIcon;
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function renderPlaylist() {
        playlistList.innerHTML = currentPlaylist.map((sound, index) => {
            const isPlaying = index === currentTrackIndex ? 'playing' : '';
            return `
            <div class="sound-item ${isPlaying}">
                <img src="${sound.coverImage}" alt="${sound.title}">
                <div class="info">
                    <div class="title">${sound.title}</div>
                    <div class="artist">${sound.artist}</div>
                </div>
            </div>
        `;
        }).join('');
    }


    function togglePlayPause() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updatePlayPauseIcons(); // Met à jour les deux boutons
    }


    function updatePlayPauseIcons() { // La fonction est déplacée plus haut mais on la garde ici pour référence
        const icon = audio.paused ? '#icon-play' : '#icon-pause';
        const bigIcon = audio.paused ?
            '<svg width="48" height="48"><use href="#icon-play"/></svg>' :
            '<svg width="48" height="48"><use href="#icon-pause"/></svg>';

        playPauseBtn.innerHTML = `<svg width="24" height="24"><use href="${icon}"/></svg>`;
        fullPlayPauseBtn.innerHTML = bigIcon;
    }


    function updateProgress() {
        const { duration, currentTime } = audio;
        if (duration) {
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            fullProgressBar.style.width = `${progressPercent}%`;
            currentTimeEl.textContent = formatTime(currentTime);
            durationEl.textContent = formatTime(duration);
        }
    }

    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    }

    // AJOUTE cette nouvelle fonction
    function updateMediaSession(sound) {
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: sound.title,
                artist: sound.artist,
                artwork: [
                    { src: sound.coverImage, sizes: '512x512', type: 'image/png' },
                ]
            });
        }
    }


    // --- GESTION DES ÉVÉNEMENTS ------------------------------------------------------------------
    // On utilise un seul écouteur d'événements pour toute l'application
    document.body.addEventListener('click', (e) => {
        const target = e.target;

        // Clic sur une catégorie
        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            categoryCard.classList.add('clicked');
            const categoryId = categoryCard.dataset.categoryId;
            setTimeout(() => {
                categoryCard.classList.remove('clicked');
                renderSounds(categoryId);
            }, 150);
            return; // On arrête ici pour ne pas déclencher d'autres clics
        }

        // Clic sur un son
        const soundItem = target.closest('.sound-item');
        if (soundItem) {
            const category = musicData.find(c => c.id === soundItem.dataset.categoryId);
            const sound = category.sounds.find(s => s.id === soundItem.dataset.soundId);
            if (sound) playSound(sound, category);
            return;
        }

        // Clic sur la barre de lecteur en bas (pour ouvrir la page pleine)
        const playerBar = target.closest('#audio-player');
        const playPauseButton = target.closest('#play-pause-btn');
        if (playerBar && !playPauseButton) { // Ouvre si on clique sur la barre, mais PAS sur le bouton play/pause
            playerPage.classList.add('visible');
            return;
        }

        // Clic sur le bouton Play/Pause (petite barre)
        if (playPauseButton) {
            togglePlayPause();
            return;
        }

        // Clic sur le bouton Play/Pause (page pleine)
        if (target.closest('#full-play-pause-btn')) {
            togglePlayPause();
            return;
        }

        // Clic sur le bouton Précédent
        if (target.closest('#prev-btn')) {
            playPrev();
            return;
        }

        // Clic sur le bouton Suivant
        if (target.closest('#next-btn')) {
            playNext();
            return;
        }

        // Clic sur le bouton pour afficher la playlist
        if (target.closest('#toggle-playlist-btn')) {
            renderPlaylist();
            playlistOverlay.classList.add('visible');
            return;
        }

        // Clic pour fermer la playlist (en cliquant sur le fond)
        if (target === playlistOverlay) {
            playlistOverlay.classList.remove('visible');
            return;
        }

        // Clic sur le bouton pour fermer la page pleine
        if (target.closest('#player-close-btn')) {
            playerPage.classList.remove('visible');
            return;
        }

        // Clic sur le bouton Retour (page des sons)
        if (target.closest('#back-to-categories')) {
            showPage('page-categories');
            return;
        }
    });

    // Événements de l'objet audio qui ne sont pas des clics
    audio.addEventListener('play', updatePlayPauseIcons);
    audio.addEventListener('pause', updatePlayPauseIcons);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', playNext);
    progressContainer.addEventListener('click', setProgress);
    fullProgressContainer.addEventListener('click', setProgress);


    // --- INITIALISATION ---
    renderCategories();
});

