console.log("form.js");
$( document ).ready( function() {
    console.log("form.js - document ready");
    var sortable_group = $("ol.panelTimes").sortable({
        group: 'panelTimes',
        // set $item relative to cursor position
        onDragStart: function ($item, container, _super) {
            var offset = $item.offset(),
                pointer = container.rootGroup.pointer;
            
            adjustment = {
                left: pointer.left - offset.left,
                top: pointer.top - offset.top
            };
            
            _super($item, container);
        },
        
    });
    $('#panelForm').submit( function serialize_sortable() {
        try {
            var data = sortable_group.sortable("panelTimes").get();
            console.debug(data);        
            var jsonString = JSON.stringify(data, null, ' ');
            //var serialized = $('#times').serializeArray(); //jsonString.serializeArray();
            console.debug(jsonString);
            $('#timesj').val(jsonString);
        } catch (e) {
            console.error(e);
            // prevent form submission
            return false;
        }
    });

    $( 'input.name' ).garlic( {
        onRetrieve: function ( elem, retrievedValue ) {
            console.log( 'The retrieved value for ' + elem.name() + ' is : ' + retrievedValue );
        },
        onPersist: function ( elem, storedValue ) {
            console.log( 'The persisted value for ' + elem.name() + ' is : ' + storedValue );
        }       
    });
});

