var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if (note !== undefined && note && note.trim()) {
                var item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;
            }
            return false;
        },

        remove: function(index) {
            if (index >= 0 && index < list.length) {
                list.splice(index, 1);
                return true;
            }
            return false;
        },

        count: function() {
            return list.length;
        },

        list: function() {
            return list;
        },

        find: function(str) {
            if (str !== undefined && str) {
                var notesContainingStr = [];
                for (var i = 0; i < list.length; i++) {
                    if (list[i].text.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
                        notesContainingStr.push(list[i]);
                    }
                }
                if (notesContainingStr.length > 0) {
                    return true;
                }
            }
            return false;
        },

        clear: function() {
            list.splice(0, list.length);
        }
    }
}());