menu_list_array = [ "Veg Margherita Pizza",                  
  "chicken Tandoori Pizza","Veg Supreme Pizza", "Paneer Tikka Pizza", "Delux Veggie Pizza", "VEG Extravaganza Pizza"  ];

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }

    
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
}

