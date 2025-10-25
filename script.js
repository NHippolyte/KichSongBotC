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
                { id: 'pause', title: 'Pause', artist: 'Kich', coverImage: 'image/pause.png', audioSrc: 'freestyle/Pause.mp3' },
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
    const shuffleBtn = document.getElementById('shuffle-btn');
    const repeatBtn = document.getElementById('repeat-btn');


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
    let favorites = loadFavorites(); // Charge les favoris sauvegardés
let shuffleMode = false;
let repeatMode = 'none'; // 'none', 'all', 'one'


    let currentSound = null;

    // --- NAVIGATION ---
    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    }

    // --- AFFICHAGE ---
  /*      function renderCategories() {
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
    } */

/*     function renderCategories() {
        // 1. On crée le HTML pour les cartes
        let categoriesHTML = musicData.map(category => {
            const extraClass = category.id === 'banger' ? 'full-width' : '';
            // On ajoute la classe de style (ex: 'banger-bg')
            return `
                <div 
                    class="category-card ${extraClass} ${category.className || ''}" 
                    data-category-id="${category.id}"
                    style="background-image: url('${category.categoryImage}');"
                >
                </div>
            `;
        }).join('');
    
        // 2. Ajoute la carte des favoris si elle n'est pas vide
        if (favorites.length > 0) {
            const lastCategoryIsFullWidth = musicData.length > 0 && musicData[musicData.length - 1].id === 'banger';
            const favCardClass = lastCategoryIsFullWidth ? '' : 'full-width';
            
            // REMPLACE 'URL_DE_TON_IMAGE_FAVORIS.jpg' par le nom de ton image
            const favoriteBackgroundImage = 'image/favoris.png'; 
        
            categoriesHTML += `
                <div 
                    class="category-card favorites-card ${favCardClass}" 
                    data-category-id="favorites" 
                    style="background-image: url('${favoriteBackgroundImage}');" 
                >
                    <!-- Le contenu (emoji et texte) a été supprimé -->
                </div>
            `;
        }
    
        // 3. On met à jour le HTML
        categoryListContainer.innerHTML = categoriesHTML;
    
        // IMPORTANT : On a supprimé la boucle document.querySelectorAll qui ajoutait les écouteurs ici.
    }
     */

    function renderCategories() {
        // 1. On crée le HTML pour les catégories normales
        let categoriesHTML = musicData.map(category => {
            const extraClass = category.id === 'banger' ? 'full-width' : '';
            // On ajoute la classe de style (ex: 'banger-bg')
            return `
                <div 
                    class="category-card ${extraClass} ${category.className || ''}" 
                    data-category-id="${category.id}"
                    style="background-image: url('${category.categoryImage}');"
                >
                </div>
            `;
        }).join('');
    
        // 2. On AJOUTE TOUJOURS la carte des favoris
        const lastCategoryIsFullWidth = musicData.length > 0 && musicData[musicData.length - 1].id === 'banger';
        const favCardClass = lastCategoryIsFullWidth ? '' : 'full-width';
        
        // REMPLACE 'URL_DE_TON_IMAGE_FAVORIS.jpg' par le nom de ton image
        const favoriteBackgroundImage = 'image/favoris.png'; 
    
        categoriesHTML += `
            <div 
                class="category-card favorites-card ${favCardClass}" 
                data-category-id="favorites" 
                style="background-image: url('${favoriteBackgroundImage}');" 
            >
            </div>
        `;
    
        // 3. On met à jour le HTML
        categoryListContainer.innerHTML = categoriesHTML;
    }
    
    

   /*  function renderSounds(categoryId) {
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
    } */

   /*  function renderSounds(categoryId) {
        let categoryName = '';
        let soundsToShow = [];
    
        if (categoryId === 'favorites') {
            categoryName = 'Mes Favoris ❤️';
            // On récupère les détails complets des sons favoris
            soundsToShow = favorites.map(favId => findSoundById(favId)).filter(sound => sound !== null);
        } else {
            const category = musicData.find(c => c.id === categoryId);
            if (!category) return;
            categoryName = category.name;
            soundsToShow = category.sounds.map(s => ({ ...s, categoryId: category.id })); // Ajoute categoryId
        }
    
        soundsPageTitle.innerText = categoryName;
        soundListContainer.innerHTML = soundsToShow.map(sound => {
            const isFav = isFavorite(sound.id);
            const heartIcon = isFav ? '#icon-heart-filled' : '#icon-heart-empty';
            const favClass = isFav ? 'active' : '';
    
            return `
                <div class="sound-item" data-sound-id="${sound.id}" data-category-id="${sound.categoryId}">
                    <img src="${sound.coverImage}" alt="${sound.title}">
                    <div class="info">
                        <div class="title">${sound.title}</div>
                        <div class="artist">${sound.artist}</div>
                    </div>
                    <button class="favorite-btn ${favClass}" data-sound-id="${sound.id}" data-category-id="${sound.categoryId}">
                        <svg width="24" height="24"><use href="${heartIcon}"/></svg>
                    </button>
                </div>
            `;
        }).join('');
        showPage('page-sounds');
    } */

    function renderSounds(categoryId) {
        let categoryName = '';
        let soundsToShow = [];
        let isEmptyFavorites = false; // Nouvelle variable
    
        if (categoryId === 'favorites') {
            categoryName = 'Mes Favoris ❤️';
            soundsToShow = favorites.map(favId => findSoundById(favId)).filter(sound => sound !== null);
            // On vérifie si la liste des favoris est vide
            if (soundsToShow.length === 0) {
                isEmptyFavorites = true;
            }
        } else {
            const category = musicData.find(c => c.id === categoryId);
            if (!category) return;
            categoryName = category.name;
            soundsToShow = category.sounds.map(s => ({ ...s, categoryId: category.id }));
        }
    
        soundsPageTitle.innerText = categoryName;
    
        // Si c'est la catégorie favoris et qu'elle est vide, afficher le message
        if (isEmptyFavorites) {
            soundListContainer.innerHTML = `<p class="empty-favorites-message">Aucun son en favori pour le moment.</p>`;
        } else {
            // Sinon, afficher la liste des sons comme d'habitude
            soundListContainer.innerHTML = soundsToShow.map(sound => {
                const isFav = isFavorite(sound.id);
                const heartIcon = isFav ? '#icon-heart-filled' : '#icon-heart-empty';
                const favClass = isFav ? 'active' : '';
    
                return `
                    <div class="sound-item" data-sound-id="${sound.id}" data-category-id="${sound.categoryId}">
                        <img src="${sound.coverImage}" alt="${sound.title}">
                        <div class="info">
                            <div class="title">${sound.title}</div>
                            <div class="artist">${sound.artist}</div>
                        </div>
                        <button class="favorite-btn ${favClass}" data-sound-id="${sound.id}" data-category-id="${sound.categoryId}">
                            <svg width="24" height="24"><use href="${heartIcon}"/></svg>
                        </button>
                    </div>
                `;
            }).join('');
        }
        
        showPage('page-sounds');
    }


    // --- new Fonction ---

// AJOUTE ces fonctions pour Shuffle et Repeat

function toggleShuffle() {
    shuffleMode = !shuffleMode;
    shuffleBtn.classList.toggle('active', shuffleMode);
    
    // Si on active le shuffle, on mélange la playlist actuelle
    if (shuffleMode && currentPlaylist.length > 0) {
        shufflePlaylist();
        renderPlaylist(); // Met à jour l'overlay "À suivre"
    } else if (!shuffleMode && currentSound) {
        // Si on désactive, on reconstruit la playlist originale
        const originalCategory = musicData.find(c => c.id === currentSound.categoryId);
        if (originalCategory) {
            currentPlaylist = [...originalCategory.sounds]; // Copie pour ne pas modifier l'original
            // On retrouve l'index actuel dans la playlist non mélangée
            currentTrackIndex = currentPlaylist.findIndex(s => s.id === currentSound.id);
            renderPlaylist();
        }
    }
    tg.HapticFeedback.impactOccurred('light');
}

function toggleRepeat() {
    if (repeatMode === 'none') {
        repeatMode = 'all';
        repeatBtn.classList.add('active');
        repeatBtn.innerHTML = '<svg width="24" height="24"><use href="#icon-repeat"/></svg>';
    } else if (repeatMode === 'all') {
        repeatMode = 'one';
        repeatBtn.classList.add('active'); // Reste actif
        repeatBtn.innerHTML = '<svg width="24" height="24"><use href="#icon-repeat-one"/></svg>';
    } else { // repeatMode === 'one'
        repeatMode = 'none';
        repeatBtn.classList.remove('active');
        repeatBtn.innerHTML = '<svg width="24" height="24"><use href="#icon-repeat"/></svg>';
    }
    // Appliquer le mode repeat à l'élément audio HTML
    audio.loop = (repeatMode === 'one');
    tg.HapticFeedback.impactOccurred('light');
}

// Fonction pour mélanger un tableau (algorithme Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
    }
}

function shufflePlaylist() {
    if (!currentSound) return; // Ne pas mélanger s'il n'y a rien en cours

    // Garde le son actuel en première position
    const current = currentPlaylist.splice(currentTrackIndex, 1)[0];
    shuffleArray(currentPlaylist); // Mélange le reste
    currentPlaylist.unshift(current); // Remet le son actuel au début
    currentTrackIndex = 0; // L'index est maintenant 0
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


  /*   function playSound(sound, category) {
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
    } */

    function playSound(sound, category) {
        // Si on ne vient pas de la page favoris, créer la playlist
        if (category.id !== 'favorites') {
            currentPlaylist = [...category.sounds]; // Crée une copie pour le shuffle
            currentTrackIndex = currentPlaylist.findIndex(s => s.id === sound.id);
            
            // Appliquer le shuffle si activé
            if (shuffleMode) {
                 shufflePlaylist();
            }
        } else {
            // Pour les favoris, la playlist est déjà créée par renderSounds
             currentPlaylist = favorites.map(favId => findSoundById(favId)).filter(s => s !== null);
             currentTrackIndex = currentPlaylist.findIndex(s => s.id === sound.id);
             // On ne mélange pas les favoris par défaut
        }
    
    
        currentSound = sound;
        // On ajoute categoryId au son actuel pour référence future
        currentSound.categoryId = category.id; 
        audio.src = sound.audioSrc;
        // Gérer le mode 'repeat one'
        audio.loop = (repeatMode === 'one');
        audio.play();
        
        updateAllPlayerUI(sound);
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

  /*   function playNext() {
        // Ligne de sécurité : ne fait rien si la playlist est vide
        if (currentPlaylist.length === 0) return;
        currentTrackIndex++;
        if (currentTrackIndex >= currentPlaylist.length) {
            currentTrackIndex = 0; // Recommence la playlist
        }
        const nextSound = currentPlaylist[currentTrackIndex];
        const category = musicData.find(c => c.sounds.some(s => s.id === nextSound.id));
        playSound(nextSound, category);
    } */

    function playNext() {
        if (currentPlaylist.length === 0) return;
    
        // Si on ne répète pas en boucle le son actuel
        if (repeatMode !== 'one') {
             currentTrackIndex++;
            // Gérer le mode 'repeat all'
            if (currentTrackIndex >= currentPlaylist.length) {
                if (repeatMode === 'all') {
                    currentTrackIndex = 0; // Recommence la playlist
                } else {
                    // Fin de la playlist, on arrête (ou on pourrait mettre en pause)
                     audio.pause(); // Arrête la lecture
                     // Optionnel: remettre l'index au début pour une prochaine lecture
                     currentTrackIndex = currentPlaylist.length - 1; // Ou 0 si on veut que ça recommence au clic
                     return; // Important: sortir de la fonction ici
                }
            }
        }
        // Si repeatMode === 'one', l'audio.loop s'en charge, on ne change pas d'index
    
        const nextSound = currentPlaylist[currentTrackIndex];
        // On doit retrouver la catégorie originale du son suivant
        const soundDetails = findSoundById(nextSound.id);
        const originalCategory = musicData.find(c => c.id === soundDetails.categoryId);
        // On passe la catégorie originale pour que playSound la connaisse
        playSound(nextSound, originalCategory || { id: 'unknown', sounds: currentPlaylist });
    }

   /*  function playPrev() {
        // Ligne de sécurité : ne fait rien si la playlist est vide
        if (currentPlaylist.length === 0) return;
        currentTrackIndex--;
        if (currentTrackIndex < 0) {
            currentTrackIndex = currentPlaylist.length - 1; // Revient à la fin
        }
        const prevSound = currentPlaylist[currentTrackIndex];
        const category = musicData.find(c => c.sounds.some(s => s.id === prevSound.id));
        playSound(prevSound, category);
    } */
    function playPrev() {
        if (currentPlaylist.length === 0) return;
        
        currentTrackIndex--;
        if (currentTrackIndex < 0) {
            currentTrackIndex = currentPlaylist.length - 1; // Revient à la fin
        }
        const prevSound = currentPlaylist[currentTrackIndex];
        const soundDetails = findSoundById(prevSound.id);
        const originalCategory = musicData.find(c => c.id === soundDetails.categoryId);
        playSound(prevSound, originalCategory || { id: 'unknown', sounds: currentPlaylist });
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

    // AJOUTE ces fonctions pour les favoris

function loadFavorites() {
    const favs = localStorage.getItem('musicAppFavorites');
    return favs ? JSON.parse(favs) : [];
}

function saveFavorites() {
    localStorage.setItem('musicAppFavorites', JSON.stringify(favorites));
}

function isFavorite(soundId) {
    return favorites.includes(soundId);
}

function toggleFavorite(soundId, categoryId, buttonElement) {
    const soundIndex = favorites.indexOf(soundId);
    if (soundIndex > -1) {
        // Retirer des favoris
        favorites.splice(soundIndex, 1);
        buttonElement.classList.remove('active');
        buttonElement.innerHTML = '<svg width="24" height="24"><use href="#icon-heart-empty"/></svg>';
    } else {
        // Ajouter aux favoris
        favorites.push(soundId);
        buttonElement.classList.add('active');
        buttonElement.innerHTML = '<svg width="24" height="24"><use href="#icon-heart-filled"/></svg>';
    }
    saveFavorites();
    tg.HapticFeedback.impactOccurred('light');

    // Si on est sur la page des favoris, la rafraîchir
    if (document.getElementById('page-sounds').classList.contains('active') && soundsPageTitle.innerText.includes('Favoris')) {
        renderSounds('favorites');
    }
}

// Trouve un son dans n'importe quelle catégorie par son ID
function findSoundById(soundId) {
     for (const category of musicData) {
        const foundSound = category.sounds.find(s => s.id === soundId);
        if (foundSound) {
            // On ajoute l'ID de la catégorie pour pouvoir reconstruire la playlist
            return { ...foundSound, categoryId: category.id };
        }
    }
    return null;
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
        // Ajout d'une petite sécurité au cas où l'ID serait manquant
        if (!categoryId) {
             console.error("Category ID missing from card:", categoryCard);
             categoryCard.classList.remove('clicked'); // Annule l'effet si bug
             return;
        }
        setTimeout(() => {
            categoryCard.classList.remove('clicked');
            renderSounds(categoryId); // Appel correct ici
        }, 150);
        return; // On arrête ici pour ne pas déclencher d'autres clics sur les éléments en dessous
    }

    // Clic sur un son (sans cliquer sur le bouton favori)
    const soundItem = target.closest('.sound-item');
    const favoriteBtn = target.closest('.favorite-btn'); // Vérifie si le clic était sur le bouton favori
    if (soundItem && !favoriteBtn) { 
        const categoryId = soundItem.dataset.categoryId;
        const soundId = soundItem.dataset.soundId;
        
        let category;
        let sound;

        if (categoryId === 'favorites') {
             sound = findSoundById(soundId);
             if (sound) {
                 category = { id: 'favorites', sounds: favorites.map(favId => findSoundById(favId)).filter(s => s !== null) };
             }
        } else {
             category = musicData.find(c => c.id === categoryId);
             sound = category?.sounds.find(s => s.id === soundId);
        }

        if (sound && category) playSound(sound, category);
        return;
    }
    
    // Clic sur le bouton Favori
    if (favoriteBtn) {
        toggleFavorite(favoriteBtn.dataset.soundId, favoriteBtn.dataset.categoryId, favoriteBtn);
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
    
    // Clic sur Shuffle
    if (target.closest('#shuffle-btn')) {
        toggleShuffle();
        return;
    }

    // Clic sur Repeat
    if (target.closest('#repeat-btn')) {
        toggleRepeat();
        return;
    }

    // Clic sur Playlist
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

    // Clic pour fermer la page pleine
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



    // On utilise un seul écouteur d'événements pour toute l'application
    /* document.body.addEventListener('click', (e) => {
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
    renderCategories();*/
}); 

