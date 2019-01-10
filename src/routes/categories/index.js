import { h, Component } from 'preact'

import style from './style'
import { api } from '../../utils'
import Error from '../../components/error'

export default class Categories extends Component {
  state = {
    err: undefined,
    categories: []
  }

  componentDidMount = () => {
    api({ action: 'categoriesByParent', id: parseInt(this.props.id || '0') }, (err, data) => {
      if (!err && data) {
        this.setState({ categories: data })
      } else {
        this.setState({ err })
      }
    })
  }

  componentWillReceiveProps = (nextProps) => {
    api({ action: 'categoriesByParent', id: parseInt(nextProps.id || '0') }, (err, data) => {
      if (!err && data) {
        this.setState({ categories: data })
      } else {
        this.setState({ err })
      }
    })
  }

  render ({ id }, { err, categories }) {
    const catStr = id !== '' ? `Categories from ${id}:` : 'Categories:'
    if (!categories) {
      return null
    }

    return (
      <div class={style.profile}>
        <h1>{ catStr }</h1>
        <ul>
          { categories.map((el) => (
            <li key={el.id} ><a href={`categories/${el.id}`} native>{ el.title }</a></li>
          ))
          }
        </ul>
        <Error error={err} />
      </div>
    )
  }
}
