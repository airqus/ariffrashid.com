import React, { Component } from 'react'

const defaultState = {
  dark: false,
  notFound: false,
  toggleDark: () => { },
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dark: false,
      notFound: false,
    }
  }

  componentDidMount() {
    const lsDark = JSON.parse(localStorage.getItem('dark'))

    if (lsDark) {
      this.dark = lsDark
    }
  }

  componentDidUpdate(prevState) {
    const { dark } = this.state

    if (prevState.dark !== dark) {
      localStorage.setItem('dark', JSON.stringify(dark))
    }
  }

  setNotFound = () => {
    this.setState({ notFound: true })
  }

  setFound = () => {
    this.setState({ notFound: false })
  }

  toggleDark = () => {
    this.setState(prevState => ({ dark: !prevState.dark }))
    if (typeof window.REMARK42 !== 'undefined') {
      if (JSON.parse(localStorage.getItem('dark'))) {
        window.REMARK42.changeTheme('light')
      } else (
        window.REMARK42.changeTheme('dark')
      )
    }
  }

  render() {
    const { children } = this.props
    const { dark, notFound } = this.state

    return (
      <ThemeContext.Provider
        value={{
          dark,
          notFound,
          setFound: this.setFound,
          setNotFound: this.setNotFound,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
