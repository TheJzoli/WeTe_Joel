describe('notes module', function () {
    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });
    it("should be able to add a new note", function () {
        expect(notes.add('sixth note')).toBe(true);
        expect(notes.count()).toBe(6);
    });
    it('should ignore blank notes');
    it('should ignore notes containing only whitespace');
    it('should require a string parameter');
});