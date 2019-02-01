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
            var lis = $('#goodTimes').find('li');
            var arr = [];
            if (lis.length === 0) {
                arr = [];
            } else {
                console.debug(lis.length);
                arr = $.map( lis, function (li) {
                    console.debug(li.id);
                    return {
                        "id": li.id,
                        "data-id": li['data-id']
                        };
                    });
            }
            var jsonString = JSON.stringify(arr, null, '');            
            $('#hidden-good-times-input').val( jsonString);

            lis = $('#badTimes').find('li');
            arr = [];
            if (lis.length === 0) {
                arr = [];
            } else {
                console.debug(lis.length);
                arr = $.map( lis, function (li) {
                    console.debug(li.id);
                    return {
                        "id": li.id,
                        "data-id": li['data-id']
                        };
                    });
            }
            jsonString = JSON.stringify(arr, null, '');            
            $('#hidden-bad-times-input').val( jsonString);            
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

