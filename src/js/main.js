function SearchChange() {
    const [searchInput] = document.getElementsByClassName("search-input");
    const filter = searchInput.value.toLowerCase();
    const [contactsList] = document.getElementsByClassName("contacts-list");
    const contacts = Array.from(contactsList.getElementsByClassName("contact-name"));

    contacts.forEach(contact => {
        const [anchor] = contact.getElementsByTagName("a");
        const contactName = anchor.textContent || anchor.innerText;
        contact.style.display = contactName.toLowerCase().indexOf(filter) > -1 ? "block" : "none";
    });
}
