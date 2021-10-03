const initConferences = conferences => {

    const conferencesContainer = document.getElementById('conferences-list');
    conferencesContainer.innerHTML += `<li><div class="row"><div class="col-lg-1">9:00 AM</div><div class="col-lg-9"><h5>Bienvenida</h5>
    </div><div class="col-lg-1"><a href="https://www.crowdcast.io/e/barcamp-rd-2020/1" target="_blank"><h5>Ver en CrowdCast</h5></a></div></div></li>`;

    for (let index = 0; index < conferences.length; index++) {

        const conference = conferences[index];

        const listItem = document.createElement('li');
        listItem.innerHTML = `<div class="row"><div class="col-lg-1">${conference.talk.schedule}</div></div>`; 
        
        const container = document.createElement('div');
        container.classList.add('col-lg-9');
        container.innerHTML = `<h5>${conference.talk.title}</h5>
        <p><i>Por: ${conference.name}</i></p>
        <p>${conference.talk.abstract}</p>`;
        // TODO: view more button
        listItem.children[0].appendChild(container);
        listItem.children[0].innerHTML += `<div class="col-lg-1"><a href="https://www.crowdcast.io/e/barcamp-rd-2020/${index+2}" target="_blank"><h5>Ver en CrowdCast</h5></a></div>`;
        conferencesContainer.appendChild(listItem);
    }

    conferencesContainer.innerHTML += `<li><div class="row"><div class="col-lg-1">5:00 PM</div><div class="col-lg-9"><h5>De ISC a ICC: Evolución de la carrera en la PUCMM al celebrar sus 40 años</h5><p>Este panel busca dar un repaso por los orígenes y evolución de la carrera de Ingeniería de Sistemas y Computación de la PUCMM con motivo de celebrarse su 40 aniversario y dar a conocer el nuevo plan de estudios, el cual presenta actualizaciones significativas. Estarán participando los directores pasados y actuales de la carrera.</p>
    </div><div class="col-lg-1"><a href="https://www.crowdcast.io/e/barcamp-rd-2020/17" target="_blank"><h5>Ver en CrowdCast</h5></a></div></div></li>`;
}

const initSpeakers = speakers => {

    const speakersContainer = document.getElementById('speakers-container');

    for (let index = 0; index < speakers.length; index++) {

        const speaker = speakers[index];

        const speakerInfo = document.createElement('div');
        speakerInfo.classList.add('info');
        speakerInfo.innerHTML += `<h5>${speaker.name}</h5>`;

        const socials = document.createElement('div');
        socials.classList.add('social');

        for (let i = 0; i < speaker.socials.length; i++) {

            socials.innerHTML += `<a href="${speaker.socials[i].link}" target="_blank"><span><i class="${speaker.socials[i].icon}"></i></span></a>`;
        }
        speakerInfo.appendChild(socials);

        if (speaker.bio.trim().length > 0) {
            const viewMore = document.createElement('a');
            viewMore.classList.add('more');
            viewMore.innerText = 'Biografía';
            viewMore.addEventListener('click', e => {
                const modalContainer = document.getElementById(`modal_biography_${index + 1}`);
                modalContainer.classList.add('open');
            });
            speakerInfo.appendChild(viewMore);
        }

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('charlista');
        imageContainer.style.backgroundImage = `url(${speaker.avatar})`;
        imageContainer.appendChild(speakerInfo);

        const card = document.createElement('div');
        card.classList.add('col-xl-3', 'col-lg-4', 'col-md-6', 'col-sm-6', 'col-xs-8');
        card.appendChild(imageContainer);
        speakersContainer.appendChild(card);

        if (speaker.bio.trim().length === 0) {
            continue;
        }

        const modal = document.createElement('div');
        modal.id = `modal_biography_${index + 1}`;
        modal.classList.add('modal-biography');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.innerHTML += `<div class="modal-header"><div class="row"><div class="col-lg-5 col-md-6 col-sm-6">
            <img src="${speaker.avatar}" class="img-fluid"></div><div class="col-lg-6 col-md-6 col-sm-6 pt-4">
            <h5>${speaker.name}</h5>${socials.outerHTML}</div></div></div></div><div class="modal-body">
            <p>${speaker.bio}</p></div></div>`;

        const closeButton = document.createElement('a');
        closeButton.href = 'javascript:void(0)';
        closeButton.innerText = 'Cerrar';
        closeButton.addEventListener('click', e => {
            const modalContainer = document.getElementById(`modal_biography_${index + 1}`);
            modalContainer.classList.remove('open');
        });
        const modalBody = modalContent.getElementsByClassName('modal-body')[0];
        modalBody.appendChild(closeButton);

        modal.appendChild(modalContent);
        speakersContainer.appendChild(modal);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    initConferences(submissions);
    initSpeakers(submissions);
});
