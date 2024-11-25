const useShowOnlineStatus = ({onlinestatus}) =>{
    if(onlinestatus == true){
      return(
        <span className="h-[25px] w-[25px] bg-green-500 rounded-full inline-block ml-1"></span>
      )
    }
    else{
      return(
        <span className="h-[25px] w-[25px] bg-red-500 rounded-full inline-block ml-1"></span>
      )
    }
} 

export default useShowOnlineStatus;