import { BOOKS_PER_PAGE ,authors, genres, books } from "../JS/data.js";

let page = 1;

if (!books && !Array.isArray(books)) throw new Error("Source required");
//if (!range && range.length < 2) throw new Error("Range must be an array with two numbers");

const dayColours = {
  dark: "10, 10, 20",
  light: "255, 255, 255",
};

const nightColours = {
  dark: "255, 255, 255",
  light: "10, 10, 20",
};



const fragment = document.createDocumentFragment();
const extracted = books.slice(0, 36);

// const createPreview = (bookDetails) => {
//   const { id, title, author, image } = bookDetails;

//   const element = document.createElement("div");
// //   element.className = "order";
// //   element.draggable = true;
//      element.dataset.id = id;

//   element.innerHTML = /* html */ `
//         <h2 class="book__title" data-book-title>${title}</h2>
//         <div class="book__author" data-book-author>${author}</div>
//         <img src="${image}" alt="Image description"> 
//     `;

//   return element;
// };
    


// genres = document.createDocumentFragment();
// element = document.createElement("option");
// element.value = "any";
// element = "All Genres";
// genres.appendChild(element);

// for ([id, name]; Object.entries(genres); i++) {
//   document.createElement("option");
//   element.value = value;
//   element.innerText = text;
//   genres.appendChild(element);
// }

// data - search - genres.appendChild(genres);

// authors = document.createDocumentFragment();
// element = document.createElement("option");
// element.value = "any";
// element.innerText = "All Authors";
// authors.appendChild(element);

// for ([id, name]; Object.entries(authors); id++) {
//   document.createElement("option");
//   element.value = value;
//   element = text;
//   authors.appendChild(element);
// }

// data - search - authors.appendChild(authors);

//data - settings - theme.value === window.matchMedia &&
window.matchMedia("(prefers-color-scheme: dark)").matches ? "night": "day";
// Correct ternary syntax was |
let v = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "night": "day";

// documentElement.style.setProperty("--color-dark", css[v].dark);
// documentElement.style.setProperty("--color-light", css[v].light);


document.querySelector('[data-list-button]').innerHTML = "Show more" + (books.length - BOOKS_PER_PAGE);
document.querySelector('[data-list-button]').disabled = !(books.length - [page * BOOKS_PER_PAGE] > 0);

// Needed?
// document.querySelector('[data-list-button]').innerHTML = /* html */ [
//   "<span>Show more</span>",
//   '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
// ];


// EventListener?
//data_search_cancel.addEventListener("click",(document.querySelector("[data-search-overlay]").open = false));
// data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
// data-settings-form.submit() { actions.settings.submit }
// data-list-close.click() { data-list-active.open === false }

// data-list-button.click() {
//     document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
//     actions.list.updateRemaining()
//     page = page + 1
// }

// data-header-search.click() {
//     data-search-overlay.open === true ;
//     data-search-title.focus();
// }

// data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
//         }

//         if titleMatch && authorMatch && genreMatch => result.push(book)
//     }
    
    // if (display.length < 1){
    //     document.querySelector('[data-list-message]').class.add('list__message_show')}
    // else {
    //     document.querySelector('[data-list-message]').class.remove('list__message_show')}

    document.querySelector('[data-list-items]').innerHTML = ''
    const fragments = document.createDocumentFragment()
    // Change name of variable as it overlaps one further up in the script
    //const extracte = source.slice(range[0], range[1])
    
    const createPreview = (bookDetails) => {
        const { id, title, author, image } = bookDetails;
        const element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />

            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${author}</div>
            </div>
        `

        return element
    }


for (let i = 0; i < extracted.length; i++) {
  const preview = createPreview({
    author : authors[extracted[i].author],
    id : extracted[i].id,
    image : extracted[i].image,
    title : extracted[i].title,
  });

  fragment.appendChild(preview);
}

const bookDisplay = document.querySelector("[data-list-items]");
bookDisplay.appendChild(fragment);

//     data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     data-list-button.disabled = initial > 0

//     data-list-button.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open = false
// }

data - settings - overlay.submit;
{
  preventDefault();
  const formData = new FormData(event.target);
  const result = Object.fromEntries(formData);
  document.documentElement.style.setProperty(
    "--color-dark",
    css[result.theme].dark
  );
  document.documentElement.style.setProperty(
    "--color-light",
    css[result.theme].light
  );
  data - settings - overlay.open === false;
}

// data-list-items.click() {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if (active) break;
//         const previewId = node?.dataset?.preview

//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
//         }
//     }

//     if (!active) return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title

//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description
// }
