 document.getElementById("searchbar").value = getSavedValue("searchbar");    // set the value to this input
                        
                
                        //Save the value function - save it to localStorage as (ID, VALUE)
                        function saveValue(e){
                            var id = e.id;  // get the sender's id to save it . 
                            var val = e.value; // get the value. 
                            localStorage.setItem(id, val);// Every time user writes something, the localStorage's value will override . 
                        }
                
                        //get the saved value function - return the value of "v" from localStorage. 
                        function getSavedValue  (v){
                            if (!localStorage.getItem(v)) {
                                return "";
                            }
                            return localStorage.getItem(v);
                        }