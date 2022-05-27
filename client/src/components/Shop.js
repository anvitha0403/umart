import React, { useState, useEffect } from 'react'
import {getCategory} from '../features/Shop/ShopSlice'
import {filterResult} from '../features/Shop/ShopSlice'
import { useDispatch,useSelector } from 'react-redux';
import { Hero } from '../templates/Hero';
const Shop = () => {
    const dispatch = useDispatch();
  const category = useSelector((state) => state.shop.categories);
  
    const [checkbox,setcheckbox]=useState(new Array(100).fill(false))
  
    const [filters, setFilters] = useState({
      price: {
        minr: 0,
        maxr: 10000,
        min: 0,
        max:10000,
        sort: 1,
      },
      category: [],
      limit: 10,
      page:1,
    });
  const [rangemin, setRangemin] = useState(filters.price.minr);
  const [rangemax, setRangemax] = useState(filters.price.maxr);
    useEffect(() => {
         dispatch(getCategory());
      
        
        
    }, [])
  useEffect(() => {
    dispatch(filterResult(filters))
  },[filters,dispatch])
  const handleRangemin = (e) => {
    const val1 = e.target.value;
    setFilters(state => {
      state.price.min = val1;
      return {...state}

    })
    setRangemin(val1);
    
   }
  const handleRangemax = (e) => {
    const val1 = e.target.value;
     setFilters((state) => {
       state.price.max = val1;
       return { ...state };
     });
    setRangemax(val1);
    
   }
    const handlecheck = (index) => {
        if (checkbox[index] === false) {
            console.log(index)
            console.log(checkbox)
            setFilters(state => {
                const value = document.getElementById(`check${index}`).value;
               state.category=state.category.filter((item) => item !== value);
                state.category.push(value)
              return { ...state };
            })
        }
        else {
            setFilters((state) => {
              const value = document.getElementById(`check${index}`).value;

             
state.category=state.category.filter((item) => item !== value);
              
              return { ...state };
              // //remember
            });
            
        }
        setcheckbox((newstate) => {
          const arr =[...newstate];
            arr[index] = !newstate[index];
          return [ ...arr ];
        })
        console.log(filters.category)
        
    }
    
  return (
    <div className="shop-container">
      <div className="shop-filters">
        {category.length ? (
          category.map((m, i) => {
            return (
              <label>
                <input
                  type="checkbox"
                  value={m.name}
                  id={`check${i}`}
                  onChange={() => handlecheck(i)}
                  checked={checkbox[i]}
                />

                {m.name}
              </label>
            );
          })
        ) : (
          <></>
        )}
        <label htmlFor="">
          <div>{rangemin}</div>
          <input
            type="range"
            name="price"
            id="price"
            min={filters.price.minr}
            max={filters.price.maxr / 2}
            onChange={(e) => handleRangemin(e)}
            value={rangemin}
          />
          <input
            type="range"
            name="price"
            id="price"
            min={filters.price.maxr / 2}
            max={filters.price.maxr}
            onChange={(e) => handleRangemax(e)}
            value={rangemax}
          />
          <span className="mark"> </span>
          <div>{rangemax}</div>
        </label>
      </div>
      <div className="shop-products">
        <Hero
          selector={(state) => state.shop.filters.products}
          title={"shop"}
          error={(state) => state.shop.error}
        />
      </div>
    </div>
  );
}

export default Shop