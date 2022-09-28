
			$(function(){

				$("#tree").dynatree({
					checkbox: true,
      				selectMode: 3,
				      onSelect: function(select, node) {
				        // Display list of selected nodes
				        var selNodes = node.tree.getSelectedNodes();
				        // convert to title/key array
				        var selKeys = $.map(selNodes, function(node){
				             return "[" + node.data.key + "]: '" + node.data.title + "'";
				        });
				      },
				      onClick: function(node, event) {
				        // We should not toggle, if target was "checkbox", because this
				        // would result in double-toggle (i.e. no toggle)
				        if( node.getEventTargetType(event) == "title" )
				          node.toggleSelect();
				      },
				      onKeydown: function(node, event) {
				        if( event.which == 32 ) {
				          node.toggleSelect();
				          return false;
				        }
				      },
				      // The following options are only required, if we have more than one tree on one page:
				      cookieId: "dynatree-1",
				      idPrefix: "dynatree-1"




				});

				$("#btnToggleSelect").click(function(){
					$("#tree").dynatree("getRoot").visit(function(node){
						node.toggleSelect();
					});
					return false;
				});
				$("#btnDeselectAll").click(function(){
					$("#tree").dynatree("getRoot").visit(function(node){
						node.select(false);
					});
					return false;
				});
				$("#btnSelectAll").click(function(){
					$("#tree").dynatree("getRoot").visit(function(node){
						node.select(true);
					});
					return false;
				});

			});