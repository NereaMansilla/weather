import map from '../../Assets/BlankMap3.png'
import s from './NotFound.module.css'
import { ImSearch } from 'react-icons/im'
import { useSelector } from 'react-redux'


import React from 'react'

export const NotFound = () => {

  const mode = useSelector(state => state.dark)
  const style = {fontSize:"1em", fontWeight: '500'}
  return (
  

    <div className={ `${s.containerNotfound} ${mode ? s.lightcontainerNotFound : s.darkcontainerNotFound}` }>
    <h1 className={`${s.textNotFound} ${mode ? s.textNotFoundLight : s.textNotFoundDark}`}>Oh no! we cannot find this city</h1>
    <img className={s.blaknMap} src={map} alt='blank map' />
 <h1 className={`${s.text2NotFound} ${mode ? s.text2NotFoundLight : s.text2NotFoundDark}`}>Please try your search again <ImSearch style={style}/></h1>
    </div>
    



  )
}
