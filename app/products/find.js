import {cards} from './data'

export const find = (id) => {

  for(let item of cards) {
    if(item.id === id) {
      return(item)
    }
  }
}