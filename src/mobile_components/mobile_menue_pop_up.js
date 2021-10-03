import './Design/mobile_menue_popup.css'


function mobile_menue_pop_up(props) {




    return(props.trigger)? (
      
      <div>

        <div id="mobile_menue_pop_up_wrapper">
 Mobile Pop up
      
      <div id="mobile_menue_pop_up_close"
        onClick={()=>props.setTrigger(false)}
      >
        close
      </div>
      
      {props.children}
        </div>
         
        
      </div>
  
    ):"";
  }
  
  export default mobile_menue_pop_up;
  