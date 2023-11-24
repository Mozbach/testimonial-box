const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.user-name');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Charolotte',
        position: 'Nurse Practitioner',
        photo: 'https://randomuser.me/api/portraits/women/40.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi laborum id laboriosam maxime sint, sunt veritatis ratione quaerat. Dolore tempora reprehenderit, quibusdam et maiores voluptatem voluptates quod quasi laborum! Facere, quibusdam. Rem, eius? Dolore iusto delectus pariatur repudiandae perferendis laboriosam quas aspernatur sapiente nihil soluta. Perferendis aperiam est ut debitis?'
    },
    {
        name: 'Luna',
        position: 'Tutor',
        photo: 'https://randomuser.me/api/portraits/women/28.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolor dignissimos amet ex? Tenetur, reiciendis earum deleniti aliquam laudantium beatae dignissimos magnam harum debitis nobis nemo voluptas ad, rem molestiae. Dicta odio voluptas neque porro sed consequatur reprehenderit, vero dolore ipsam consequuntur. Doloremque aliquid modi aut. Repellendus aperiam perferendis aliquid, quaerat adipisci iusto dignissimos velit officia debitis ea et autem.'
    },
    {
        name: 'Emma',
        position: 'Finance Manager',
        photo: 'https://randomuser.me/api/portraits/women/42.jpg',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste rem praesentium dolor nulla ratione officiis adipisci esse temporibus, ipsum eaque cumque veniam assumenda molestiae quo quisquam officia sapiente dolores accusamus quos hic dolorem veritatis repudiandae! Cumque facilis quia repudiandae ducimus, dolor perspiciatis deleniti eum quam hic delectus ipsa voluptates ad recusandae officiis praesentium voluptatibus, eaque qui, doloremque maxime et soluta explicabo nobis voluptate voluptatem! Fuga quis error soluta harum veniam.'
    },
    {
        name: 'Ava',
        position: 'Personal Trainer',
        photo: 'https://randomuser.me/api/portraits/women/43.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil commodi placeat accusamus quae ad tenetur, est impedit magnam recusandae vel repellat qui quas libero. Reprehenderit reiciendis corrupti temporibus harum at, animi cupiditate ipsum consequatur eveniet quaerat! Fugit ea quas deserunt ipsum? Dolor facere debitis, magnam unde soluta dolorem in id quisquam eligendi doloribus doloremque fuga at illum veniam asperiores hic. Neque maiores deserunt dicta. Sequi omnis magnam, id beatae, enim ullam illum debitis expedita ratione magni, laborum eligendi est! Obcaecati.'
    },
    {
        name: 'Olivia',
        position: 'Counselor',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam adipisci, maiores temporibus rerum autem sed repellendus! Tenetur repudiandae assumenda consequatur ipsam mollitia quasi obcaecati culpa expedita exercitationem recusandae, incidunt perspiciatis corrupti hic possimus itaque! Dolores, repellat. Eligendi quisquam minima dolores, doloremque perferendis ut aspernatur iste facere deleniti. Mollitia minus autem odit quas, nemo voluptatum qui, eaque facilis culpa fugiat atque? Earum dolore illo quibusdam! Maiores rem ad iste doloremque ipsa dolores itaque asperiores fugiat maxime, cupiditate repellat dolore iusto, corporis molestiae adipisci eveniet delectus tenetur aspernatur esse unde laudantium illum.'
    },
    {
        name: 'Alice',
        position: 'Dentist',
        photo: 'https://randomuser.me/api/portraits/women/45.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure tempora eaque, reiciendis officiis, repudiandae quis explicabo incidunt dolorum dolor delectus dolore vel cupiditate sunt tenetur, omnis accusamus esse deserunt inventore placeat non libero facilis cum? Nisi aliquam ipsum architecto pariatur.'
    }
];

let idx = 1;

function updateTestimonial() {
    const {name, position, photo, text} = testimonials[idx];
    testimonial.innerHTML = text;
    userImage.src = photo;
    userName.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if(idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 10000); // call updateTestimonial every 10 seconds
