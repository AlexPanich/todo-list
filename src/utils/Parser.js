export default class Parser {
    constructor(text) {
        this.text = text
    }

    _getText(text) {
        const first = text.indexOf('#');
        return (first === -1) ? text.trim() : text.slice(0, first).trim();
    }

    _getTags(text) {
        const match = text.match(/#\S*/g);
        return match ? match.map(elem => elem.slice(1)) : [];
    }

    getText() {
        return this._getText(this.text);
    }

    getTags() {
        return this._getTags(this.text);
    }

    check(value) {
        if (this.text === '') return true;

        const searchText = this.getText().toLowerCase();
        const searchTags = this.getTags().map(tag => tag.toLowerCase());

        const valueText = this._getText(value.text).toLowerCase();
        const valueTags = this._getTags(value.text).map(tag => tag.toLowerCase());

        return valueText.includes(searchText)
            && ( searchTags.length > 0
                ? valueTags.length > 0
                ? searchTags.every(searchTag => valueTags.some(valueTag => valueTag.includes(searchTag)))
                : false
                : true
            );
    }
}
