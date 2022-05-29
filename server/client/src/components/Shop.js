import React, { useState, useEffect } from 'react'
import {getCategory} from '../features/Shop/ShopSlice'
import {filterResult} from '../features/Shop/ShopSlice'
import { useDispatch,useSelector } from 'react-redux';
import { Hero } from '../templates/Hero';
import { addCat, setLoading } from "../features/Shop/ShopSlice";
import PageCounter from "../templates/PageCounter";
import Loader from '../templates/Loader';
const Shop = (props) => {
  const dispatch = useDispatch();
  const cat = useSelector((state) => state.shop.addedcat);
  const category = useSelector((state) => state.shop.categories);
  const loading=useSelector((state) => state.shop.loading)
  
    const [checkbox,setcheckbox]=useState(new Array(100).fill(false))
  
    const [filters, setFilters] = useState({
      price: {
        minr: 0,
        maxr: 50000,
        min: 0,
        max:50000,
        sort: 1,
      },
      category: cat,
      limit: 6,
      page:1,
    });
 
  const [rangemin, setRangemin] = useState(filters.price.minr);
  const [rangemax, setRangemax] = useState(filters.price.maxr);
 

  useEffect(() => {
    if (cat.length>0) {
      console.log(category)
      var index = -1;
      for (var i = 0; i < category.length; i++){
        if (category[i].name === cat[0]) {
          index = i;
          break;
        }
      }
       console.log(cat)
       console.log(index);
       setcheckbox((state) => {
         state[index] = true;
         return [...state];
       });
       setFilters((state) => {
         if (state.category.length === 0) {
           state.category=cat
         }
         return { ...state };
       });
      const filter = { ...filters };
      filter.category = cat;
      dispatch(filterResult(filter));
       
       dispatch(addCat({ cat: [] }));
    }
  

  }, [])


  useEffect(() => {
    if (loading === false) {
      console.log(filters.category);
      dispatch(filterResult(filters));
    }
  }, [filters, dispatch]);
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
              console.log(state.category);
               state.category=state.category.filter((item) => item !== value);
              state.category.push(value)
              state.page = 1;
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
        {/* <label htmlFor="">
          <div>{rangemin}</div> */}
        {/* <input
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
          /> */}
        {/*           
        </label> */}
        <div className="label-container">
          <label>enter min price</label>
          <input
            type="text"
            className="form-input"
            value={filters.price.min}
            onChange={handleRangemin}
          />
        </div>
        <div className="label-container">
          <label>enter max price</label>
          <input
            type="text"
            className="form-input"
            value={filters.price.max}
            onChange={handleRangemax}
          />
        </div>
      </div>
      <div className="shop-products">
        {loading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <Hero
              selector={(state) => state.shop.filters.products}
              
              error={(state) => state.shop.error}
            />
            <PageCounter filter={filters} />
          </>
        )}
      </div>
    </div>
  );
}

export default Shop