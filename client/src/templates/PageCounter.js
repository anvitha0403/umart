import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {filterResult} from "../features/Shop/ShopSlice"

const PageCounter = ({filter}) => {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.shop.filters);
    // const filter=useSelector(state=>state.shop)
    useEffect(() => {
         
        
        if (page.prevPage === false) {
          document.getElementById("prev").classList.add("disabled");
      }
        else {
           document.getElementById("prev").classList.remove("disabled");
          
      }
        if (page.nextPage === false) {
          document.getElementById("next").classList.add("disabled");
      }
        else {
           document.getElementById("next").classList.remove("disabled");
          
      }
       

     },[page.page])
    const render = [];
    const handle = (val) => {
        const f = filter;
        f.page = val;
        dispatch(filterResult(f))
    }
    // render.push(page.page);
    // var next = page.page + 1;
    // var prev = page.page - 1;

    
    // while (render.length !== 4 && (next <= page.pages || prev >= 1)) {
    //     if (next <= page.pages) {
    //         render.push(next);
    //         next++;
    //     }
    //     if (prev >= 1) {
    //         render.unshift(prev);
    //         prev--;
    //     }
    // }
    for (var i = 1; i <=page.pages; i++){
        render.push(i);
    }
   
  return (
    <div>
      {" "}
      <div className="page-container">
        <div className="direction product-card__button" id="prev">
          PREV
        </div>
        {render &&
          render.length &&
                  render.map((m) => {
                      if (m === page.page) {
                            return (
                              <div
                                className="page product-card__button active-page"
                                id={`page${m}`}
                              >
                                {m}
                              </div>
                            );
                  
              }
            return (
                <div className="page product-card__button" id={`page${m}`} onClick={()=>{handle(m)}}>
                {m}
              </div>
              );
              
          }
          
                  )}

        <div className="direction product-card__button" id="next">
          NEXT
        </div>
      </div>
    </div>
  );
}

export default PageCounter