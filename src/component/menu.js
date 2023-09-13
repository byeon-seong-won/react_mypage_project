import { setbgActions, settabidxActions } from '../store/store.js'
import { useSelector, useDispatch} from 'react-redux'
// import styled from 'styled-components'



// 왼쪽메뉴
function Menu({menu}) {

  let bg = useSelector((state) => {return state.bg})
  let tabidx = useSelector((state) => {return state.tabidx})

  // const {counter, person }  = useSelector(state => ({
  //   count : state.counterReducer.count,
  //   person: state.personReducer.person,
  // }));


  let dispatch = useDispatch()


    return (
      <div className={"menu " + ( bg == 'dark'? 'light' : 'dark') }>
        <ul>
            {
              menu.map(function(a,i) {
                return(
                  <li onClick={()=> {dispatch(settabidxActions.setTabidx(i))} } 
                    className={ tabidx == i? 'on' : 'none'}>
                    <span class="xi-emoticon"></span>
                    <span> {menu[i]} </span>
                  </li>
                )
              })
            }
        </ul>
        <div className='button'>
          <button onClick={()=> {dispatch(setbgActions.setBg('light'))}}>light mode</button>
          <button onClick={()=> {dispatch(setbgActions.setBg('dark'))}}>dark mode</button>
        </div>
      </div>
    )
  }


  export default Menu