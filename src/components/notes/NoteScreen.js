import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar/>
        <div className='notes__content'>
          <input 
            type="text"
            placeholder='Some awesome title'
            className='notes__title-input'
            autoComplete='off'
          />
          <textarea
            placeholder='what happened today'
            className='notes__textarea'
            autoComplete='off'
          ></textarea>
          <div className='notes__image'>
            <img
              src ="https://mymodernmet.com/wp/wp-content/uploads/2020/11/International-Landscape-Photographer-thumbnail.jpg"
              alt ="imagen arbol"
            />
          </div>
        </div>
    </div>
  )
}
