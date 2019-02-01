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
            var data = $("ol.panelTimes");
            console.debug("data:", data);
            console.debug("len:", data.length);
            var filtered = $.map( data, function (ol) {
                console.debug(ol.id);
                var lis = $(ol).find('li');
                if (lis.length === 0) {
                    return [];
                } else {
                    console.debug(lis.length);
                    return $.map( lis, function (li) {
                        console.debug(li.id);
                        return {
                            "id": li.id,
                            "data-id": li['data-id']
                        };
                    });
                }
            });
            console.debug(filtered);
            var jsonString = JSON.stringify(filtered, null, '');
            console.debug(jsonString);
            $('#hidden-times-input').val(jsonString);
        } catch (e) {
            console.error(e);
            // prevent form submission on error
            return false;
        }
    });

    $( 'input#name' ).garlic( {
        onRetrieve: function ( elem, retrievedValue ) {
            console.log( 'The retrieved value for ' + elem.id + ' is : ' + retrievedValue );
        },
        onPersist: function ( elem, storedValue ) {
            console.log( 'The persisted value for ' + elem.id + ' is : ' + storedValue );
        }       
    });
});

